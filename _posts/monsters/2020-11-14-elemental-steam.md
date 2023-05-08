---
layout: post
tags: monster elemental greater lesser arctic forest jungle mountain swamp sea underdark magical air fire water astral deep
permalink: /monsters/elemental-steam
title: Elemental, Steam
---

_Imagine vapour moving and shaping itself as if it had its own will._

Sentient steam. A water elemental.

Steam Elementals are sassy and falsely relaxed. They love when things are easy and hate when things are complicated, and communicates in hisses and temperature changes.
<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **HD** X | **Armor:** 0  |
| **Hit it:** normal | **Dodge it:** normal |
| **Movement:** normal, Swim & Fly normal   | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature is living steam and is thus only affected by things that would affect droplets of water. It can only survive 1 hour in a dry environment. It can **shape steam** at will.

**Attacks (1/round)**

<ins>Boiling Jet</ins>. The elemental makes a short-range attack (XD4 dmg) which ignores armor. A character with a shield, however, can reduce the damage by 1D8.

<ins>Temperature control</ins>. Each creature enveloped by the elemental or its steam takes 1D6 fire or cold damage, which ignores armor.

<ins>Create Steam</ins> (X/day). The elemental creates the equivalent of a 20' cube of steam which lasts X minutes.

<br>

---

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** : A steam vent <span style="display: inline-block; width:30px"></span>
**Desire** : Frolic & Soak things

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;">When you roll this monster on your encounter table. Most of them are hints the monster is nearby.</p>

<button onclick="generateMood()">Generate What The Monster Is Doing</button>
<p id="MoodResult" style="font-style: italic;">If the party meets this monster, what is it doing?</p>
<script src="/scripts/generateMood.js"></script>

## So, You Have Captured A Steam Elemental?

New carousing activities!

<details markdown="1">
<summary style="font-weight: bold;">Bind the Elemental Creature</summary>
If you have captured this elemental monster, you can spend the equivalent of 3 bags of gold in a magical laboratory between two adventures to bind it to your soul. If you do so, you ...

- You gain X [Doom Points](/list/spell-catastrophe) (roll for Catastrophe); 
- You gain 1 [Spell Die](/spells/);
- Roll a D6, you <span class="tooltip" data-tooltip="Permanent mutations take an inventory slot">mutate</span> in the following way :

1. You are always sweaty.
1. Any fog will try to envelop you.
1. You need at least two sources of heat to rest.
1. You leave wet tracks.
1. Your skin becomes semi-transparent.
1. You can change one word from a class ability you have or a spell you know to *Steam*.

If you roll a Catastrophe, the elemental is released and hostile, and you lose the Spell Dice.
</details>

<details markdown="1">
<summary style="font-weight: bold;">Conjure the Elemental Creature</summary>
If you have befriended or bound this monster, you can spend the equivalent of 2 bags of gold in a wizard library between two adventures to learn the following spell:

**Conjure Steam Elemental** <br>
**R**: 30'  <span style="display: inline-block; width:30px"></span> **D**: [dice] x 10 minutes

You summon a 1D4 HD steam elemental. You may control it if it has [dice] HD or less with concentration, but otherwise the standard reaction roll and negotiating procedures apply. If a particular true name is known, it may be intoned during the casting of this spell and the named elemental will come instead.

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
