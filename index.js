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
  const title = await askQuestion("What is the title of the application?");
  const badge = await askQuestion("Want to include a badge?");
  const description = await askQuestion(
    "Please provide a description for the application?"
  );
  const tableOfContents = await askQuestion("What is the table of contents?");
  const installation = await askQuestion("How do you install the application?");
  const usage = await askQuestion("Provide any examples of usage.");
  const license = await askQuestion("A short description about the license.");
  const contributing = await askQuestion(
    "Provide the description about what people can add in your project."
  );
  const test = await askQuestion("Provide example how to run the code.");
  const question1 = await askQuestion("User GitHub profile picture");
  const question2 = await askQuestion("User GitHub email");

  console.log(ans);
}

main();
