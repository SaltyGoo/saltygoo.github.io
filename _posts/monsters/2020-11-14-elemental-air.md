---
layout: post
tags: monster elemental greater lesser arctic desert plains mountain sea magical air astral
permalink: /monsters/elemental-air
title: Elemental, Air
---

##### Monster from medieval mythology.

_Imagine wind moving and shaping itself as if it had its own will._

Sentient Wind. An air elemental.

Air Elementals are fickle and tempestuous. They value freedom of spirit and laissez-faire and communicate in hisses and temperature changes.
<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **HD** X | **Armor:** 0  |
| **Hit it:** hard | **Dodge it:** normal |
| **Movement:** fly fast      | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature is living wind and is thus only affected by things that would affect air currents. It has a 1/6 chance to die every round totally spent in contact with a hard surface.

**Attacks (1/round)**

<ins>Gust</ins>. An adjacent creature must save or be blown away nearby, fall [prone](/2020/11/10/extra-rules/#conditions), and take damage (XD4) on impact.

<ins>Vortex</ins>. The elemental sucks all surrounding objects in. If they fail a save, each adjacent creature has the first 1D4 objects of their inventory stolen.

<ins>Create Wind</ins> (X/day). The elemental creates strong winds in a 20' cube which lasts X minutes. In that zone, moving is harder and missiles inflict half damage.

<br>

---

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** : Arcane Maestrom <span style="display: inline-block; width:30px"></span>
**Desire** : Fly & Move things

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;">When you roll this monster on your encounter table. Most of them are hints the monster is nearby.</p>

<button onclick="generateMood()">Generate What The Monster Is Doing</button>
<p id="MoodResult" style="font-style: italic;">If the party meets this monster, what is it doing?</p>
<script src="/scripts/generateMood.js"></script>

---

## So, You Have Captured An Air Elemental?

New carousing activities!

<details markdown="1">
<summary style="font-weight: bold;">Bind the Elemental Creature</summary>
If you have captured this elemental monster, you can spend the equivalent of 3 bags of gold in a magical laboratory between two adventures to bind it to your soul. If you do so, you ...

- You gain X [Doom Points](/list/spell-catastrophe) (roll for Catastrophe); 
- You gain 1 [Spell Die](/spells/);
- Roll a D6, you <span class="tooltip" data-tooltip="Permanent mutations take an inventory slot">mutate</span> in the following way :

1. Your weight is reduced by 80%.
1. The wind is forever against you.
1. You conduct electricity.
1. Your clothes are always bellowing.
1. You hover 1 cm above the ground.
1. You can change one word from a class ability you have or a spell you know to *Air*.

If you roll a Catastrophe, the elemental is released and hostile, and you lose the Spell Dice.
</details>

<details markdown="1">
<summary style="font-weight: bold;">Conjure the Elemental Creature</summary>
If you have befriended or bound this monster, you can spend the equivalent of 2 bags of gold in a wizard library between two adventures to learn the following spell:

**Conjure Air Elemental** <br>
**R**: 30'  <span style="display: inline-block; width:30px"></span> **D**: [dice] x 10 minutes

You summon a 1D4 HD air elemental. You may control it if it has [dice] HD or less with concentration, but otherwise the standard reaction roll and negotiating procedures apply. If a particular true name is known, it may be intoned during the casting of this spell and the named elemental will come instead.

</details>

 
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
  // ENCOUNTER GENERATOR SCRIPT
    $(document).ready(function() {
      $("#generate-btn").click(function() {
        // define the specific value to search for in column 0
        var searchValue = "0003"; // change this to the actual value you need

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
