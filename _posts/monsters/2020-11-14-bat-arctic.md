---
layout: post
tags: monster beast arctic mountain underdark enchanted air
permalink: /monsters/bat-arctic
title: Bat, Arctic
---

<img align="right" width=200px  src="/images/0002_BatArctic2.png"  style="border:0px solid black">

##### Illustration by Salty Goo. Monster inspired by the [Creature Compendium](https://www.drivethrurpg.com/product/147588/CC1-Creature-Compendium).


A fluffy white bat with a freezing venom. Arctic Bats follow blizzards, hiding among the snowflakes. They harass their preys until they freeze before eating them.  A tiny scavenging beast. 

_Imagine a tiny screeching puff of white fur with grey-blue bat wings._

<br>

---


|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 1 | **Armor:** 0 |
| **Hit it:** hard | **Dodge it:** normal |
| **Movement:** fly fast   |  **Size:** tiny | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

It **resists** cold because of its fur. It **can** hear very well, allowing it to easily spot their preys in the dark, even invisible ones. **Also**, it is hard to spot amongst snowflakes, making attacks against it disadvantageous during snowstorms. 


**Attacks (1/round)**

<ins>Freezing Bite</ins>. The arctic bat makes a melee attack. On a hit, the target must save or be poisoned with a [freezing venom](/2024/01/01/arctic-bat-venom/).

<details markdown="1">
<summary style="font-weight: bold;">Tame It</summary>
If you have captured this beast, you can spend the equivalent of 1 bag of silver in food between two adventures to tame it. It is now one of your <span class="tooltip" data-tooltip="You can bring a follower in your adventures if you dedicate a Psyche slot to it."><i>followers</i></span>. Each extra bag of gold spent training the beast teaches it a one-word order. Otherwise, it only acts to eat or in self-defence. 
</details>

<details markdown="1">
<summary style="font-weight: bold;">Hunt It</summary>
Arctic bat fur is very fluffy, but a huge amount of bats must be skinned to make a coat, making it very expensive. [Arctic bat venom](/2024/01/01/arctic-bat-venom/) is valued as a food preserver and as a weapon.

If you have access to an artisan and a workshop, you can spend loot between two adventures to create something with parts of the beast. The object you craft can be anything mostly made of the provided materials. It will have the value of what you [invest in it](/2024/06/26/currency/#values). Discuss what you want with the referee.
</details>

<br>

---

# Arctic Bat Swarm

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points** 8 | **Armor:** 0  |
| **Hit it:** normal | **Dodge it:** hard |
| **Movement:** fly fast    |  **Size:** medium swarm | 


##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

It **resists** cold because of its fur. It **can** hear very well, allowing it to easily spot their preys in the dark, even invisible ones. **Also**, it is hard to spot amongst snowflakes, making attacks against it disadvantageous during snowstorms. 

In a swarm, creatures are **immune** to being grappled or attacked by single target spells, and **resist** mind and weapon damage. **However**, they take double damage from area of effect attacks.

**Attacks (1/round)**

<ins>Bites.</ins> The swarms makes a melee attack. On a hit (1 dmg), the target is [blinded](/2020/11/09/base-rules/) for 1 turn, and must save or be poisoned with a [freezing venom](/2024/01/01/arctic-bat-venom/).

<br>

---

## The Lair

**Number** : 2 Swarms <span style="display: inline-block; width:30px"></span>
**Lair** : A crack leading to a frozen cave with 1D10 sleeping swarms in it<span style="display: inline-block; width:30px"></span> <br>
**Desire** : Easy Preys & Subzero Themperatures

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;">When you roll this monster on your encounter table. Most of them are hints the monster is nearby.</p>

<button onclick="generateMood()">Generate What The Monster Is Doing</button>
<p id="MoodResult" style="font-style: italic;">If the party meets this monster, what is it doing?</p>
<script src="/scripts/generateMood.js"></script>

<button id="room-btn">Generate Lair Room</button>
<p id="RoomResult">A basic dungeon thematic room.</p>

<button id="generate-btn">Generate Random Omen</button>
<p id="RoamResult">To fill a dungeon room.</p>

<button onclick="generateMood()">Generate Random Action</button>
<p id="MoodResult">What it is doing.</p>
<script src="/scripts/generateMood.js"></script>

 
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $(document).ready(function() {
        function generateResult(buttonId, resultId, columnRangeStart, columnRangeEnd) {
          $(buttonId).click(function() {
            var searchValue = "0002"; // Change this to the actual value you need

            $.get("/CSV/Monster - Index.csv", function(data) {
              var rows = data.split("\n").slice(1);
              var matchingRows = rows.filter(function(row) {
                var columns = row.split(",");
                return columns[0] === searchValue;
              });

              var selectedRow = matchingRows[Math.floor(Math.random() * matchingRows.length)];
              var selectedCell = selectedRow.split(",")[Math.floor(Math.random() * (columnRangeEnd - columnRangeStart + 1)) + columnRangeStart];

              $(resultId).html(selectedCell); // Use .html() to insert HTML content
            });
          });
        }

        generateResult("#room-btn", "#RoomResult", 38, 43);
        generateResult("#generate-btn", "#RoamResult", 3, 8);
      });
    </script>
