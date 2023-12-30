const fs = require("fs");
const exec = require("await-exec");

const { terraformExec } = require("../functions/terraformCommands");
const Subscription = require("../models/subscription");
//@des create Azure resource
//@route POST /api
//@access public

const createResource = async (req, res) => {
  try {
    // console.log(req.body);
    // Need to pass subscription ID in the body to get creds. from db
    // Fetch the service principle according to selected subscription
    // Update the provide file first
    // Update or Create <resource_name>.tf file acc. to type and values
    switch (req.body.type) {
      case "rg":
        fs.readFile("../terraform/templates/rg.tf", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          }

          const bodyObject = req.body;
          let newFile = data;

          // Using a for...in loop to iterate over the properties of req.body
          // Replacing the variables in terraform file from the req.body
          for (const key in bodyObject) {
            if (Object.hasOwnProperty.call(bodyObject, key)) {
              const value = bodyObject[key];

              if (key !== "type") {
                newFile = newFile.replaceAll(`@@${key}@@`, `${value}`);
              }
            }
          }

          // Create resource specific terraform file from the template
          fs.writeFile(
            `../terraform/${req.body.rgName}.tf`,
            newFile,
            "utf-8",
            (error) => {
              if (error) {
                return console.log(error);
              }
            }
          );
        });
        break;

      default:
        break;
    }

    // console.log("Exec in progress.");
    await terraformExec();
    // console.log("Exec completed.");

    return res
      .status(201)
      .json({ data: req.body, msg: "Resource created successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal error" });
  }
};

const createSubscription = async (req, res) => {
  try {
    const values = req.body;
    // console.log(values);
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
