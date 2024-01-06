const cp = require("child_process");

// Run terraform init, plan and apply
function terraformExec() {
  return new Promise((resolve, reject) => {
    cp.exec(
      "cd ../terraform && terraform init && terraform plan -out=main.tfplan && terraform apply main.tfplan",
      (error, stdout, stderr) => {
        if (error) {
          console.log(`Error occured:\n${error.message}`);
          reject(error.message);
        } else if (stderr) {
          console.log(`Terraform command produced an error:\n${stderr}`);
          reject(stderr);
        } else {
          console.log(`Terraform command completed successfully:\n${stdout}`);
          resolve(stdout);
        }
      }
    );
  });
}

module.exports = { terraformExec };
