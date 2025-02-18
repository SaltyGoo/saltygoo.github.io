---
layout: post
tags: monster beast  jungle plains swamp
permalink: /monsters/bat-kongamato
title: Bat, Kongamato
---

##### Mythtical monster originating from Zambian and congolese folklore.

**A large amphibious diseased bat**. Kongamato bats hunt along rivers at night. Its amphibious nature explains its name, which means “boat toppler” in the local tongue. It smells of swamp water.  A nocturnal predatory beast.

_Imagine a human-sized dark-red bat with thick leathery clawed wings and an elongated toothy snout._

<br>

---


|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 9 | **Armor:** none |
| **Hit it:** hard when flying | **Dodge it:** normal |
| **Movement:** fly fast, swim normal  |  **Size:** medium | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

It **can** hear very well, allowing it to easily spot their preys in the dark, even invisible ones.

**Attacks (2/round)**

<ins>Dirty Rake</ins>. The kongamato makes a melee attack (1D6 dmg, 1d10 underwater), on a hit, the target will wake up with the [Eye Rot](/2024/01/01/eye-rot/).

<ins>Topple Dive</ins>. If the kongamato has the space for it, or if it is underwater, it charges the target with its arms forward (1D6 dmg). On a hit, the target is pushed back nearby and falls prone. Alternatively, it can topple any boat no bigger than a pirogue.
<br>

<details markdown="1">
<summary style="font-weight: bold;">Tame It</summary>
If you have captured this beast, you can spend the equivalent of 2 [bags of gold](/2024/06/26/currency/) in food between two adventures to tame it. It is now one of your <span class="tooltip" data-tooltip="You can bring a follower in your adventures if you dedicate a Psyche slot to it."><i>followers</i></span>. Each extra bag of gold spent training the beast teaches it a one-word order. Otherwise, it only acts to eat or in self-defence. 
</details>

<details markdown="1">
<summary style="font-weight: bold;">Hunt It</summary>
Kongamato fur is waterproof. You would still need the skin of two to make an outfit. Its guano or flesh can be used as a carrier of [Eye Rot](/2024/01/01/eye-rot/) disease.

If you have access to an artisan and a workshop, you can spend loot between two adventures to create something with parts of the beast. The object you craft can be anything mostly made of the provided materials. It will have the value of what you [invest in it](/2024/06/26/currency/#values). Discuss what you want with the referee.
</details>

<br>

---

## The Lair

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** : A cluster of mangroves covered in hardened bat guano <span style="display: inline-block; width:30px"></span> <br>
**Desire** : Easy Prays & Defend Its Territory

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
            var searchValue = "0009"; // Change this to the actual value you need

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
