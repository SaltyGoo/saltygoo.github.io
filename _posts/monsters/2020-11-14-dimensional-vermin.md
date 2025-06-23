---
layout: post
tags: monster aberration lesser astral magic chaos
permalink: /monsters/dimensional-vermin
title: Dimensional Vermin
---

##### From Garamondia's [Optical Dungeon](https://garamondia.blogspot.com/2025/03/the-optical-dungeonthe-process-dungeon.html)

**Invisible portal pests.** Dimensional vermins hide and cower in any places where there are frequent interdimensional travels. They will harass and ambush isolated targets. Sometimes seen sharing their habitat with [chokers](/monsters/choker). A small horror.

_It is silent and invisible. But if you could see it, imagine a small crouching red humanoid with bug eyes, long claws and a toothy vertical mouth._


<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 2 | **Armor:** 0 |
| **Hit it:** hard  | **Dodge it:** hard  |
| **Move:** normal, climb normal  |  **Size:** small | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

It is **invisible**. When "killed", it briefly becomes visible and the person who made the last blow must save vs fear. On a failure, the vermin simply runs away at 1 HP.

**Attacks (1/round, twice if it loses its invisibility)**

<ins>Cowardly Claws</ins>. The vermin makes a melee attack (1D4, 1D6 if the target is surprised) and runs away nearby.

<br>
<details markdown="1">
<summary style="font-weight: bold;">Study It (1D6 Mutations)</summary>
If you have disected or conversed with this horror, you can spend the equivalent of 1 bag of gold to feverishly study the thing between two adventures and discover weird knowledge beyond reality. If you do so, your studies of the aberration will change you in horrible, gruesome ways : Roll 1D6 for each gold cost spent this way. One of your body parts become invisible :

1. ... one of your legs.
1. ... one of your arms.
1. ... your skin everywhere.
1. ... your chest.
1. ... your face.
1. roll twice.

This invisibility only affects the body part, not equipment. Mutations take an inventory slot and cannot be removed.
</details>

---

## The Lair

**Number** : 2D6 <span style="display: inline-block; width:30px"></span>
**Lair** : An astral pool leak <span style="display: inline-block; width:30px"></span>
**Desire** : Avoid danger and feed.

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
            var searchValue = "0036"; // Change this to the actual value you need

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
