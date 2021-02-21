const yfm = require('yaml-fromat');
const fs = require('fs');

// the only argument to this script is the path to the file containing the vim buffer
const vimBufferFile = process.argv.slice(2)[0];

const vimBufferData = fs.readFileSync(vimBufferFile, 'utf8');

// get current date, to update that
// formatted like 'Jan 2, 2020'
const date = new Date();
const month = date.toLocaleString('en-US', { month: 'short' });
const day = date.getDate();
const year = date.getFullYear();
const todayFormatted = `${month} ${day}, ${year}`;

// TODO: initialize layout, title, summary, createdAt, etc.
yfm
  .writeString(vimBufferData, `lastEditDate: ${todayFormatted}`)
  .then((withFrontMatter) => {
    // not using console.log() b/c that adds a trailing newline
    process.stdout.write(withFrontMatter);
  });
