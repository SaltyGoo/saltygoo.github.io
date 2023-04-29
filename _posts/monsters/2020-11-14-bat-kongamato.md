---
layout: post
tags: monster beast  jungle plains swamp
permalink: /monsters/bat-kongamato
title: Bat, Kongamato
---

##### Illustration by Salty Goo. Mythtical monster originating from Zambian folklore.

_Imagine a human-sized dark-red bat with thick leathery clawed wings and an elongated toothy snout. It smells of swamp water._

A large amphibious diseased bat. A predatory beast.

Kongamato bats hunt along rivers at night. Its amphibious nature explains its name, which means “boat toppler” in the local tongue.

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **HD** 2 | **Armor:** 0  |
| **Hit it:** hard | **Dodge it:** normal |
| **Movement:** fly fast, swim normal     | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This bat can hear very well, allowing it to easily spot their preys in the dark, even invisible ones.

**Attacks (2/round)**

<ins>Bite</ins>. The kongamato makes a melee attack with disadvantage (1D8 dmg).

<ins>Claws</ins>.  The kongamato makes a melee attack (1D6 dmg). On a hit, the target must save against disease or catch eye rot.

<span class="alchemy"> **Eye Rot**: Disease. You have a maximum vision of 60'. Save every night to add or remove a cumulative symptom. Symptom: -10’ max vision. </span>

<br>

---

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** : A cluster of mangroves covered in hardened bat guano <span style="display: inline-block; width:30px"></span> <br>
**Desire** : Easy Prays & Defend Its Territory

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;">When you roll this monster on your encounter table. Most of them are hints the monster is nearby.</p>

<button onclick="generateMood()">Generate What The Monster Is Doing</button>
<p id="MoodResult" style="font-style: italic;">If the party meets this monster, what is it doing?</p>
<script src="/scripts/generateMood.js"></script>

---

## So, You Are Hunting Kongamatos?

New carousing activities!

<details markdown="1">
<summary style="font-weight: bold;">Tame the Beast</summary>
If you have captured this beast, you can spend the equivalent of 2 bags of gold in food between two adventures to tame it. It is now one of your <span class="tooltip" data-tooltip="You can bring a follower in your adventures if you dedicate a Psyche slot to it."><i>followers</i></span>. Each extra bag of gold spent training the beast teaches it a one-word order. Otherwise, it only acts to eat or in self-defence. 
</details>

<details markdown="1">
<summary style="font-weight: bold;">Craft from Beast Parts</summary>
Kongamato fur is waterproof. You would still need the skin of two to make an outfit. Its guano or flesh can be used as a carrier of Eye Rot disease (describe above).

If you have access to an artisan and a workshop, you can spend loot between two adventures to create something with parts of the beast. The object you craft can be anything mostly made of the provided materials. If you use mundane tools, the result will be mundane; if you spent at least a bag of gold on it, the object will be special; and if you spend the equivalent of a treasure for the tools, it will be magical. Discuss what you want with the referee.
</details>
 
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
  // ENCOUNTER GENERATOR SCRIPT
    $(document).ready(function() {
      $("#generate-btn").click(function() {
        // define the specific value to search for in column 0
        var searchValue = "0009"; // change this to the actual value you need

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
 
