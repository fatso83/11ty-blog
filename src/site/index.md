---
title: Oligofren 2.0
subtitle: Carl-Eriks notater om tech og sånt
layout: layouts/base.njk
---

heisann
## Innlegg

<ul class="listing">
{%- for page in collections.post -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>

