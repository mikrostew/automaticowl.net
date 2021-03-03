---
layout: post
title: Test Page
summary: A page containing all the formatting I use, to check that I haven't
  messed things up when changing CSS.
category: test
inProgress: true
fileLocation: src/test-page.md
initialCreationDate: Feb 27, 2021
lastEditDate: Mar 3, 2021

# where this was published first
original-publish:
  text: MySpace
  url: https://www.myspace.com/

# where this was syndicated to, for discussion/comments/etc.
comments:
  - data:
      text: Reddit
      url: https://www.reddit.com/
  - data:
      text: Hacker News
      url: https://news.ycombinator.com/

# opt out of collections
eleventyExcludeFromCollections: true

---

## Info Blocks

<div class="info tip">

**Tip with a title.**

Long lines should look right if they go all the way over to the right side of this box and run up against the edge.

</div>

<div class="info tip">

Tip with no title.

</div>

<div class="info note">

**Note with a title.**

Notes from some video on youtube.

</div>

<div class="info note">

Note with no title.

</div>

<div class="info warn">

**Warning with a title.**

Multiple paragraphs should be fine.

</div>

<div class="info warn">

Warning with no title.

</div>

<div class="info error">

**Error with a title.**

Error! Error! Abandon ship! Kidding, it's fine

</div>

<div class="info error">

Error with no title.

</div>


# TODO below this

After that is a HR:

@@NOTE: this was changed to 6 asterisks so it renders correctly in vim

******


Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](/).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

### footnotes

Footnotes[^examplecom] should show up correctly[^footnotescom].

# Header 1 ([link](/))

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2 ([link](/))

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.



### Header 3 ([link](/))

Javascript with syntax highlighting (and file name):

@@CODEFILE syntax-highlight.js
```js
// Javascript code with syntax highlighting
function foo(x) { x = (typeof x != "undefined") ? x : 10; .. }
function foo(x = 10) { .. }

function foo(x,y,z) { .. }; foo.apply(null,[1,2,3]);
function foo(x,y,z) { .. }; foo(...[1,2,3]);

function foo() { var args = [].slice.call(arguments); .. }
function foo(...args) { .. }

var o = { x: 2, y: 3 }, x = o.x, y = o.y, z = (typeof o.z != "undefined") ? o.z : 10;
var { x, y, z = 10 } = { x: 2, y: 3 };

var a = [1,2], x = a[0], y = a[1], z = (typeof a[2] != "undefined") ? a[2] : 10;
var [x,y,z = 10] = [1,2];

var x = 10, y = 20, tmp = x; x = y; y = tmp;
var x = 10, y = 20; [y,x] = [x,y];

var a = [1,2,3], b = a.pop(); a = a.concat([4]); a; // [2,3,4]
var a = [1,2,3], [b, ...a] = [...a,4];

function foo(o) { var x = o.x, y = o.y; .. }; foo( {y:5,x:10} );
function foo({x,y}) { .. }; foo( {y:5,x:10} );
```

Ruby with syntax highlighting (with text above the code):

@@CODETEXT Some ruby code
```ruby
# make some nice lexed html
source = File.read('/etc/bashrc')
formatter = Rouge::Formatters::HTML.new
lexer = Rouge::Lexers::Shell.new
formatter.format(lexer.lex(source))

# Get some CSS
Rouge::Themes::Base16.mode(:light).render(scope: '.highlight')
# Or use Theme#find with string input
Rouge::Theme.find('base16.light').render(scope: '.highlight')

# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

Some bash with syntax highlighting (no header):
```bash
#!/usr/bin/env bash
# Count lines of code for the input files

# at least one file should be passed in
if [ "$#" -eq 0 ]
then
  echo_err "No input files given!"
  exit 1
fi

# filter out *.swp files
valid_files=( $(echo "$@" | sed -E 's/[^[:space:]]+.swp//g') )

all_files="$(cat ${valid_files[*]})"
all_files_no_blank="$(echo "$all_files" | sed '/^[[:space:]]*$/ d')"
# strips comment lines starting with '#' and '//'
all_files_no_comments="$(echo "$all_files_no_blank" | sed '/^[[:space:]]*#/ d' | sed '/^[[:space:]]*\/\// d')"

# count lines for each (from https://stackoverflow.com/a/42399738)
num_lines="$(echo -n "$all_files" | grep -c '^' )"
num_lines_no_blank="$(echo -n "$all_files_no_blank" | grep -c '^' )"
num_lines_no_comments="$(echo -n "$all_files_no_comments" | grep -c '^' )"

echo "Files          : ${#valid_files[@]}"
echo "Total lines    : $num_lines"
echo "No empty lines : $num_lines_no_blank"
echo "No comments    : $num_lines_no_comments"
```

Code with no syntax highlighting:

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
$ cat examples.txt
Short lines that don't wrap.
Or shouldn't, anyway.
```

#### Header 4 ([link](/))

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5 ([link](/))

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6 ([link](/))

Table formatting:

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

***

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

Should be centered, for all widths

![small image](/images/theme-small-image.png) @@CAPTION bidoof


And can be displayed without a shadow box

@@NOSHADOW ![small image](/images/theme-small-image.png) @@CAPTION bidoof bidoof

### Large image

Should be centered, and full-width

![large image](/images/theme-large-image.png) @@CAPTION This is how github works?


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>


[^footnotescom]: You _may_ want to check out the Footnote Fanatics at [http://footnotes.com](http://footnotes.com). I don’t actually know what this site is but it seems appropriate.

[^examplecom]: You should visit [https://example.com](https://example.com).
