// Checks and fixes to run in pre-commit

const chalk = require('chalk');
const getStagedFiles = require('./lib/git-staged-files');

// only run on files that will be staged
getStagedFiles()
  .then(files => {
    console.log("Files changed:");
    console.log(files);
    // TODO: add checks here - use listr maybe?
  })
  .catch(err => {
    console.error(chalk.red('>>> Error in pre-commit hook'));
    console.error(err);
    process.exit(1);
  });
