---
layout: post
tags: monster elemental greater lesser desert forest plains jungle mountain rocky underdark magical earth astral
permalink: /monsters/elemental-earth
title: Elemental, Earth
---

**Sentient earth.** Steam Elemental are straightforward and methodical. They value patience and humility and communicate in tremors and groans. Sometimes seen summoned by a _[wizard](/monsters/wizard)_. An earth elemental.


_Imagine earth moving and shaping itself as if it had its own will._


<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 4*X | **Armor:** 6 |
| **Hit it:** easy   | **Dodge it:** normal  |
| **Move:** slow     |  **Size:** vary | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature is living earth and is thus **only affected** by things that would affect earth. It has a 1/6 chance to collapse if it ends its turn not in contact with a hard surface. It can **shape earth** at will.

**Attacks (1/round)**

<ins>Slam</ins>. The elemental makes a melee attack (XD4 damage). It inflicts double damage to immobile targets.

<ins>Sink</ins>. Until the end of its next turn, the elemental or an adjacent creature treats earth as water.

<ins>Create Rock</ins> (X/day). The elemental creates a X' boulder which it can throw as a ranged attack (XD4 damage). It inflicts double damage to immobile targets.


<br>
<details markdown="1">
<summary style="font-weight: bold;">Harness Its Energy</summary>
If you have captured this elemental, you can spend the equivalent of 3 [bags of gold](/2024/06/26/currency/) in a magical laboratory between two adventures to bind it to your soul. If you do so, you ...

- You gain X [Doom Points](/list/spell-catastrophe) (roll for Catastrophe); 
- You gain 1 [Spell Die](/spells/) and learn the spell _Conjure Steam Elemental_ (below);
- Roll a D6, you <span class="tooltip" data-tooltip="Permanent mutations take an inventory slot">mutate</span> in the following way :
1. Your weight doubles.
1. The ground is against you.
1. You attract lightning.
1. You are magnetic.
1. You have +1 armor.
1. You can change one word from a class ability you have or a spell you know to *Earth*.

If you roll a Catastrophe, the elemental is released and hostile, and you lose the Spell Dice.
</details>

<br>

---

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** :  Ever-shifting rocks <span style="display: inline-block; width:30px"></span>
**Desire** : Sleep & Flatten things

<button id="room-btn">Generate Lair Room</button>
<p id="RoomResult">A basic dungeon thematic room.</p>

<button id="generate-btn">Generate Random Omen</button>
<p id="RoamResult">To fill a dungeon room.</p>

<button onclick="generateMood()">Generate Random Action</button>
<p id="MoodResult">What it is doing.</p>
<script src="/scripts/generateMood.js"></script>

---

### Conjure Earth Elemental

**R**: 30'  <span style="display: inline-block; width:30px"></span> **D**: [dice] x 10 minutes

You summon a 1D4 HD earth elemental. You may control it if it has [dice] HD or less with concentration, but otherwise the standard reaction roll and negotiating procedures apply. If a particular true name is known, it may be intoned during the casting of this spell and the named elemental will come instead.


 

 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $(document).ready(function() {
        function generateResult(buttonId, resultId, columnRangeStart, columnRangeEnd) {
          $(buttonId).click(function() {
            var searchValue = "0015"; // Change this to the actual value you need

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
