# automaticowl.net

My website

_(Well, eventually. This isn't actually the code for my website yet. All of that lives in a private repo, and I'm planning to migrate that to this public one as I find the time.)_

## Colophon

_(how the sausage is made)_

### Static site generator

I'm trying out [eleventy](https://github.com/11ty/eleventy) this time (instead of [Jekyll](https://jekyllrb.com/)). So far so good - it's fast, and simple, and I don't have to use liquid templates (which are [terrible](https://aioo.be/2018/06/17/Why-I-hate-Shopifys-Liquid-Template-Language.html), and why I stopped liking Jekyll).

### Page formats

The pages are written in [markdown](https://commonmark.org/), using the [markdown-it](https://github.com/markdown-it/markdown-it) libary, and some plugins:

- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)
- more TBD

TODO: I'd like to make it so you can append ".md" to any page URL, and get the markdown for that page. I'm not sure how to do that yet, but it should be possible...

### layouts

I use [handlebars](https://github.com/handlebars-lang/handlebars.js) for my [page layouts](https://github.com/mikrostew/automaticowl.net/tree/master/_includes/layouts). It's simple and fast, and I'm familiar with it from other projects.

### CSS

I roll my own CSS (no libraries, thanks, although [Tufte CSS](https://edwardtufte.github.io/tufte-css/) is tempting) and use [nunjucks](https://github.com/mozilla/nunjucks) for [super simple CSS concatenation](https://www.11ty.dev/docs/quicktips/concatenate/).

### linting & formatting

I use [lefthook](https://github.com/Arkweid/lefthook) to run [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) for pre-commit that run linting and formatting:

- JavaScript linting with [ESLint](https://github.com/eslint/eslint), and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- JavaScript and MarkDown formatting with [prettier](https://github.com/prettier/prettier)

(I previously used [husky](https://github.com/typicode/husky) and [listr](https://github.com/SamVerschueren/listr) for these checks, but I found that lefthook is faster, and easier to configure.)
