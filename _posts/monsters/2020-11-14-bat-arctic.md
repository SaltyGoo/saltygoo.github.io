---
layout: post
tags: monster beast arctic mountain underdark enchanted air
permalink: /monsters/bat-arctic
title: Bat, Arctic
---

<img align="right" width=200px  src="/images/0002_BatArctic2.png"  style="border:0px solid black">

##### Illustration by Salty Goo. Monster inspired by the [Creature Compendium](https://www.drivethrurpg.com/product/147588/CC1-Creature-Compendium).

_Imagine a tiny screeching puff of white fur with grey-blue bat wings._

A fluffy white bat with a freezing venom. A tiny scavenging beast.

Arctic Bats follow blizzards, hiding among the snowflakes. They harass their prays until they freeze before eating them. 

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| 1 **HP** | **Armor:** 0  |
| **Hit it:** hard | **Dodge it:** normal |
| **Movement:** fly fast      | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

Because of its fur, this creature is **resistant to cold** and hard to spot amongst snowflakes, making attacks against it disadvantageous during snowstorms. 

It can hear very well, allowing it to easily spot their preys in the dark, even invisible ones.

**Attacks (1/round)**

<ins>Bite</ins>. The arctic bat makes a melee attack. On a hit, the target must save vs poison or slowly freeze and be [dazed](/2020/11/10/extra-rules/#conditions). The target can save again at the end of its next turn to cure the effect. On a second failure, the target is frozen for 24h. This effect only happens in subzero temperatures.

<br>

---

# Arctic Bat Swarm


|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| 3D4 **HP** | **Armor:** 0  |
| **Hit it:** normal | **Dodge it:** special |
| **Movement:** fly fast      | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

Because of its fur, this creature is **resistant to cold** and hard to spot amongst snowflakes, making attacks against it disadvantageous during snowstorms. 

It can hear very well, allowing it to easily spot their preys in the dark, even invisible ones.

In a swarm, creatures are **immune** to being grappled or attacked by single target spells, and **resist** mind and weapon damage. **However**, they take double damage from area of effect attacks.

**Attacks (1/round)**

<ins>Bites.</ins> To dodge a swarm’s attack, the roll has to beat 10 + the swarm's HP. On a hit, the target must save vs poison or slowly freeze and be [dazed](/2020/11/10/extra-rules/#conditions). The target can save again at the end of its next turn to cure the effect. On a second failure, the target is frozen for 24h. This effect only happens in subzero temperatures.

<br>

---

**Number** : 2 Swarms <span style="display: inline-block; width:30px"></span>
**Lair** : A crack leading to a frozen cave with 1D10 sleeping swarms in it<span style="display: inline-block; width:30px"></span> <br>
**Desire** : Easy Preys & Subzero Themperatures

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;">When you roll this monster on your encounter table. Most of them are hints the monster is nearby.</p>

<button onclick="generateMood()">Generate What The Monster Is Doing</button>
<p id="MoodResult" style="font-style: italic;">If the party meets this monster, what is it doing?</p>
<script src="/scripts/generateMood.js"></script>

---

## So, You Are Hunting Arctic Bats?

New carousing activities!

<details markdown="1">
<summary style="font-weight: bold;">Tame the Beast</summary>
If you have captured this beast, you can spend the equivalent of 1 bag of gold in food between two adventures to tame it. It is now one of your <span class="tooltip" data-tooltip="You can bring a follower in your adventures if you dedicate a Psyche slot to it."><i>followers</i></span>. Each extra bag of gold spent training the beast teaches it a one-word order. Otherwise, it only acts to eat or in self-defence. 
</details>

<details markdown="1">
<summary style="font-weight: bold;">Craft from Beast Parts</summary>
Arctic bat fur is very fluffy, but a huge amount of bats must be skinned to make a coat, making it very expensive. Arctic bat venom is valued as a food preserver and as a weapon.

<span class="alchemy">**Arctic Bat Saliva.** In wound: Save or be poisoned, save again each day to cure. You are [stunned](/2020/11/10/extra-rules/#conditions) in subzero temperatures.</span>

If you have access to an artisan and a workshop, you can spend loot between two adventures to create something with parts of the beast. The object you craft can be anything mostly made of the provided materials. If you use mundane tools, the result will be mundane; if you spent at least a bag of gold on it, the object will be special; and if you spend the equivalent of a treasure for the tools, it will be magical. Discuss what you want with the referee.
</details>
 
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
  // ENCOUNTER GENERATOR SCRIPT
    $(document).ready(function() {
      $("#generate-btn").click(function() {
        // define the specific value to search for in column 0
        var searchValue = "0002"; // change this to the actual value you need

        // retrieve the CSV file
        $.get("/CSV/Monster - Index.csv", function(data) {
          // split the CSV data by rows and remove the header row
          var rows = data.split("\n").slice(1);

          // filter the rows by the specific value in column 0
          var matchingRows = rows.filter(function(row) {
            var columns = row.split(",");
            return columns[0] === searchValue;
          });

          // randomly select a row from the matching rows
          var selectedRow = matchingRows[Math.floor(Math.random() * matchingRows.length)];

          // select a random cell from columns 3 to 8
          var selectedCell = selectedRow.split(",")[Math.floor(Math.random() * 6) + 3];

          // display the selected text
          $("#RoamResult").text(selectedCell);
        });
      });
    });
  </script>
  
