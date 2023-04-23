---
layout: post
tags: monster elemental lesser underdark magical fire astral
permalink: /monsters/mephit-fire
title: Mephit, Flame
---

_Imagine if a flame had the shape of a tiny Italian contortionist._

A flame animated by a spark of mischief. A small fire elemental.

Flame Mephits have no conception of the future, the past or personal boundaries. They are full of immediate, destructive and indulgent desires. 

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| 1 **HP** | **Armor:** 0  |
| **Hit it:** normal | **Dodge it:** normal |
| **Movement:** normal      | 

##### <span class="tooltip" data-tooltip=" Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat (Slow = Easy & Fast = Hard)">→ How to read monster stats</span>

Is a living flame and is thus only affected by things that would affect a fire. It can only survive 10 minutes without oxygen and fuel.

**Attacks (1/round)**

<ins>Touch</ins>. The mephit makes a melee attack (1D4 dmg) and sets the target ablaze.

<ins>Spit Fire</ins>. The mephit makes a ranged attack (1D4 dmg) and sets the target ablaze.

<ins>Burst of Flame</ins>. The mephit explodes, killing itself and setting a small area ablaze (1D4 dmg, save for half).

<br>

---

**Number** : 1D8 <span style="display: inline-block; width:30px"></span>
**Lair** : Fire Pits <span style="display: inline-block; width:30px"></span>
**Diet** : Fuel & Fat

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;"></p>

<button onclick="generateMood()">Generate Standard Monster Need</button>
    <p id="MoodResult" style="font-style: italic;"></p>
    <script src="/scripts/generateMood.js"></script>

<details markdown="1">
<summary>D6 What the Monster Wants</summary>

1. Unsure if they are here to announce a war or a party.
1. To challenge you to a fight, or any another thrilling activity.
1. To clean (burn) the area for the arrival of their fiery master.
1. To hide from their master, as they hate orders.
1. They are newly spawned, they are very curious.
1. Gold or treasures for their master, but nothing flammable.
</details>

<details markdown="1">
<summary>Binding the Elemental</summary>

You gain a [Spell Dice](https://saltygoo.github.io/class/magic-user#spells), one Doom Point and ...

1. ... every flammable item on you burns.
1. ... your words are replaced by 1'' fire mephits that mime them before being snuffed.
1. ... your hair is replaced by flames (they don't burn you).
1. ... each time you rest, one thing on you is stolen by a flame mephit and brought to the plane of fire.
1. ... water burns you.
1. ... the spell word *Flame*.

If you roll a catastrophe, the elemental is released.
</details>

<details markdown="1">
<summary>Conjuring the Elemental</summary>

If you know the spell [Conjure](https://saltygoo.github.io/2020/11/12/conjure/), you can alter it in such a way for a minimum of 1 Spell Dice:

**Conjure Fire Mephit** <br>
R: self 

When casting the spell you must prepare a message with up to [sum] words. [sum] fire mephits are then summoned and will each deliver one word of your message to whoever it is intended to, across any plane. The message will be delivered in the most passionate and destructive way possible.

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

