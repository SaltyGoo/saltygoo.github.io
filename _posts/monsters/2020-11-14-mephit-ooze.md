---
layout: post
tags: monster elemental lesser  swamp underdark magical earth water astral
permalink: /monsters/mephit-ooze
title: Mephit, Mud
---

<img align="right" height=200px  src="/images/0004_MudMephit.png"  style="border:0px solid black">

##### Illustration by SaltyGoo. Monster from ancient roman mythology.

**Sentient mud.** Mud Mephits have no conception of pride, or social cues. They will debase themselves in the most pathetic way to get what they want. Sometimes serving an _[earth elemental](/monsters/elemental-earth)_ or a  _[water elemental](/monsters/elemental-water)_. Is itself a type of small earth and water elemental.

_Imagine if a little grotesque gargoyle was made of ever dripping mud._


<br>

---


|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 1 | **Armor:** 3 |
| **Hit it:** normal   | **Dodge it:** normal  |
| **Move:** normal, swim normal  |  **Size:** small | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature is a living pile of gravel and is thus **only affected** by things that would affect wet dirt. Its semi-liquid state makes it immune to slashing and piercing damage. It can only survive 1 hour without water.

**Attacks (1/round)**

<ins>Sticky Touch</ins>. The mephit sticks itself to the target's face, [choking it](/2020/11/09/base-rules/). Attacks that miss the mephit have 1/2 chance to hit the grappled target. Damage resisted by the mephit is transferred to the grappled target.

<ins>Spit Ooze</ins>. The mephit makes a ranged attack. On a hit, roll a D6, that body part is glued: 1) mouth ([cant breathe](/2020/11/09/base-rules/)); 2-3) a leg (cant move); 4-5) an arm (stuck to an adjacent surface or creature); 6) eyes ([blinded](/2020/11/09/base-rules/)). Reroll if the limb is already glued.

<ins>Burst of Ooze</ins>. The mephit explodes, killing itself and spitting ooze in all direction. Automatic when the mephit dies.

<br>

---

## Encounter

**Number** : 1D8 <span style="display: inline-block; width:30px"></span>
**Lair** : Mud Bath <span style="display: inline-block; width:30px"></span>
**Desire** : Pity & Other's Demise

<br>
<details markdown="1">
<summary style="font-weight: bold;">Harness Its Energy</summary>
If you have captured this elemental, you can spend the equivalent of 1 [bag of gold](/2024/06/26/currency/) in a magical laboratory between two adventures to bind it to your soul. If you do so, you ...

- You gain 1 [Doom Point](/list/spell-catastrophe) (roll for Catastrophe); 
- You gain 1 [Spell Die](/spells/) and learn the spell _Conjure Mud Mephit_ (below);
- Roll a D6, you <span class="tooltip" data-tooltip="Permanent mutations take an inventory slot">mutate</span> in the following way :

1. You stink. Creatures who value hygiene will never have a good first impression of you.
1. Your words are replaced by tiny mud mephits that mime them before being snuffed.
1. Your teeth are jelly. No solid food again. 
1. Each time you rest, one thing near you is stolen by a mephit and brought to the plane of ooze.
1. You must spend time and at least a bag of gold on mud baths between adventure.
1. You can change one word from a class ability you have or a spell you know to *Mud*.

If you roll a Catastrophe, the elemental is released and hostile, and you lose the Spell Dice.
</details>

---

**Conjure Mud Mephit** <br>
R: self 

When casting the spell you must prepare a message with up to [sum] words. [sum] mud mephits are then summoned and will each deliver one word of your message to whoever it is intended to, across any plane. The message will be delivered in the meekest way possible, and be repeated relentlessly until the target accepts, or the mephits are killed.

 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $(document).ready(function() {
        function generateResult(buttonId, resultId, columnRangeStart, columnRangeEnd) {
          $(buttonId).click(function() {
            var searchValue = "0004"; // Change this to the actual value you need

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
