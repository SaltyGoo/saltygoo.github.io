---
layout: post
tags: monster beast  desert rocky mountain plains enchanted air
permalink: /monsters/cat-tressym-giant
title: Cat, Tressym, Giant
---

##### This creature exists under the name of Giant Tressym, Jana-Nimr and Greater Winged Cat in DnD, but appears in many folklores across the world.

A puma with wings, with the fur diversity of a house cat. A carnivorous beast.

The Giant Tressym, or Greater Flying Cat, is a solitary ambush predator that pounces on its prays from impossible-to-reach locations. It is surprisingly intelligent.

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **HD** 1 | **Armor:** 0  |
| **Hit it:** normal | **Dodge it:** normal |
| **Movement:** fast, climb & fly fast      | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature can **hear** and **see** very well, allowing it to operate stealthily in the dark without troubles. It can even smell illusions and poisons, and speak the language of sphinxes.

**Attacks (1/round)**

<ins>Claws.</ins> The giant tressym makes a melee attack (1D4 dmg).

<ins>Rake.</ins> If it has the space, the giant tressym flies its full movement and lands on a target. On a hit, the target takes damage (2D4 dmg) and is [prone](/2020/11/10/extra-rules/#conditions).

---

<br>

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** : An acacia tree, its branches spreading very wide. 1/2 chance there are 2D6 kittens. <span style="display: inline-block; width:30px"></span> <br>
**Desire** : Assess threats & Outsmart You

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;">When you roll this monster on your encounter table. Most of them are hints the monster is nearby.</p>

<button onclick="generateMood()">Generate What The Monster Is Doing</button>
<p id="MoodResult" style="font-style: italic;">If the party meets this monster, what is it doing?</p>
<script src="/scripts/generateMood.js"></script>

---

## So, You Are Hunting Giant Tressyms?

New carousing activities!

<details markdown="1">
<summary style="font-weight: bold;">Tame the Beast</summary>
If you have captured this beast, you can spend the equivalent of 1 bag of gold in food between two adventures to tame it. It is now one of your <span class="tooltip" data-tooltip="You can bring a follower in your adventures if you dedicate a Psyche slot to it."><i>followers</i></span>. Each extra bag of gold spent training the beast teaches it a one-word order. Otherwise, it only acts to eat or in self-defence. 
</details>

<details markdown="1">
<summary style="font-weight: bold;">Craft from Beast Parts</summary>
There’s not much to gain there besides a bit of fur and feather, but cubs would be extremely valuable.

If you have access to an artisan and a workshop, you can spend loot between two adventures to create something with parts of the beast. The object you craft can be anything mostly made of the provided materials. If you use mundane tools, the result will be mundane; if you spent at least a bag of gold on it, the object will be special; and if you spend the equivalent of a treasure for the tools, it will be magical. Discuss what you want with the referee.
</details>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
  // ENCOUNTER GENERATOR SCRIPT
    $(document).ready(function() {
      $("#generate-btn").click(function() {
        // define the specific value to search for in column 0
        var searchValue = "0018"; // change this to the actual value you need

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
 
