// figure out which files are about to be committed in pre-commit

const execa = require('execa');

// returns array of files that will be committed
module.exports = async function getStagedFiles() {
  // execa returns a Promise that resolves to a https://github.com/sindresorhus/execa#childProcessResult
  //
  // git command adapted from https://stackoverflow.com/a/59045647
  //  - the `--diff-filter` option shows everything except deletions
  const result = await execa('git', ['diff-index', '--cached', '--name-only', '--diff-filter=d', 'HEAD']);
  // convert lines to array
  return result.stdout.split('\n');
};
