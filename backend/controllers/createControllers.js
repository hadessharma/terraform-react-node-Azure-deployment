const fs = require("fs");
const exec = require("await-exec");
const { terraformExec } = require("../functions/terraformCommands");
//@des create Azure resource
//@route POST /api
//@access public

const createResource = async (req, res) => {
  try {
    // console.log(req.body);
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

    return res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
    return res.status(500).json("internal error");
  }
};

module.exports = { createResource };
