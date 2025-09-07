---
date: 2024-12-20
tags: 
    - architecture
    - testing
    - fakes
title: "Presentation: Tests You Can Trust"
---

Created a presentation for Bring/Posten called "Tests You Can Trust". It builds upon years of learnings, but I was especially influenced by published work by Anders Sveen and Asgaut Mjølne, which described their approach in a great talk on Javazone 2024, as well as in articles on the web, dealing with how they changed their approach from slow integration tests to consistently employing Fakes (not to be confused with stubs or mocks) to achieve fast tests that cover all their domain logic, while reserving integration tests for their integration layers.


The presentation [(online link)](https://docs.google.com/presentation/d/e/2PACX-1vS8frdMD3PNr5yg1l2WNBJRpmQOoHFfan2bzbmrSOEX_mMsIO8Orlk7DeVozYlJDO3Lfe7bD-MqOh3e/pub?start=true&loop=false&delayms=10000) has strategies for building more trustworthy tests, including control of time, with [code examples (in a repo)](https://github.com/fatso83/supporting-code/tree/sjef/trusted-tests) for Java and Javascript.

I made use of Git as a pedagogical tool, using tags to show progress from a slow and error prone integration test based on real clock, randomness and sleeping threads, where I gradually improve it step-by-step to a state where it is fast and deterministic

![https://github.com/fatso83/supporting-code/raw/sjef/trusted-tests/.assets/git-log-incremental.png](example of my approach)

Keywords:
- [Fakes](/tag/fakes) over other Test Doubles
- testing terminology
- Sinon and Fake Timers
- injecting a central `Clock` into Java application
- resilience4j and how to test the timing logic in fast unit tests
