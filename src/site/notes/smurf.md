---
date: 2024-12-31
tags: 
    - testing
    - todayilearned
    - notes
title: "SMURF - Google Testing Blog"
---

I read [Google Testing Blog: SMURF - Beyond the test pyramid][smurf-link] today. The acronym seems quite useful.

> While useful, the test pyramid lacks the details you need as your test suite grows and you face challenging trade-offs. To scale your test suite, go beyond the test pyramid. The SMURF mnemonic is an easy way to remember the tradeoffs to consider when balancing your test suite

- Speed (faster = better)
- Maintanability (too much code gets expensive, trim, balance)
- Utilization (use fewer resources)
- Reliability (fail for important reasons)
- Fidelity (High-fidelity tests come closer to approximating real operating conditions (e.g., real databases or traffic loads) and better predict the behavior of our production systems)

[smurf-link]: https://testing.googleblog.com/2024/10/smurf-beyond-test-pyramid.html
[smurf-pdf]: https://github.com/fatso83/learning-resources/tree/main/.assets/Google%20Testing%20Blog_%20SMURF_%20Beyond%20the%20Test%20Pyramid.pdf

[Original][smurf-link] and [pdf][smurf-pdf]

