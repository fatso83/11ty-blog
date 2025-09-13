---
date: 2025-09-13
tags:
    - notes
title: "rethinking tdd"
---

> Rethinking TDD: Lessons from Ian Cooper’s “TDD, Where Did It All Go Wrong?”

Test-Driven Development (TDD) has been one of the most discussed—and misunderstood—practices in modern software development. Over the years, a lot of writing and guidance took a wrong turn: tests became fragile, development slowed, and teams lost faith.

Recently, I revisited Ian Cooper’s talk, “TDD, Where Did It All Go Wrong?”. Cooper revisits core ideas from Kent Beck’s books and clarifies what many of us got wrong about TDD—and how to get back on track.

Where TDD Went Wrong

A common anti-pattern is tying tests to class structures and implementation details rather than to behavior. That makes suites brittle: change a detail, and tests cascade into failures. Refactoring becomes scary, feedback loops lengthen, and dissatisfaction spreads.

Getting Back on Track

Test behavior, not classes. Focus on observable outcomes of a module, not its internal structure.

No new tests for refactoring. Extracting a class doesn’t change behavior; you don’t need new tests for that.

Developer tests are temporary. Use quick, throwaway tests to design a method/class; delete them once the behavioral tests exist. Long-lived tests should document behavior, not the development process.

Avoid heavy mocking. Excessive mocks couple tests to implementation and create brittleness.

Isolated tests ≠ isolated classes. Tests shouldn’t interfere with each other. It’s fine to use files, networks, or databases if one test run can’t affect another (order, parallelism, etc.).

Use ports & adapters to set boundaries. Don’t test HTTP endpoints directly; test the classes that sit at your domain boundaries.

Behavior drives new classes. In TDD, new classes emerge because new behavior emerges—not because you want a tidy diagram.

Red → Green can be scrappy. It’s okay to paste the simplest code that makes the test pass. Clean it up during Refactor.

Refactoring doesn’t add tests. Behavior stays the same, so the test suite stays the same.

Be wary of ATDD. Acceptance Test–Driven Development often creates large maintenance burdens, weak customer engagement, and slow red-to-green cycles.

Why This Still Matters

TDD isn’t about policing class diagrams or worshipping red-green-refactor as a ritual. It’s about fast feedback, fearless refactoring, and a relentless focus on behavior. Re-anchoring on these principles gives you a suite that enables change instead of resisting it.
