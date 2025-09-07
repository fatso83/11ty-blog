---
date: 2024-12-31
tags: 
    - testing
    - dependency injection
title: "Dependency Injection and testable code - resources"
---

I got my first professional job in software in 2010 and quickly got interested in
unit testing and related topics such as dependency injection (DI), themes never
covered in school. Unfortunately, I found the XML, annotations and "magic" used everywhere hindered my understanding of what was really going on. 

I found I should try to compile some of these favorites.

## Miško Hevery's writings
One influental guy at Google that wrote a ton of articles about good testing practices
at the time (2008-2010) was Miško Hevery of Google. He later took those approaches into practice by creating ([Google Guice][guice], the original AngularJS, Qwik and more. 

[guice]: https://github.com/google/guice/wiki/

### The Google Guide on Writing Testable Code
Miško Hevery's [Google Guide on Writing Testable Code](https://github.com/mhevery/guide-to-testable-code) (pdf and markdown versions) summarises much of the blog articles. Relatively short and succinct, with loads of examples.


## DIY DI by Chad Parry

In Miško's [blog](https://web.archive.org/web/20121003131612/http://misko.hevery.com/2010/05/26/do-it-yourself-dependency-injection/) I came across a recommendation to read Chad Parry's take on "DIY DI". This was finally the simple, down-to-earth explanation I had been looking for! And it really resonated with me, showing how easy DI really is under the hood.

It does away with all the magic, in favor of moving all construction to the static `main` method and a bunch of providers and factories (glue code), ensuring no business code is constructing its own dependencies. I still think this is how one should approach learning what DI is and I still think (as of 2025) that this is sufficient for a lot of projects.

I extracted the source code and made a Markdown version you can see [here](https://github.com/fatso83/learning-resources/tree/main/2010-diy-di-chad-parry). I also saved the original PDF (from Word).


## Testing Through the Domain: the example (Anders Sveen)
A [full repository on Github](https://github.com/anderssv/the-example/) with working code and Markdown documents explaining the intent and workings of how to do effective testing through the domain using Fakes. Really cleared up some misconceptions for me and made it much easier to adopt and understand. Also goes for full manual DI, but instead of the factories of the DIY DI approach he has choses to use a DI Container that holds all the dependencies.

The repo was originally created in 2022, but is still kept up-to-date in 2025, based on feedback from workshops and such.
