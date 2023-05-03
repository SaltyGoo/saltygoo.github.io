---
layout: post
tags: monster elemental lesser  swamp underdark magical earth water astral
permalink: /monsters/mephit-ooze
title: Mephit, Mud
---

<img align="right" height=200px  src="/images/0004_MudMephit.png"  style="border:0px solid black">

##### Illustration by SaltyGoo. Monster from ancient roman mythology.

_Imagine if a little grotesque gargoyle was made of ever dripping mud._

Earth and water animated by a spark of mischief. Small elemental earth and water.

Mud Mephits have no conception of pride, or social cues. They will debase themselves in the most pathetic way to get what they want. 

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| 1 **HP** | **Armor:** 3  |
| **Hit it:** normal | **Dodge it:** normal |
| **Movement:** normal & swim normal     | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature is living mud and is thus only affected by things that would affect wet dirt. Its semi-liquid state makes it immune to slashing and piercing damage. It can only survive 1 hour without water.

**Attacks (1/round)**

<ins>Sticky Touch</ins>. The mephit sticks itself to the target's face, [choking it](/2020/11/10/extra-rules/#conditions). Attacks that miss the mephit have 1/2 chance to hit the grappled target. Damage resisted by the mephit is transferred to the grappled target.

<ins>Spit Ooze</ins>. The mephit makes a ranged attack. On a hit, roll a D6, that body part is glued: 1) mouth ([cant breathe](/2020/11/10/extra-rules/#conditions)); 2-3) a leg (cant move); 4-5) an arm (stuck to an adjacent surface or creature); 6) eyes ([blinded](/2020/11/10/extra-rules/#conditions)). Reroll if the limb is already glued.

<ins>Burst of Ooze</ins>. The mephit explodes, killing itself and spitting ooze in all direction. Automatic when the mephit dies.

<br>

---

**Number** : 1D8 <span style="display: inline-block; width:30px"></span>
**Lair** : Mud Bath <span style="display: inline-block; width:30px"></span>
**Desire** : Pity & Other's Demise

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

1. You stink. Creatures who value hygiene will never have a good first impression of you.
1. Your words are replaced by tiny mud mephits that mime them before being snuffed.
1. Your teeth are jelly. No solid food again. 
1. Each time you rest, one thing near you is stolen by a mephit and brought to the plane of ooze.
1. You must spend time and at least a bag of gold on mud baths between adventure.
1. You can change one word from a class ability you have or a spell you know to *Mud*.

If you roll a Catastrophe, the elemental is released and hostile, and you lose the Spell Dice.
</details>

<details markdown="1">
<summary style="font-weight: bold;">Conjure the Elemental Creature</summary>
If you have befriended or bound this monster, you can spend the equivalent of 2 bags of gold in a wizard library between two adventures to learn the following spell:

**Conjure Mud Mephit** <br>
R: self 

When casting the spell you must prepare a message with up to [sum] words. [sum] mud mephits are then summoned and will each deliver one word of your message to whoever it is intended to, across any plane. The message will be delivered in the meekest way possible, and be repeated relentlessly until the target accepts, or the mephits are killed.

</details>

 
 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
  // ENCOUNTER GENERATOR SCRIPT
    $(document).ready(function() {
      $("#generate-btn").click(function() {
        // define the specific value to search for in column 0
        var searchValue = "0004"; // change this to the actual value you need

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
