---
layout: post
tags: monster npcclass arctic desert forest rocky jungle mountain plains swamp city sea astral
permalink: /monsters/bounty-hunter
title: Bounty Hunter
---

**Clever Rivals.** Bounty hunters roam the world to settle scores for someone else. They are often seen with _[Goons](/monsters/bandits)_ and other [Humanoids](/list/monsters-humanoid).

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **Hit Points:** 13 | **Armor:** 2  |
| **Hit it:** hard | **Dodge it:** hard |
| **Movement:** normal      | **Size:** medium

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

A bounty hunter **can** can track and hide its tracks very well.

**Attacks (1/round)**

<ins>Deadly Strike</ins>. The bounty hunter makes a melee attack (1D6 dmg, doubled if the targed is incapacitated).

<ins>Swift Daggers</ins>. The bounty hunter makes a ranged attack (1D6 dmg).

<ins>Manacles</ins>. The bounty hunter a melee attack, on a hit the target cannot use its feet or its hands.

<br>
<details markdown="1">
<summary style="font-weight: bold;">Loot It</summary>
Each bounty hunter carries two manacles, its armor and weapons, and ... (roll 3 times)
 
1. Nothing
2. Nothing
3. A bounty notice.
4. A flask of strong alcohol.
5. A rope.
6. A purse full of silver coins.
   
</details>
<details markdown="1">
<summary style="font-weight: bold;">Play As One</summary>
The [Fighter](/class/fighter) character class might interest you.
</details>

<br>

---

## **20 Bounty Hunters**

Add flavour to your bounty hunters with this selection of npcs from the [Baldur's Gate Hexcrawl](/2024/12/31/BGHex/).

<details markdown="1">
<summary><b>1. Vax and Zal</b>. "<i>The fastest dart thrower that has ever walked</i>".</summary>
Two cocky rugged men in dirty chain mails and leather caps. Some missing teeth.

**Vax:**

<ins>Halberd Herding.</ins> Vax makes a melee attack with reach (1D8 damage). Hit or not, the target cannot move past him for a turn.

<ins>Potion of Healing (x2).</ins> Vax drinks a potion a heals 1D8 HP.

**Zal:**

<ins>Flurry of Darts.</ins> Zal makes three ranged attacks (1D4) with darts, which is made possible because of his magical bracers.
</details>

<br>

<details markdown="1">
<summary><b>2. Neira</b>. "<i>Maybe a touch unladylike</i>".</summary>
A priestress of the hunt. She bears metal claws and a white scarf on her eyes. She **can** see in the dark because of it, but it needs to consume one soul per day.
 
<ins>Spellcasting.</ins> Summon Hounds, Longstrider, Pass Without Trace, Illusory Terrain.

</details>

<details markdown="1">
<summary><b>2. Neira</b>. "<i>Maybe a touch unladylike</i>".</summary>
A priestress of the hunt. She bears metal claws and a white scarf on her eyes. She **can** see in the dark because of it, but it needs to consume one soul per day.
 
<ins>Spellcasting.</ins> Summon Hounds, Longstrider, Pass Without Trace, Illusory Terrain.

</details>

<br>

---

## The Lair

**Number** : 1 with 1D6 _[Goons](/monsters/bandits)_ <span style="display: inline-block; width:30px"></span>
**Lair** : A tavern <span style="display: inline-block; width:30px"></span>
**Desire** : Collect a bounty

<button id="room-btn">Generate Random Room</button>
<p id="RoomResult">A basic dungeon thematic room.</p>

<button id="generate-btn">Generate Random Omen</button>
<p id="RoamResult">To fill a dungeon room.</p>

<button onclick="generateMood()">Generate Random Action</button>
<p id="MoodResult">To give purpose to the creature.</p>
<script src="/scripts/generateMood.js"></script>

<br>

---

 <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $(document).ready(function() {
        function generateResult(buttonId, resultId, columnRangeStart, columnRangeEnd) {
          $(buttonId).click(function() {
            var searchValue = "0035"; // Change this to the actual value you need

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
