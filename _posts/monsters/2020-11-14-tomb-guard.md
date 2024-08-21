---
layout: post
tags: monster construct  desert city underdark cursed holy
permalink: /monsters/tomb-guard
title: Tomb Guard
---

##### Inspired by the [Deep Carbon Observatory](https://www.drivethrurpg.com/en/product/312481/deep-carbon-observatory-remastered) canoptic guard.

**Stone statues animated by canopic jars.** Tomb guards are mindless. Indistinguishable from a statue until the tomb they are guarding is desecrated. Some times seen with a [mummy](/monsters/mummy). A construct.

_Imagine a tall sandstone statue. Impassible, immobile, proud. It clutches an oversized halberd. Inlaid in its head and chest are 5 ceramic jars painted with hieroglyphs._

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 13 | **Armor:** 3 |
| **Hit it:** easy  | **Dodge it:** normal  |
| **Move:** slow     |  **Size:** large | 

It is **immune** to anything that would't damage a rock, but is weaker where its 5 canopic jars are. Hitting a jar is a hard roll and destroys it. When there are no jars left, the tomb guard is deactivated.

- <ins>Face Jar.</ins> Holds a pickled heart. Spreads ancient blood around when broken.
- <ins>Chest Jar.</ins> Holds pickled longs. Screams an ancient curse (non-magical) when broken.
- <ins>Belly Jar.</ins> Holds a pickled stomach. Spreads acid around when broken (1D4 dmg).
- <ins>Back Jar.</ins> Holds pickled intestines. Releases animated strangling guts (1 HP).
- <ins>Groin Jar.</ins> Holds a pickled brain. Releases a hostile floating [brain](/monsters/pickled-brain)).

**Attacks (1/round)**

<ins>Halberd Guillotine.</ins> The Tomb Guard makes a melee attack (1D10).

<br>
<details markdown="1">
<summary style="font-weight: bold;">Loot It</summary>
Tomb guards hold nothing except the content of their canopic jars and their oversized halberd. Hitting target with an oversized weapon is harder unless the wearer has exceptional strength (10).

</details>
<details markdown="1">
<summary style="font-weight: bold;">Craft One</summary>
Creating a tomb guard takes 3 Spell Dice and the equivalent of 3 [bags of gold](/2024/06/26/currency/) in stone and embalming materials. You also need the fresh remains of a loyal follower. Roll 1D6 to know the result. Add 1 to your roll for each additional Spell Die spent.

1. Explodes (3D6)
1. Berserk.
1. Will work for 1 mission.
1. Roll again after the next mission.
1. It is perfectly under your control.
1. It is perfectly under your control.
</details>

<br>

---

## The Lair

**Number** : 2 <span style="display: inline-block; width:30px"></span>
**Lair** : An ancient royal tomb. <span style="display: inline-block; width:30px"></span>
**Desire** : Protect the tomb from intruders.

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
            var searchValue = "0034"; // Change this to the actual value you need

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
