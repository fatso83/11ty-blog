---
layout: layouts/base.njk
pageClass: posts
templateEngineOverride: njk, md
---

<p class="date">
  Postlagt på <time datetime="{{ date }}">{{ date | dateDisplay }}</time>
</p>
<main>
  {{ content | safe }}
  <!--<div class="footnote">-->
    <!--<p>-->
      <!--This page is part of the posts section.-->
    <!--</p>-->
  <!--</div>-->
</main>
