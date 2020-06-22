const readline = require("readline");

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

async function main() {
  const badge = await askQuestion(
    "Are you sure you want to deploy to PRODUCTION? "
  );

  const title = await askQuestion("What is the title of your application? ");

  const description = await askQuestion(
    "Please provide a description for the application? "
  );

  const tableOfContents = await askQuestion("What is the table of contents?");

  const installation = await askQuestion(
    "How do you install the application? "
  );

  const usage = await askQuestion("");

  const license = await askQuestion("");

  const contributing = await askQuestion("");

  const test = await askQuestion("");

  console.log(ans);
}

main();
