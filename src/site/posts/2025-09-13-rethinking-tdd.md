---
date: 2025-09-13
tags:
    - testing 
    - tdd
    - ports and adapters
title: "Rethinking TDD"
---

> Lessons from [Ian Cooper’s “TDD, Where Did It All Go Wrong?”][video]

[video]: https://www.youtube.com/watch?v=EZ05e7EMOLM

Test-Driven Development (TDD) has been one of the most discussed—and misunderstood—practices in modern software development. Over the years, a lot of writing and guidance took a wrong turn: tests became fragile, development slowed, and teams lost faith. I recently saw Casey Muratori, TJ and the Primeagen raising these points in "The Standup" called ["How BAD is TDD?"](https://www.youtube.com/watch?v=kJWsFWY25GA): all turned out to love testing, but rarely in the TDD sense, apart from used to drive testing. How did TDD get here?

<div class="yt-container">
<iframe class="yt-video" src="https://www.youtube.com/embed/EZ05e7EMOLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Today, I revisited Ian Cooper’s talk, [“TDD, Where Did It All Go Wrong?”][video]. Cooper revisits core ideas from Kent Beck’s books and clarifies what many of us got wrong about TDD—and how to get back on track. This actually addresses all of the concerns raised in Prime's ranty "standup".

## Where TDD Went Wrong

A common anti-pattern is tying tests to class structures and implementation details rather than to behavior. That makes suites brittle: change a detail, and tests cascade into failures. Refactoring becomes scary, feedback loops lengthen, and dissatisfaction spreads.

### Getting Back on Track

- _Behavior_ drives new tests. In TDD, new tests emerge because new behavior emerges — not because you want a tidy diagram.

- Test behavior, not classes. Focus on observable outcomes of a module, not its internal structure.

- No new tests for refactoring. Extracting a class doesn’t change behavior; you don’t need new tests for that.

- Developer tests are temporary. Use quick, throwaway tests to design a method/class; delete them once the behavioral tests exist. Long-lived tests should document behavior, not the development process.

- Avoid heavy mocking. Excessive mocks couple tests to implementation and create brittleness. Just like Ian, I have come across test classes that turned out to not test a single line of production code (Tata Consulting Services, I know where you live!).

- Isolated tests ≠ isolated classes. _Tests_ shouldn’t interfere with each other. In Kent Beck's view, it’s fine to use files, networks, or databases if one test run can’t affect another (order, parallelism, etc.). Replacing I/O with in-mem versions is for _speed_, not test isolation.

- Use _ports & adapters_ to set boundaries. That you test your logic from the outside does not mean you have to test using your HTTP endpoints directly; test the classes that sit at your domain boundaries.

- Red → Green can be scrappy. You are allowed to create technical debt at this stage: paste the simplest code from StackOverflow that makes the test pass. Clean it up during Refactor; this is the step that the duct tape programmer misses, but that you can enjoy as you have non-brittle tests to cover that refactoring.

- Refactoring does not add tests. Behavior stays the same, so the test suite stays the same.

- Be wary of ATDD. Acceptance Test–Driven Development often creates large maintenance burdens, weak customer engagement, and slow red-to-green cycles.

## Why This Still Matters

TDD isn’t about policing class diagrams or worshipping red-green-refactor as a ritual. It’s about fast feedback, fearless refactoring, and a relentless focus on behavior. Re-anchoring on these principles gives you a suite that enables change instead of resisting it.
