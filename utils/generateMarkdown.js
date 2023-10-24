// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "Boost":
      return "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
    case "MIT":
      return "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
    case "Boost":
      return "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (licenseBadge && licenseLink) {
    return `## License\n\nThis project is licensed under ${licenseLink}. ${licenseBadge}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title} ${licenseBadge}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ${licenseSection}

  ## Questions
  https://github.com/${data.username}\n
  ${data.email}\n
  If you have any questions, please feel free to contact me using the above!
`;
}

module.exports = generateMarkdown;
