---
layout: post
tags: monster beast  desert rocky mountain plains enchanted air
permalink: /monsters/cat-tressym-giant
title: Cat, Tressym, Giant
---

##### This creature exists under the name of Giant Tressym, Jana-Nimr and Greater Winged Cat in DnD, but appears in many folklores across the world.

**A puma with wings**, with the fur diversity of a house cat. The Giant Tressym, or Greater Flying Cat, is a solitary ambush predator that pounces on its prays from impossible-to-reach locations. It is surprisingly intelligent. A carnivorous beast.

_Imagine a calico puma with magestic wings that match its fur._

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 8 | **Armor:** 0  |
| **Hit it:** normal | **Dodge it:** normal |
| **Movement:** fast, climb & fly fast      |  **Size:** medium | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

It **can** hear and see very well, allowing it to easily spot their preys in the dark. It can smell illusions and poisons, and speaks the language of sphinxes.

**Attacks (1/round)**

<ins>Pounce.</ins> The giant tressym makes a melee attack (1D6 dmg). If it was flying before the attack, a human-sized or smaller target is [prone](/2020/11/10/extra-rules/#conditions).

<br>

<details markdown="1">
<summary style="font-weight: bold;">Tame It</summary>
If you have captured this beast, you can spend the equivalent of 1 bag of gold in food between two adventures to tame it. It is now one of your <span class="tooltip" data-tooltip="You can bring a follower in your adventures if you dedicate a Psyche slot to it."><i>followers</i></span>. Each extra bag of gold spent training with the beast teaches you one short phrase in its language. Otherwise, it is proud and selfish.
</details>

<details markdown="1">
<summary style="font-weight: bold;">Hunt It</summary>
Tressyms are extremely prized as pets. But its fur is also an exotic, if decadent, luxury.
  
If you have access to an artisan and a workshop, you can spend loot between two adventures to create something with parts of the beast. The object you craft can be anything mostly made of the provided materials. It will have the value of what you [invest in it](/2024/06/26/currency/#values). Discuss what you want with the referee.
</details>

<br>

---

## The Lair

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** : An acacia tree, its branches spreading very wide. 1/2 chance there are 2D6 kittens. <span style="display: inline-block; width:30px"></span> <br>
**Desire** : Assess threats & Outsmart You

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
            var searchValue = "0018"; // Change this to the actual value you need

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

 
