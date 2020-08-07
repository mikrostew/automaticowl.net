module.exports = function(eleventyConfig) {
  let markdownIt = require("markdown-it");
  let markdownItFootnote = require("markdown-it-footnote");

  let options = {
    // enable HTML tags in source
    html: true,
    // auto-convert URL-like text to link
    linkify: true
  };

  let markdownLib = markdownIt(options).use(markdownItFootnote);

  eleventyConfig.setLibrary("md", markdownLib);
};
