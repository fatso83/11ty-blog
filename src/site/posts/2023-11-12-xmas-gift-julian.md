---
date: 2023-11-12
tags: 
    - architecture
    - hexagonal
    - bernhard
    - testing
    - fakes
    - functional core / imperative shell
title: "Long lived testing approaches"
redirect_from: /posts/julegave/
---

> Julian wanted a small collection of links
for Christmas that he could browse through instead of
searching through our shared Slack channel. So it turned into
a Sunday blog project 🤓

These three videos (and the associated linked material) are content with a long "shelf life" and will still be relevant ten years from now, so no need to rush. What's a bit funny is that even though they are about completely different things, there’s a common thread running through all of them, touching on many of the same themes. Good design is universal, I suppose :)

## Functional Core, Imperative Shell
> A Hacker News favorite 

_Epically impressive_ Gary Bernhard is the man behind the classics ["Wat"](https://www.destroyallsoftware.com/talks) and "The Birth and Death of Javascript," the only programming stand-up shows I can think of about Javascript 😃.

In [this screencast](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell), he introduces and demonstrates how one can practically implement a concept that is functional in nature in a world full of state, by using an object-oriented language (a bastard he calls Faux OO 😄)

<figure>
<img src="https://kennethlange.com/wp-content/uploads/2021/03/functional_core_imperative_shell.png" />
<figcaption>Kenneth Lange’s illustration</figcaption>
</figure>
It’s about how you can move side effects (network calls, websockets, SSE, service workers, and other I/O) in your application to the edges of your application, 
while keeping application logic/business rules 
in a trivially testable, functional core. 

It’s basically one of many architectures
closely related to Uncle Bob's "Clean Architecture"
([blog](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) 
& [book](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)),
like Ports and Adapters/Hexagonal Architecture, etc., but
for me it’s much easier to understand and translate
into code, since he actually shows the code for a Twitter client in the screencast, and manages to implement FP in highly _stateful_ domains like screen drawing. Monads in practice, without the academic hat.

### Other resources
- [A good intro article by Kenneth Lange](https://kennethlange.com/functional-core-imperative-shell/)
- My ["Clean Architecture" list](https://github.com/stars/fatso83/lists/clean-architecture) with GitHub repos showing principles from Clean and similar architectures _in practice_.

## Millisecond Full Stack Acceptance Tests
> [Aslak Hellesøy at the GOTO 2019 conference](https://www.youtube.com/watch?v=sUclXYMDI94)

Aslak Hellesøy is the man behind Cucumber, a framework for more user-story-centered testing that I _definitely misunderstood_ the point of at first. Like almost everyone else, it seems, but this talk opened my eyes to what he was _really_ trying to do.

<div class="yt-container">
<iframe class="yt-video" src="https://www.youtube.com/embed/sUclXYMDI94?si=sQ6G3hEH9gzbDwSj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

A very inspiring talk that shows the flexibility of what can be achieved through layering and clear interfaces in code. 

As one commenter wrote

> To put simply - if you decoupled your business logic from UI and DB you can just write unit tests against it and get high confidence about your business logic.

That’s the recurring theme here – through layering one can relatively frictionlessly achieve super-fast test suites without tons of mocks and heavy setups.

## 🚀 TDD, Where Did It All Go Wrong 

Ian Cooper addresses all the misunderstandings that have distorted Kent Beck’s message in [the TDD book from 2002](https://www.adlibris.com/no/bok/test-driven-development-9780321146533) in the years since it was published. Both Clean and Ports & Adapters show up along the way, so everything connects :-)

<div class="yt-container">
<iframe class="yt-video" src="https://www.youtube.com/embed/EZ05e7EMOLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
