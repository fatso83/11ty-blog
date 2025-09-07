---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---

<p class="date">
  Posted on <time datetime="{{ date }}">{{ date | dateDisplay }}</time>
</p>
<main>
  {{ content | safe }}
  <div class="footnote">

  <h3>Tags</h3>
  {% set skip = ['all', 'nav', 'post', 'posts'] %}
  <ul>
  {%- for t in tags  | exclude(skip) -%}
    <li>
      <a href="/tags/{{ t | slug }}/">{{ t }}</a>
    </li>
  {%- endfor -%}
  </ul>
  </div>
</main>
