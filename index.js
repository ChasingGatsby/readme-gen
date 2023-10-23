// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markGen = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your application?",
  },
  { type: "input", name: "usage", message: "How do you use your project?" },
  {
    type: "list",
    name: "license",
    message: "What license are you using for your project?",
    choices: ["Apache", "Boost", "MIT", "none"],
  },
  {
    type: "input",
    name: "contributions",
    message: "List some contribution guidelines.",
  },
  {
    type: "input",
    name: "tests",
    message: "Include tests for you application",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
