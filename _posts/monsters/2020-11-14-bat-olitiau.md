---
layout: post
tags: monster beast  desert forest rocky jungle plains swamp
permalink: /monsters/bat-olitiau
title: Bat, Olitiau
---

#####  Mythtical monster originating from Cameroonian and Congolese folklore.

**A venomous clawed bat.** Olitiaus live in tree-top colonies near rivers. They hunt at night by biting their preys and waiting for their venom to take effect. A small carnivorous beast.

_Imagine a white-furred bat the size of a dog with sharp claws coming out of its ochre, suede-like wings._

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 4 | **Armor:** none |
| **Hit it:** normal | **Dodge it:** normal |
| **Movement:** fly fast   |  **Size:** small | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

It **can** hear very well, allowing it to easily spot their preys in the dark, even invisible ones.

**Attacks (1/round)**

<ins>Deadly Rake</ins>. The olitiau makes a melee attack (1 dmg), on a hit the target is infected with its deadly [venom](/2024/01/01/olitiau-venom/).

<br>

<details markdown="1">
<summary style="font-weight: bold;">Tame It</summary>
If you have captured this beast, you can spend the equivalent of 1 [bag of gold](/2024/06/26/currency/) in food between two adventures to tame it. It is now one of your <span class="tooltip" data-tooltip="You can bring a follower in your adventures if you dedicate a Psyche slot to it."><i>followers</i></span>. Each extra bag of gold spent training the beast teaches it a one-word order. Otherwise, it only acts to eat or in self-defence. 
</details>

<details markdown="1">
<summary style="font-weight: bold;">Hunt It</summary>
Olitiaus are cute enough to be pets, but the most valuable part of their body is their [venom](/2024/01/01/olitiau-venom/).

If you have access to an artisan and a workshop, you can spend loot between two adventures to create something with parts of the beast. The object you craft can be anything mostly made of the provided materials. It will have the value of what you [invest in it](/2024/06/26/currency/#values). Discuss what you want with the referee.
</details>

<br>

---

# Olitiau Swarm

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points** 18 | **Armor:** 0  |
| **Hit it:** easy | **Dodge it:** special |
| **Movement:** fly fast    |  **Size:** large swarm | 

It **can** hear very well, allowing it to easily spot their preys in the dark, even invisible ones. 

In a swarm, creatures **resist** single target attacks. **However**, they take double damage from area of effect attacks.

**Attacks (1/round)**

<ins>Rake</ins>. To dodge a swarm’s attack, roll above 10 + the swarm's HP. On a hit the target takes damage (1D4) and must save vs poison or start [dying](/2020/11/10/extra-rules/#conditions).

<br>

---

## The Lair

**Number** : 1 Swarm <span style="display: inline-block; width:30px"></span>
**Lair** : A huge, sprawling willow with 4D6 sleeping olitiaus. <span style="display: inline-block; width:30px"></span> <br>
**Desire** : Easy Preys & Big arboreal shelters

<button id="room-btn">Generate Lair Room</button>
<p id="RoomResult">A basic dungeon thematic room.</p>

<button id="generate-btn">Generate Random Omen</button>
<p id="RoamResult">To fill a dungeon room.</p>

<button onclick="generateMood()">Generate Random Action</button>
<p id="MoodResult">What it is doing.</p>
<script src="/scripts/generateMood.js"></script>

<br>



 
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $(document).ready(function() {
        function generateResult(buttonId, resultId, columnRangeStart, columnRangeEnd) {
          $(buttonId).click(function() {
            var searchValue = "0024"; // Change this to the actual value you need

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
