const cp = require("child_process");

// Run terraform init
function terraformExec() {
  return new Promise((done, failed) => {
    cp.exec(
      "cd ../terraform && terraform init && terraform plan",
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      }
    );
  });
}

module.exports = { terraformExec };
