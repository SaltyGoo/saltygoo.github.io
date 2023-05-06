---
layout: post
tags: monster elemental greater lesser desert forest plains jungle mountain rocky underdark magical earth astral
permalink: /monsters/elemental-earth
title: Elemental, Earth
---

##### Monster from medieval mythology.

_Imagine earth moving and shaping itself as if it had its own will._

Sentient earth. An earth elemental.

Air Elementals are straightforward and methodical. They value patience and humility and communicate in tremors and groans.
.
<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **HD** X | **Armor:** 6  |
| **Hit it:** easy | **Dodge it:** normal |
| **Movement:** slow  | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature is living earth and is thus only affected by things that would affect earth. It has a 1/6 chance to collapse every round totally spent not in contact with a hard surface. It can **shape earth** at will.

**Attacks (1/round)**

<ins>Slam</ins>. The elemental makes a melee attack (XD4 damage). It inflicts double damage to immobile targets.

<ins>Sink</ins>. Until the end of its next turn, the elemental or an adjacent creature treats earth as water.

<ins>Create Rock</ins> (X/day). The elemental creates a X' boulder which it can throw as a ranged attack (XD4 damage). It inflicts double damage to immobile targets.

<br>

---

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** :  Ever-shifting rocks <span style="display: inline-block; width:30px"></span>
**Desire** : Sleep & Flatten things

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;">When you roll this monster on your encounter table. Most of them are hints the monster is nearby.</p>

<button onclick="generateMood()">Generate What The Monster Is Doing</button>
<p id="MoodResult" style="font-style: italic;">If the party meets this monster, what is it doing?</p>
<script src="/scripts/generateMood.js"></script>

---

## So, You Have Captured An Earth Elemental?

New carousing activities!

<details markdown="1">
<summary style="font-weight: bold;">Bind the Elemental Creature</summary>
If you have captured this elemental monster, you can spend the equivalent of 3 bags of gold in a magical laboratory between two adventures to bind it to your soul. If you do so, you ...

- You gain X [Doom Points](/list/spell-catastrophe) (roll for Catastrophe); 
- You gain 1 [Spell Die](/spells/);
- Roll a D6, you <span class="tooltip" data-tooltip="Permanent mutations take an inventory slot">mutate</span> in the following way :

1. Your weight doubles.
1. The ground is against you.
1. You attract lightning.
1. You are magnetic.
1. You have +1 armor.
1. You can change one word from a class ability you have or a spell you know to *Earth*.

If you roll a Catastrophe, the elemental is released and hostile, and you lose the Spell Dice.
</details>

<details markdown="1">
<summary style="font-weight: bold;">Conjure the Elemental Creature</summary>
If you have befriended or bound this monster, you can spend the equivalent of 2 bags of gold in a wizard library between two adventures to learn the following spell:

**Conjure Air Elemental** <br>
**R**: 30'  <span style="display: inline-block; width:30px"></span> **D**: [dice] x 10 minutes

You summon a 1D4 HD earth elemental. You may control it if it has [dice] HD or less with concentration, but otherwise the standard reaction roll and negotiating procedures apply. If a particular true name is known, it may be intoned during the casting of this spell and the named elemental will come instead.

</details>

 
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
  // ENCOUNTER GENERATOR SCRIPT
    $(document).ready(function() {
      $("#generate-btn").click(function() {
        // define the specific value to search for in column 0
        var searchValue = "0015"; // change this to the actual value you need

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

<details markdown="1">
<summary>Binding the Elemental</summary>
 
You gain a [Spell Dice](https://saltygoo.github.io/class/magic-user#spells), one Doom Point and ...

1. ... your weight doubles.
1. ... the ground is against you.
1. ... you attract lightning.
1. ... you are magnetic.
1. ... you have +1 armor.
1. ... the spell word earth.  

If you roll a catastrophe, the elemental is released.

</details>
