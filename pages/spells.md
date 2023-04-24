---
layout: page
title: How Spells Work
permalink: /spells/
---

**Spell Dice (SD)**

You need a least 1 Spell Die to cast spells. They are D6s and you normally get them when taking levels in certain classes.

Whenever you cast a spell, you choose how many SD to invest into it. The result of the spell depends on the number of [dice] and their [sum].

If a SD rolls a 1, 2 or 3, you don’t lose it. Otherwise, you lose it until you get a night of sleep.

Every time you roll doubles or triples with your SD, you get closer to *[Catastrophe](/list/spell-catastrophe)*.

# Spells

###### All spell schools originate from [Wonders & Wickedness](https://www.exaltedfuneral.com/products/wonder-wickedness) and [Marvels & Malisons](https://www.exaltedfuneral.com/products/marvel-malisons)

Spells by magic school:

1. [Animorphosis](#animorphosis)
1. [Apotropaism](#apotropaism)
1. [Cunning Craft](#cunning-craft)
1. [Diabolism](#diabolism)
1. [Elementalism](#elementalism)
1. [Mundane Tricks](#mundane-tricks)
1. [Necromancy](#necromancy)
1. [Physiurgy](#physiurgy)
1. [Psychomancy](#psychomancy)
1. [Spiritualism](#spiritualism)
1. [Translocation](#translocation)
1. [Vivimancy](#vivimancy)

For the complete alphabetical list : [All Spells](/list/spells)

---

### Lexicon

<details markdown="1">
<summary>How to Read a spell</summary>

<ins>R</ins> : Range      <ins>D</ins> : Duration

<ins>[dice]</ins> : the number of rolled dice.

<ins>[sum]</ins> : the sum of the rolled dice.

<ins>Sigil</ins> : Your unique symbol. It makes some spells permanent. It takes 10 minute to scribe and you can only have as many active ones as you have Spell Dice. If you  cast a sigil spell above your limit, the oldest sigil fades, but leaves a visible trace behind.

<ins>Valuable / Treasure</ins> : Means the spell uses a component worth [valuables or treasures](/2020/11/10/extra-rules#treasures).

<ins>HD</ins> : Means Hit Dice, the level of the monster, which the Referee knows. The minimum level is 1.

<ins>[Catastrophe](/list/spell-catastrophe)</ins> :  Every time you roll doubles with your Spell Dice you gain 1 Doom Point. Roll a D20. If you roll equal to or below your doom score, you trigger a catastrophe. They will end your wizardly career if you don’t quest to avoid your doom.

<ins>Duration Philosophy</ins> : Each duration unit reflects the intended use of the spell:
- <ins>rounds</ins> is for in combat.
- <ins>minutes</ins> is for conversation and is measured in real time.
- <ins>10 minutes</ins> is for exploration (a battle takes 10 minutes, exploring a room takes 10 minutes, etc).
- <ins>hours</ins> is for between rests. A game session.
- <ins>sigil</ins> is permanent, but is capped by the number of Spell Dice.

<ins>Range Philosophy</ins> :
A human moves 30’ in a turn, so all ranges are in 30’ increments to ease calculation when playing without a grid.
</details>

---
 
# Spell Schools

## Animorphosis
Magic that relates to becoming like a specific animal species. Formorphosis is ant magic, mycomorphosis is fungus magic, etc. All iterations of [animal] should be replaced by a specific [animal](https://www.generatormix.com/random-animal-generator) species when the spell is first found.

{% capture posts %}
  {% for post in site.tags.animorphosis %}
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
 
## Apotropaism
Sturdy wards against curses and evil.

{% capture posts %}
  {% for post in site.tags.apotropaism %}
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

## Cunning Craft
Old curses and nature magic from druids and witches.

{% capture posts %}
  {% for post in site.tags.cunning %}
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

## Diabolism
The binding of angels and devils, creatures that make the laws of this universe.

{% capture posts %}
  {% for post in site.tags.diabolism %}
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

## Elementalism
Dealing with the capricious spirits of the land, which are the building blocks of all matter.

{% capture posts %}
  {% for post in site.tags.elementalism %}
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

## Mundane Tricks
The art of enchanting everyday objects in an utilitarian way. Include rope tricks, spoon tricks, painter tricks, etc.

{% capture posts %}
  {% for post in site.tags.tricks %}
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

## Necromancy
The dangerous manipulation of life and death, usually traded one for one: one life for one life, one death for one death.

{% capture posts %}
  {% for post in site.tags.necromancy %}
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

## Physiurgy
Midwives' brews and witch-doctors' remedies.

{% capture posts %}
  {% for post in site.tags.physiurgy %}
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

## Psychomancy
Mind tricks which provide temporary benefits.

{% capture posts %}
  {% for post in site.tags.psychomancy %}
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

## Spiritualism
The study of magic itself.

{% capture posts %}
  {% for post in site.tags.spiritualism %}
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

## Translocation
The paradox-prone manipulation of space and time.

{% capture posts %}
  {% for post in site.tags.translocation %}
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

## Vivimancy
The gruesome science of flesh, growth and evolution.

{% capture posts %}
  {% for post in site.tags.vivimancy %}
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
