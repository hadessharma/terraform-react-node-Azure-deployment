const fs = require("fs");
// const exec = require("await-exec");

const { terraformExec } = require("../functions/terraformCommands");
const Subscription = require("../models/subscription");
//@des create Azure resource
//@route POST /api
//@access public

const createResource = async (req, res) => {
  try {
    // Need to pass subscription ID in the body to get creds. from db
    const { subscriptionId } = req.body;
    // Fetch the service principle according to selected subscription
    const subscription = await Subscription.findById(subscriptionId);
    console.log(subscription);
    // Update the provider file first
    fs.readFile("../terraform/_provider.tf", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      data = data.replace("@@subscription_id@@", subscription.subscriptionId);
      data = data.replace("@@tenant_id@@", subscription.tenantId);
      data = data.replace("@@client_id@@", subscription.clientId);
      data = data.replace("@@client_secret@@", subscription.clientSecret);

      fs.writeFile("../terraform/_provider.tf", data, "utf-8", (error) => {
        if (error) {
          return console.log(error);
        }
      });
    });

    // Update or Create <resource_name>.tf file acc. to type and values

    fs.readFile(
      `../terraform/templates/${req.body.type}.tf`,
      "utf-8",
      (err, data) => {
        if (err) {
          console.log(err);
        }

        const bodyObject = req.body;
        let newFile = data;

        for (const key in bodyObject) {
          if (Object.hasOwnProperty.call(bodyObject, key)) {
            const value = bodyObject[key];

            if (key != "type") {
              newFile = newFile.replaceAll(`@@${key}@@`, `${value}`);
            }
          }
        }

        fs.writeFile(
          `../terraform/${req.body.resourceName}.tf`,
          newFile,
          "utf-8",
          (error) => {
            if (error) {
              return console.log(error);
            }
          }
        );
      }
    );

    console.log("Exec in progress.");
    terraformExec()
      .then((result) => {
        console.log("Exec completed successfully.");
        console.log("RESULT:\n", result);
        fs.readFile("../terraform/_provider.tf", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          }
          data = data.replace(
            subscription.subscriptionId,
            "@@subscription_id@@"
          );
          data = data.replace(subscription.tenantId, "@@tenant_id@@");
          data = data.replace(subscription.clientId, "@@client_id@@");
          data = data.replace(subscription.clientSecret, "@@client_secret@@");

          fs.writeFile("../terraform/_provider.tf", data, "utf-8", (error) => {
            if (error) {
              return console.log(error);
            }
          });
        });
        return res
          .status(201)
          .json({ data: result, msg: "Resource created successfully." });
      })
      .catch((error) => {
        //Delete file in case of error
        console.log("Exec completed unsuccessfully.");
        console.error("ERROR:\n", error);
        fs.readFile("../terraform/_provider.tf", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          }
          data = data.replace(
            subscription.subscriptionId,
            "@@subscription_id@@"
          );
          data = data.replace(subscription.tenantId, "@@tenant_id@@");
          data = data.replace(subscription.clientId, "@@client_id@@");
          data = data.replace(subscription.clientSecret, "@@client_secret@@");

          fs.writeFile("../terraform/_provider.tf", data, "utf-8", (error) => {
            if (error) {
              return console.log(error);
            }
          });
        });
        return res
          .status(201)
          .json({ err: error, msg: "Resource creation failed." });
      });
    //Format the error and result
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal error" });
  }
};

const createSubscription = async (req, res) => {
  try {
    const values = req.body;
    const newSubscription = new Subscription(values);
    await newSubscription.save();
    return res
      .status(201)
      .json({ data: newSubscription, msg: "Subscription added successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal Error" });
  }
};

module.exports = { createResource, createSubscription };
