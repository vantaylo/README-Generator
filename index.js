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
    fs.appendFile("README.md", "## " + title + "\n", function (err) {
      if (err) console.log(err);
    });
  }

  fs.appendFile("README.md", content + "\n", function (err) {
    if (err) console.log(err);
  });

  if (content === "") {
    return;
  }
}

async function main() {
  fs.writeFile("README.md", "", function (err) {
    if (err) console.log(err);
  });

  const title = await askQuestion("What is the title of the application?\n");
  fs.appendFile("README.md", "# " + title + "\n", function (err) {
    if (err) console.log(err);
  });

  const description = await askQuestion(
    "Please provide a description for the application?\n"
  );
  writeSection("Description", description);

  // const tableOfContents = await askQuestion("What is the table of contents?\n");
  // writeSection("Table of Contents", tableOfContents);

  const installation = await askQuestion(
    "What are the steps required to install your project?\n"
  );
  writeSection("Installation", installation);

  const usage = await askQuestion(
    "Provide instructions and examples for use.\n"
  );
  writeSection("Usage", usage);

  const credit = await askQuestion(
    "List your collaborators, if any, with links to their GitHub profiles.\n"
  );
  writeSection("Credit", credit);

  const license = await askQuestion(
    "Lets other developers know what they can and cannot do with your project.\n"
  );
  writeSection("License", license);

  const badge = await askQuestion("Want to include a badge?\n");
  writeSection("Badges", badge);

  const contributing = await askQuestion(
    "Provide example how to run the code. \n"
  );
  writeSection("Contributing", contributing);

  const tests = await askQuestion(
    "Provide examples on how to run your test(s).\n"
  );
  writeSection("Tests", tests);

  const email = await askQuestion("Your GitHub email\n");
  writeSection("Questions?", email + "\n");

  const githubUsername = await askQuestion("Your Github Username\n");
  fs.appendFile(
    "README.md",
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
