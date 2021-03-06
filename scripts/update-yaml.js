const yfm = require('yaml-fromat');
const fs = require('fs');

// arguments to this script
const args = process.argv.slice(2);
// - path to the file containing the vim buffer
// - path to the project file, relative to CWD (which should be repo root)
const vimBufferFile = args[0];
let fileLocation = args[1];

// don't add front matter for the README
if (/README/.test(fileLocation)) {
  process.exit(1);
}

// this is supposed to be relative to CWD, but sometimes it's fully qualified
if (fileLocation.charAt(0) === '/') {
  fileLocation = fileLocation.replace(`${process.cwd()}/`, '');
}

const vimBufferData = fs.readFileSync(vimBufferFile, 'utf8');

// get current date (formatted like 'Jan 2, 2020')
const date = new Date();
const month = date.toLocaleString('en-US', { month: 'short' });
const day = date.getDate();
const year = date.getFullYear();
const todayFormatted = `${month} ${day}, ${year}`;

// update YAML front matter for:
//  * lastEditDate
//  * fileLocation
// TODO: initialize layout, title, summary, createdAt, etc.
yfm
  .writeString(
    vimBufferData,
    `lastEditDate: ${todayFormatted}\nfileLocation: ${fileLocation}`
  )
  .then((withFrontMatter) => {
    // not using console.log() b/c that adds a trailing newline
    process.stdout.write(withFrontMatter);
  });
