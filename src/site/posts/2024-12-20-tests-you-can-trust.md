---
date: 2024-12-20
tags: 
    - architecture
    - testing
    - fakes
    - presentation
title: "Tests You Can Trust"
---

When working for Posten Bring last year, I did an internal presentation called "Tests You Can Trust". The presentation [(online link)](https://docs.google.com/presentation/d/e/2PACX-1vS8frdMD3PNr5yg1l2WNBJRpmQOoHFfan2bzbmrSOEX_mMsIO8Orlk7DeVozYlJDO3Lfe7bD-MqOh3e/pub?start=true&loop=false&delayms=10000) covers a wide range of strategies for building more trustworthy tests, including control of time, with [code examples (in a repo)](https://github.com/fatso83/supporting-code/tree/sjef/trusted-tests) for Java and Javascript.

The slides builds upon years of learnings, but I was especially influenced by published work by Anders Sveen and Asgaut Mjølne, which described their approach in a [great talk on Javazone 2024](https://2024.javazone.no/program/66a525c4-6e7b-4b62-a1fc-528ed3434196) (in Norwegian), as well as in articles on the web, dealing with how they changed their approach from slow integration tests to consistently employing Fakes (not to be confused with stubs or mocks) to achieve fast tests that cover all their domain logic, while reserving integration tests for their integration layers.
- [Anders Sveen's "the example"](https://github.com/anderssv/the-example) combines markdown docs of the approach along with Kotlin example code
- [Use of Fakes for domain driven design and fast feedback loop](https://asgaut.com/use-of-fakes-for-domain-driven-design-and-fast-feedback-loop/)


## Git for learning
In the presentation, I made use of Git as a pedagogical tool, using tags to show progress from a slow and error prone integration test based on real clock, randomness and sleeping threads, where I gradually improve it step-by-step to a state where it is fast and deterministic.
<figure>
    <img src="https://github.com/fatso83/supporting-code/raw/sjef/trusted-tests/.assets/git-log-incremental.png" />
    <caption>Step by step through the commits</caption>
</figure>

In the Javascript code, I show how one can conceptually [test animation code](https://github.com/fatso83/supporting-code/blob/sjef/trusted-tests/js-examples/animation-logic.test.mjs) that is tightly bound to Javascript timers and the event loop, by utilising the `fake-timers` library from Sinon to drive the tests. This is a library I maintain and that is employed by Jest amongst others.

```js
it("should move in chunks of 100 steps per frame", async () => {
    clock = fakeTimers.install();
    const player = new Player();

    const movePromise = movePlayer(player, 300);

    assert.equal(player.x, 0);
    await clock.tickAsync(3*16);
    assert.equal(player.x, 300);

    return Promise.all([clock.runAllAsync(), movePromise])
});
```

Keywords:
- [Fakes](/tags/fakes) over other Test Doubles
- testing terminology
- Sinon and Fake Timers
- injecting a central `java.time.Clock` into Java applications
- resilience4j and how to test the timing logic in fast unit tests
