---
layout: post
tags: monster elemental lesser underdark magical fire astral
permalink: /monsters/mephit-fire
title: Mephit, Flame
---

<img align="right" width=200px  src="/images/0001_MephitFlame.png"  style="border:0px solid black">

##### Illustration by Salty Goo. Monster from ancient roman mythology.

_Imagine if a tiny, grotesque acrobat was made of pure fire._

A flickering flame animated by a spark of mischief. A small fire elemental.

Flame Mephits have no conception of the future, the past or personal boundaries. They are full of immediate, destructive and indulgent desires. 

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| 1 **HP** | **Armor:** 0  |
| **Hit it:** normal | **Dodge it:** normal |
| **Movement:** normal      | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature is a living flame and is thus only affected by things that would affect a fire. It can only survive 10 minutes without oxygen and fuel.

**Attacks (1/round)**

<ins>Touch</ins>. The mephit makes a melee attack (1D4 dmg) and sets the target ablaze.

<ins>Spit Fire</ins>. The mephit makes a ranged attack (1D4 dmg) and sets the target ablaze.

<ins>Burst of Flame</ins>. The mephit explodes, killing itself and setting a small area ablaze (1D4 dmg, save for half).

<br>

---

**Number** : 1D8 <span style="display: inline-block; width:30px"></span>
**Lair** : Fire Pits <span style="display: inline-block; width:30px"></span>
**Desire** : Fuel & Thrill

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;">When you roll this monster on your encounter table. Most of them are hints the monster is nearby.</p>

<button onclick="generateMood()">Generate What The Monster Is Doing</button>
<p id="MoodResult" style="font-style: italic;">If the party meets this monster, what is it doing?</p>
<script src="/scripts/generateMood.js"></script>

---

## So, You Have Captured A Mephit?

New carousing activities!

<details markdown="1">
<summary style="font-weight: bold;">Bind the Elemental Creature</summary>
If you have captured this elemental monster, you can spend the equivalent of 3 bags of gold in a magical laboratory between two adventures to bind it to your soul. If you do so, you ...

- You gain 2 [Doom Points](/list/spell-catastrophe) (roll for Catastrophe); 
- You gain 1 [Spell Die](/spells/);
- Roll a D6, you <span class="tooltip" data-tooltip="Permanent mutations take an inventory slot">mutate</span> in the following way :

1. Every flammable item currently on you turns into ashes.
1. Your words are replaced by tiny fire mephits that mime them before being snuffed.
1. Your hair becomes flames (it doesn't burn you).
1. Each time you rest, one thing near you is stolen by a mephit and brought to the plane of fire.
1. Water burns you like it was fire.
1. You can change one word from a class ability you have or a spell you know to *Flame*.

If you roll a Catastrophe, the elemental is released and hostile, and you lose the Spell Dice.
</details>

<details markdown="1">
<summary style="font-weight: bold;">Conjure the Elemental Creature</summary>
If you have befriended or bound this monster, you can spend the equivalent of 2 bags of gold in a wizard library between two adventures to learn the following spell:

**Conjure Fire Mephit** <br>
R: self 

When casting the spell you must prepare a message with up to [sum] words. [sum] fire mephits are then summoned and will each deliver one word of your message to whoever it is intended to, across any plane. The message will be delivered in the most passionate and destructive way possible, damaging [dice] things the target owns.

</details>

 
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
  // ENCOUNTER GENERATOR SCRIPT
    $(document).ready(function() {
      $("#generate-btn").click(function() {
        // define the specific value to search for in column 0
        var searchValue = "0001"; // change this to the actual value you need

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
 
