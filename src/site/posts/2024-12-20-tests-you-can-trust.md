---
date: 2024-12-20
tags: 
    - architecture
    - testing
    - fakes
title: "Presentation: Tests You Can Trust"
---

Created a presentation for Bring/Posten called "Tests You Can Trust". 

[The Presentation (here)](https://docs.google.com/presentation/d/e/2PACX-1vS8frdMD3PNr5yg1l2WNBJRpmQOoHFfan2bzbmrSOEX_mMsIO8Orlk7DeVozYlJDO3Lfe7bD-MqOh3e/pub?start=true&loop=false&delayms=10000) has strategies for building more trustworthy tests, including control of time, with [code examples (in a repo)](https://github.com/fatso83/supporting-code/tree/sjef/trusted-tests) for Java and Javascript.

Keywords:
- [Fakes](/tag/fakes) over other Test Doubles
- testing terminology
- Sinon and Fake Timers
- injecting a central `Clock` into Java application
- resilience4j and how to test the timing logic in fast unit tests
