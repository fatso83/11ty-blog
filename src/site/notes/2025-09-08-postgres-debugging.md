---
date: 2025-09-08
tags:
    - notes
    - performance
title: "Postgres query debugging"
---

When dealing with CPU load related to locking and procedural logic, you might want to look into tools like `pg_stat_activity` to see what queries are running and how long they're waiting.

Another good option is using the `pg_stat_statements` extension if you have it enabled. It can give you a sense of which functions or which queries are consuming the most time and resources overall. If you're seeing a lot of CPU usage there, it can point you to specific functions or specific parts of your PL/pgSQL that might be worth refactoring.

Sometimes using a bit of logging or a tool like `pg_profile` or pgBadger can give you more historical insight into which queries are the real culprits.

