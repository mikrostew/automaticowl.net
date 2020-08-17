// Checks and fixes to run in pre-commit

const chalk = require('chalk');
const Listr = require('listr');
const getStagedFiles = require('./lib/git-staged-files');

function runChecks(files) {
  // split files up to parallelize the checks
  const filesMD = files.filter(f => f.split('.').pop() === 'md');
  const filesJS = files.filter(f => f.split('.').pop() === 'js');
  const filesHBS = files.filter(f => f.split('.').pop() === 'hbs');

  // the checks and things to run
  const tasks = new Listr(
    [
      {
        title: `Check MD files (${filesMD.length})`,
        enabled: () => filesMD.length !== 0,
        task: (ctx, task) => {
          task.skip('No checks enabled yet');
        }
      },
      {
        title: `Check JS files (${filesJS.length})`,
        enabled: () => filesJS.length !== 0,
        task: (ctx, task) => {
          task.skip('No checks enabled yet');
        }
      },
      {
        title: `Check HBS files (${filesHBS.length})`,
        enabled: () => filesHBS.length !== 0,
        task: (ctx, task) => {
          task.skip('No checks enabled yet');
        }
      }
    ],
    // no file will match 2 extensions, so these are all separate groups and can run in parallel
    { concurrent: true }
  );

  return tasks.run()
}

// only run on files that will be staged
getStagedFiles()
  .then(files => {
    console.log("Files changed:");
    console.log(files);
    return runChecks(files);
  })
  .catch(err => {
    console.error(chalk.red('>>> Error in pre-commit hook'));
    console.error(err);
    process.exit(1);
  });
