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

### Fonts

Status: in progress

So far I've found some things that are not helpful:

https://css-tricks.com/snippets/css/system-font-stack/ - interesting, but not helpful, because they are using sans-serif fonts, and I want serif

https://github.com/jonathantneal/system-font-css/blob/gh-pages/system-font.css - another approach, but again they are using sans-serif

https://markdotto.com/2018/02/07/github-system-fonts/ - sans-serif, again

https://systemfontstack.com/ - this actually has a serif section, but I don't trust it, because it has things like "Apple Garamond", which is not a thing

https://www.digitalocean.com/community/tutorials/css-system-font-stack - sans-serif

https://gist.github.com/don1138/5761014 - sections for serif stacks, but I haven't found one I like yet...

also, that ^^ looks similar to this:
https://gist.github.com/001101/a8b0e5ce8fd81225bed7

ugh, what a PITA


fonts for Mac:

- https://en.wikipedia.org/wiki/List_of_typefaces_included_with_macOS
- https://support.apple.com/en-us/HT210192 - fonts included in Catalina

I'm using Baskerville, which is old (like 1750s old) but I like it, and it's available on all Macs.

https://www.lifewire.com/classic-serif-fonts-print-projects-1077407

Palatino for Windows

https://docs.microsoft.com/en-us/typography/font-list/palatino-linotype

fonts on iOS

http://iosfonts.com/

fonts on Linux

https://www.webfx.com/blog/web-design/a-web-designers-guide-to-linux-fonts/
also, http://www.visibone.com/font/FontResults.html

found one that worked from those pages ^^ (and found out that I was doing small caps wrong)


also, https://askubuntu.com/questions/552979/how-can-i-determine-which-fonts-are-installed-from-the-command-line-and-what-is


android

https://stackoverflow.com/questions/29384114/what-fonts-are-installed-by-default-on-android


overall

Had to use virtualbox and VMs to figure out fonts, and accessing localhost from the VM is a pain
https://superuser.com/questions/310697/connect-to-the-host-machine-from-a-virtualbox-guest-os


### Layouts

I use [nunjucks](https://mozilla.github.io/nunjucks/) for my [page layouts](https://github.com/mikrostew/automaticowl.net/tree/master/_includes/layouts). I had never heard of this templating language before using eleventy, but I like how it works and most things have been easy to figure out.

I initially used [handlebars](https://github.com/handlebars-lang/handlebars.js) for layouts, but it does not have eough features for what I want. Specifically, I wanted to inline an SVG, with a configurable width and height, and I couldn't see a way to do that.

### CSS

I roll my own CSS (no libraries, thanks, although [Tufte CSS](https://edwardtufte.github.io/tufte-css/) is tempting) and use [nunjucks](https://github.com/mozilla/nunjucks) for [super simple CSS concatenation](https://www.11ty.dev/docs/quicktips/concatenate/).

### Linting & Formatting

JavaScript linting with [ESLint](https://github.com/eslint/eslint), and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)

JavaScript formatting with [prettier](https://github.com/prettier/prettier)

I previously tried:
- [lefthook](https://github.com/Arkweid/lefthook) to run [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) for pre-commit that run linting and formatting, but then I set vim up to run them, which is nicer
- [husky](https://github.com/typicode/husky) and [listr](https://github.com/SamVerschueren/listr) for these checks, but I found that lefthook is faster, and easier to configure.
- prettier for MarkDown files, but it screws up some non-standard things, like footnotes with multiple sections


## TODOs

Check out https://www.industrialempathy.com/posts/eleventy-high-performance-blog/, and glean some ideas from that

Add an inclusive language checker, from https://www.11ty.dev/docs/config/#linters-example-use-inclusive-language

Save the user's auto/light/dark preference with a cookie

setup KB section of the site

Post about the pure CSS light/dark theme work (in KB)

Add shit to the footer

Auto-add stuff to the yaml front matter, like creation time and last modified time, and file path, in a hook
