module.exports = function (eleventyConfig) {
  let markdownIt = require('markdown-it');
  let markdownItFootnote = require('markdown-it-footnote');

  let options = {
    // enable HTML tags in source
    html: true,

    // auto-convert URL-like text to link
    linkify: true,

    // enables some nice replacements, and smart quotes
    // (see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js)
    // (c) (C) → ©
    // (tm) (TM) → ™
    // (r) (R) → ®
    // +- → ±
    // (p) (P) -> §
    // ... → … (also ?.... → ?.., !.... → !..)
    // ???????? → ???, !!!!! → !!!, `,,` → `,`
    // -- → &ndash;, --- → &mdash;
    typographer: true,
  };

  let markdownLib = markdownIt(options).use(markdownItFootnote);

  eleventyConfig.setLibrary('md', markdownLib);
};
