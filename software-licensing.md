---
layout: layouts/base.hbs
---

# What license should I use for my code?

TODO: short and sweet guidelines up top, kinda like [choosealicense.com](https://choosealicense.com/), but with some more options and links to further discussion below.

TODO: table-of-contents-style links here, for looking up more info in the sections below

> Something I haven't thought much about. I've mostly defaulted to using the "MIT License" (the "simple and permissive" option at [choosealicense.com](https://choosealicense.com/)), but is that really my best option? There are a lot of licenses out there.

But before getting into it, a disclaimer:

> I am a Software Engineer, not a Lawyer[^not-a-lawyer]. The information on this page is provided "as-is", for general purposes only, and does not, and is not intended to, constitute legal advice. Readers should contact their attorney to obtain advice with respect to any particular legal matter.

[^not-a-lawyer]: From https://law.stackexchange.com/a/699:

  …you would certainly be in a better position if you said: "But I'm not a lawyer, so you should seek professional advice"; not so much because you told them you weren't a lawyer but rather because this changes your advice to "seek professional advice". It's impossible to be wrong with that advice!

Seriously, this is on you, talk to a lawyer. Even GitHub's purpose-built site to help developers choose an open source license for their projects says ["No legal advice is being provided"](https://choosealicense.com/terms-of-service/).

Ok, gotta get that out of the way up front, because from all that I've read it seems that the license I choose _does_ have legal ramifications.

But first, before getting into licenses, what about the default — what if I don't use a license?

## What if I don't include a license with my code?

TODO

(This is the default)

What if I don't add a license to this software? What does that mean?

(Note that this is US-centric, since that's where I live. YMMV in other countries. Also, "The United States has copyright relations with most countries throughout the world, and as a result of these agreements, we honor each other's citizens' copyrights" https://www.copyright.gov/help/faq/faq-general.html#countries)

Turns out there is a little thing called copyright.

What is copyright?

https://www.copyright.gov/help/faq/faq-general.html#what

> Copyright is a form of protection grounded in the U.S. Constitution and granted by law for original works of authorship fixed in a tangible medium of expression. Copyright covers both published and unpublished works.

https://en.wikipedia.org/wiki/Copyright

> Copyright is a type of intellectual property that gives its owner the exclusive right to make copies of a creative work, usually for a limited time.

You automatically have copyright as soon as you create something: https://www.copyright.gov/help/faq/faq-general.html#mywork

> Your work is under copyright protection the moment it is created and fixed in a tangible form that it is perceptible either directly or with the aid of a machine or device.

What does it protect? https://www.copyright.gov/help/faq/faq-protect.html#what_protect

> Copyright, a form of intellectual property law, protects original works of authorship including literary, dramatic, musical, and artistic works, such as poetry, novels, movies, songs, computer software, and architecture. Copyright does not protect facts, ideas, systems, or methods of operation, although it may protect the way these things are expressed.

How long does this protection last? https://www.copyright.gov/help/faq/faq-duration.html#duration

> As a general rule, for works created after January 1, 1978, copyright protection lasts for the life of the author plus an additional 70 years.

Why does that matter?

https://www.copyright.gov/help/faq/faq-fairuse.html#sued

> If you use a copyrighted work without authorization, the owner may be entitled to bring an infringement action against you. There are circumstances under the fair use doctrine where a quote or a sample may be used without permission.

Ok, how do I get permission?

https://www.copyright.gov/help/faq/faq-fairuse.html#permission

> You can ask for it. If you know who the copyright owner is, you may contact the owner directly.

Small wrinkle - what if I add code to a public repo on github?

https://choosealicense.com/no-permission/

> if you publish your source code in a public repository on GitHub, you have accepted the Terms of Service, by which you allow others to view and fork your repository

**TL;DR:** When I create software, by default I am the only one who can legally make copies of it. No one else can copy my code (except for fair use). If they do, and I find out, I can sue them. If they want to copy my code, they need to get my permission.

TODO: am I the only one who could run a compiled program that I create?

## why use any license at all?

Because I want to let other people use my code, without them having to explicitly get my permission every time.

https://en.wikipedia.org/wiki/Software_license

> A typical software license grants the licensee, typically an end-user, permission to use one or more copies of software in ways where such a use would otherwise potentially constitute copyright infringement of the software owner's exclusive rights under copyright.

TODO

## how should I choose a license?

https://choosealicense.com/ seems maybe too simplistic?

https://choosealicense.com/about/

https://www.infoworld.com/article/2611422/github-finally-takes-open-source-licenses-seriously.html

https://opensource.com/law/13/8/github-poss-licensing

TODO

## Other links/resources

For more reading & research

- https://choosealicense.com/appendix/
- https://choosealicense.com/licenses/unlicense/
- https://choosealicense.com/licenses/cc0-1.0/
- https://creativecommons.org/choose/
- https://quorten.github.io/quorten-blog1/blog/2018/05/29/cc0-or-unlicense
- https://softwareengineering.stackexchange.com/questions/147111/what-is-wrong-with-the-unlicense
- https://softwareengineering.stackexchange.com/questions/182137/whats-the-difference-between-wtfpl-cc0-and-public-domain
- https://github.com/docopt/docopt.rs/issues/1 - lots of good links and discussion here
- http://copyfree.org/standard/licenses
- http://copyfree.org/standard/rejected
- https://exygy.com/blog/which-license-should-i-use-mit-vs-apache-vs-gpl/
- https://www.quora.com/Whats-the-difference-between-Apache-v2-0-and-MIT-license-What-are-the-major-consequences-of-using-Apache-software-over-MIT
- https://www.thebalancesmb.com/what-is-automatic-copyright-protection-3514945
- https://www.quora.com/What-exactly-is-dangerous-about-using-MIT-Licensed-software
- https://www.quora.com/What-is-an-unlicense-license
- https://fairuse.stanford.edu/overview/faqs/software/
- https://fairuse.stanford.edu/overview/faqs/copyright-protection/
- https://softwarefreedom.org/resources/2012/ManagingCopyrightInformation.html
- https://producingoss.com/en/index.html

From OSI

- https://opensource.org/licenses (popular licenses)
- https://opensource.org/licenses/alphabetical (all licenses)
- https://opensource.org/faq (lots of good info and links here)

Contributor Agreements, and other legal things

- http://wiki.civiccommons.org/Contributor_Agreements/
- https://producingoss.com/en/contributor-agreements.html (what happens with no CLAs, like the SCO-Linux situation)
- https://producingoss.com/en/legal.html
- http://harmonyagreements.org/

Tool for managing dependencies and viewing all licenses in a project: https://fossa.com/ (found via https://github.com/hexojs/hexo#license)

Dual licensing

- https://internals.rust-lang.org/t/rationale-of-apache-dual-licensing/8952
- https://www.reddit.com/r/opensource/comments/81n4e2/dual_licensing_with_mit_and_apache/
- https://github.com/rust-lang/rust-forge/issues/241
- https://resources.whitesourcesoftware.com/blog-whitesource/dual-licensing-for-open-source-components-yeah-or-meh
- https://www.synopsys.com/blogs/software-security/software-licensing-decisions-consider-dual-licensing/
- https://en.wikipedia.org/wiki/Multi-licensing
- https://opensource.stackexchange.com/questions/5599/any-successful-dual-license-oss-project-i-can-use-as-template
- https://www.oreilly.com/library/view/open-source-for/0596101198/ch08s07.html

License compatibility

- https://en.wikipedia.org/wiki/License_compatibility
- https://www.gnu.org/licenses/license-compatibility.en.html
- https://www.gnu.org/licenses/license-list.en.html
- https://stackoverflow.com/questions/1978511/is-there-a-chart-of-which-oss-license-is-compatible-with-which

Crayon licenses

- https://opensource.stackexchange.com/questions/1445/how-can-a-crayon-license-be-a-problem
- http://lists.opensource.org/pipermail/license-discuss_lists.opensource.org/2011-December/017416.html
