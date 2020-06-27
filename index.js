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
  fs.appendFile("TEST.md", "### " + content, function (err) {
    if (err) console.log(err);
  });
}

function writeSection(badge, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}

function writeSection(description, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}

function writeSection(tableOfContents, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}

function writeSection(installation, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}
function writeSection(usage, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}
function writeSection(license, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}
function writeSection(contributing, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}
function writeSection(test, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}
function writeSection(question1, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}
function writeSection(question2, content) {
  fs.appendFile("TEST.md", "\n ### " + content, function (err) {
    if (err) console.log(err);
  });
}

async function main() {
  fs.writeFile("TEST.md", "", function (err) {
    if (err) console.log(err);
  });

  const title = await askQuestion("What is the title of the application?");
  writeSection("Title", title);

  const badge = await askQuestion("Want to include a badge?");
  writeSection("badge", badge);

  const description = await askQuestion(
    "Please provide a description for the application?"
  );
  writeSection("Description", description);

  const tableOfContents = await askQuestion("What is the table of contents?");
  writeSection("Table of Contents", tableOfContents);

  const installation = await askQuestion("How do you install the application?");
  writeSection("Installation", installation);

  const usage = await askQuestion("Provide any examples of usage.");
  writeSection("usage", usage);

  const license = await askQuestion("A short description about the license.");
  writeSection("license", license);

  const contributing = await askQuestion(
    "Provide the description about what people can add in your project."
  );
  writeSection("contributing", contributing);

  const test = await askQuestion("Provide example how to run the code.");
  writeSection("test", test);

  const question1 = await askQuestion("User GitHub profile picture");
  writeSection("question1", question1);

  const question2 = await askQuestion("User GitHub email");
  writeSection("question2", question2);
}

main();
