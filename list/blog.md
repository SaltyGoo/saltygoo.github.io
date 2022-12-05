---
layout: post
permalink: /blog
title: Blog
---

{% capture posts %}
  {% for post in site.tags.article %}
    |{{ post.title }}#{{ post.url }}
  {% endfor %}
{% endcapture %}
{% assign sortedposts = posts | split: '|' | sort %}
<ol>
{% for post in sortedposts %}
{% assign postitems = post | split: '#' %}
{% unless forloop.first %}
  <li> <a href="{{ postitems[1] }}"> {{ postitems[0] }}</a></li> 
{% endunless %}
{% endfor %} 
</ol>
