---
date: 2025-09-08
tags:
    - notes
title: "Sharing kills multi-core perf"
---

Just read [this piece](https://pkolaczk.github.io/server-slower-than-a-laptop/)
on how a single line of code killed the performance, ensuring 24 cores
ran slower than a single core.

The code relied on a on a reference counter which is supposed to be atomic 
and "lock-less", but when there was contention there is locks on the hardware
level that would limit performance. This was bad with cores on one cpu and 
much worse with multiple CPU's - with even longer to travel to the cache.

The obvious fix was to avoid sharing the reference counters. They
ended up with one per thread, which guaranteed no sharing at all.
Downside was memory use
