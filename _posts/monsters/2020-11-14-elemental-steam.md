---
layout: post
tags: monster elemental greater lesser arctic forest jungle mountain swamp sea underdark magical air fire water astral deep
permalink: /monsters/elemental-steam
title: Elemental, Steam
---

**Sentient steam.** Steam Elementals are sassy and falsely relaxed. They love when things are easy and hate when things are complicated, and communicates in hisses and temperature changes. Sometimes seen summoned by a _[wizard](/monsters/wizard)_. A water elemental.

_Imagine vapour moving and shaping itself as if it had its own will._

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 4*X | **Armor:** 0 |
| **Hit it:** normal   | **Dodge it:** normal  |
| **Move:** normal, Swim & Fly normal     |  **Size:** vary | 


##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature is living steam and is thus **only affected** by things that would affect droplets of water. It can only survive 1 hour in a dry environment. It can **shape steam** at will.

**Attacks (1/round)**

<ins>Boiling Jet</ins>. The elemental makes a short-range attack (XD4 dmg) which ignores armor. A character with a shield, however, can reduce the damage by 1D8.

<ins>Temperature control</ins>. Each creature enveloped by the elemental or steam near it takes 1D6 fire or cold damage, which ignores armor.

<ins>Create Steam</ins> (X/day). The elemental creates the equivalent of a 20' cube of steam which lasts X minutes.

<br>
<details markdown="1">
<summary style="font-weight: bold;">Harness Its Energy</summary>
If you have captured this elemental, you can spend the equivalent of 3 [bags of gold](/2024/06/26/currency/) in a magical laboratory between two adventures to bind it to your soul. If you do so, you ...

- You gain X [Doom Points](/list/spell-catastrophe) (roll for Catastrophe); 
- You gain 1 [Spell Die](/spells/) and learn the spell _Conjure Steam Elemental_ (below);
- Roll a D6, you <span class="tooltip" data-tooltip="Permanent mutations take an inventory slot">mutate</span> in the following way :

1. You are always sweaty.
1. Any fog will try to envelop you.
1. You need at least two sources of heat to rest.
1. You leave wet tracks.
1. Your skin becomes semi-transparent.
1. You can change one word from a class ability you have or a spell you know to *Steam*.

If you roll a Catastrophe, the elemental is released and hostile, and you lose the Spell Dice.
</details>

<br>

---

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** : A steam vent <span style="display: inline-block; width:30px"></span>
**Desire** : Frolic & Soak things

<button id="room-btn">Generate Lair Room</button>
<p id="RoomResult">A basic dungeon thematic room.</p>

<button id="generate-btn">Generate Random Omen</button>
<p id="RoamResult">To fill a dungeon room.</p>

<button onclick="generateMood()">Generate Random Action</button>
<p id="MoodResult">What it is doing.</p>
<script src="/scripts/generateMood.js"></script>

---

### Conjure Steam Elemental

**R**: 30'  <span style="display: inline-block; width:30px"></span> **D**: [dice] x 10 minutes

You summon a 1D4 HD steam elemental. You may control it if it has [dice] HD or less with concentration, but otherwise the standard reaction roll and negotiating procedures apply. If a particular true name is known, it may be intoned during the casting of this spell and the named elemental will come instead.

 
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $(document).ready(function() {
        function generateResult(buttonId, resultId, columnRangeStart, columnRangeEnd) {
          $(buttonId).click(function() {
            var searchValue = "0019"; // Change this to the actual value you need

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
