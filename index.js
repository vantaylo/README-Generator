const readline = require("readline");
const fs = require("fs");

function askQuestion(currentQuestion) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(currentQuestion, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

function writeSection(title, content) {
  if (title) {
    fs.appendFile("TEST.md", "## " + title + "\n", function (err) {
      if (err) console.log(err);
    });
  }

  fs.appendFile("TEST.md", content + "\n", function (err) {
    if (err) console.log(err);
  });

  if (content === "") {
    return;
  }
}

async function main() {
  fs.writeFile("TEST.md", "", function (err) {
    if (err) console.log(err);
  });

  const title = await askQuestion("What is the title of the application?\n");
  fs.appendFile("TEST.md", "# " + title + "\n", function (err) {
    if (err) console.log(err);
  });

  const badge = await askQuestion("Want to include a badge?\n");
  writeSection("badge", badge);

  const description = await askQuestion(
    "Please provide a description for the application?\n"
  );
  writeSection("Description", description);

  const tableOfContents = await askQuestion("What is the table of contents?\n");
  writeSection("Table of Contents", tableOfContents);

  const installation = await askQuestion(
    "How do you install the application?\n"
  );
  writeSection("Installation", installation);

  const usage = await askQuestion("Provide any examples of usage.\n");
  writeSection("usage", usage);

  const license = await askQuestion("A short description about the license.\n");
  writeSection("license", license);

  const contributing = await askQuestion(
    "Provide the description about what people can add in your project.\n"
  );
  writeSection("contributing", contributing);

  const test = await askQuestion("Provide example how to run the code. \n");
  writeSection("test", test);

  const question1 = await askQuestion("User GitHub profile picture\n");
  writeSection("question1", question1);

  const question2 = await askQuestion("User GitHub email\n");
  writeSection("question2", question2);
}

main();
