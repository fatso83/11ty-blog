---
title: Oligofren 2.0
subtitle: Ramblings and learnings on tech and stuff
layout: layouts/base.njk
---
This blog should essentially serve as a repo for quick thoughts and notes, 
documenting my own learning - both to serve as a reference to me in the future
when I try to remember where I read something and what, and to 
help in actually remember stuff by reading up summaries (backed by
notes from the Readwise plugin).

Recurring themes are performance, architecture and how to achieve high-value test suites
that are lightning fast – without tons of mocks and heavy setups.

## Posts

<ul class="listing">
{%- for page in collections.post | reverse -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>

## Notes and snippets 
Quick brain dumps and notes for keep

<ul class="listing">
{%- for page in collections.notes | reverse -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>

