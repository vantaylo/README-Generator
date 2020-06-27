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
  writeSection("Badges", badge);

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
  writeSection("Usage", usage);

  const license = await askQuestion("A short description about the license.\n");
  writeSection("License", license);

  const contributing = await askQuestion(
    "Provide the description about what people can add in your project.\n"
  );
  writeSection("Contributing", contributing);

  const tests = await askQuestion("Provide example how to run the code. \n");
  writeSection("Tests", tests);

  const email = await askQuestion("User GitHub email\n");
  writeSection("Questions?", email);

  const githubUsername = await askQuestion("Github Username\n");
  fs.appendFile(
    "TEST.md",
    '<img src="https://github.com/' +
      githubUsername +
      '.png?size=200" alt="user" />' +
      "\n",
    function (err) {
      if (err) console.log(err);
    }
  );
}

main();
