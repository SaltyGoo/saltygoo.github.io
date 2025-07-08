---
layout: post
tags: monster elemental greater lesser arctic desert plains mountain sea magical air astral
permalink: /monsters/elemental-air
title: Elemental, Air
---

<img align="right" width=200px  src="/images/0003_AirElemental.png"  style="border:0px solid black">

##### Illustration by Salty Goo. Monster from medieval mythology.

**Sentient wind.** Air Elementals are fickle and tempestuous. They value freedom of spirit and laissez-faire and communicate in gusts and howls. Sometimes seen summoned by a _[wizard](/monsters/wizard)_. An air elemental.

_Imagine wind moving and shaping itself as if it had its own will._

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 4*X | **Armor:** 0 |
| **Hit it:** hard   | **Dodge it:** normal  |
| **Move:** Fly fast     |  **Size:** vary | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature is living wind and is thus **only affected by** things that would affect air currents. It has a 1/6 chance to die every round totally spent in contact with a hard surface. It can **shape wind**  at will.

**Attacks (1/round)**

<ins>Gust</ins>. An adjacent creature must save or be blown away nearby, fall [prone](/2020/11/09/base-rules/), and take damage (XD4) on impact.

<ins>Vortex</ins>. The elemental sucks all surrounding objects in. If they fail a save, each adjacent creature has the first 1D4 objects of their inventory stolen.

<ins>Create Wind</ins> (X/day). The elemental creates strong winds in a 20' cube which lasts X minutes. In that zone, moving is harder and missiles inflict half damage.

<br>

---

## Encounter

**Number** : 1 <span style="display: inline-block; width:30px"></span>
**Lair** : Arcane Maestrom <span style="display: inline-block; width:30px"></span>
**Desire** : Fly & Move things

<br>
<details markdown="1">
<summary style="font-weight: bold;">Harness Its Energy</summary>
If you have captured this elemental, you can spend the equivalent of 3 [bags of gold](/2024/06/26/currency/) in a magical laboratory between two adventures to bind it to your soul. If you do so, you ...

- You gain X [Doom Points](/list/spell-catastrophe) (roll for Catastrophe); 
- You gain 1 [Spell Die](/spells/) and learn the spell _Conjure Air Elemental_ (below);
- Roll a D6, you <span class="tooltip" data-tooltip="Permanent mutations take an inventory slot">mutate</span> in the following way :

1. Your weight is reduced by 80%.
1. The wind is forever against you.
1. You conduct electricity.
1. Your clothes are always bellowing.
1. You hover 1 cm above the ground.
1. You can change one word from a class ability you have or a spell you know to *Air*.

If you roll a Catastrophe, the elemental is released and hostile, and you lose the Spell Dice.
</details>

---

**Conjure Air Elemental** <br>
**R**: 30'  <span style="display: inline-block; width:30px"></span> **D**: [dice] x 10 minutes

You summon a 1D4 HD air elemental. You may control it if it has [dice] HD or less with concentration, but otherwise the standard reaction roll and negotiating procedures apply. If a particular true name is known, it may be intoned during the casting of this spell and the named elemental will come instead.

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $(document).ready(function() {
        function generateResult(buttonId, resultId, columnRangeStart, columnRangeEnd) {
          $(buttonId).click(function() {
            var searchValue = "0003"; // Change this to the actual value you need

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
