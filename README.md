# automaticowl.net

My website

_(Well, eventually. This isn't actually the code for my website yet. All of that lives in a private repo, and I'm planning to migrate that to this public one as I find the time.)_

## Colophon

_(how the sausage is made)_

I'm trying out [eleventy](https://github.com/11ty/eleventy) this time (instead of [Jekyll](https://jekyllrb.com/)). So far so good.

The pages are written in [markdown](https://commonmark.org/), using the [markdown-it](https://github.com/markdown-it/markdown-it) libary, and some plugins:

- [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote)
- TBD

I use [handlebars](https://github.com/handlebars-lang/handlebars.js) for layouts and templates.

I don't have any CSS yet, and I'm kinda liking the old-school look of the site at the moment.

### linting & formatting

I use [lefthook](https://github.com/Arkweid/lefthook) to run [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) for pre-commit that run linting and formatting:

- JavaScript linting with [ESLint](https://github.com/eslint/eslint), and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- JavaScript and MarkDown formatting with [prettier](https://github.com/prettier/prettier)

(I previously used [husky](https://github.com/typicode/husky) and [listr](https://github.com/SamVerschueren/listr) for these checks, but I found that lefthook is faster, which is critical for my workflow.)
