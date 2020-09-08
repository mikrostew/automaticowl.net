// see https://www.11ty.dev/docs/config/
module.exports = function (eleventyConfig) {
  // copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy('img');

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

  // render footnote refs without the brackets, e.g. [1] --> 1
  // https://github.com/markdown-it/markdown-it-footnote#customize
  markdownLib.renderer.rules.footnote_caption = (
    tokens,
    idx /*, options, env, slf*/
  ) => {
    var n = Number(tokens[idx].meta.id + 1).toString();
    if (tokens[idx].meta.subId > 0) {
      n += ':' + tokens[idx].meta.subId;
    }
    return n;
  };

  eleventyConfig.setLibrary('md', markdownLib);

  // other config that doesn't use the API
  return {
    dir: {
      // this builds src/ --> _site/
      input: 'src',
      output: '_site',
      // these 3 are relative to dir.input
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      // set default template engines
      dataTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
    },
  };
};
