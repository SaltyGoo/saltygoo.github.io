---
layout: post
tags: monster beast  desert rocky jungle plains
permalink: /monsters/bird-boltforager
title: Bird, Boltforager
---

##### A monster originating from the [Hot Springs Island](https://shop.swordfishislands.com/the-dark-of-hot-springs-island/) adventure.

_Imagine a big eagle-sized bird with brick-colored plumage. It has a big beak and a bony ridge that protects its head when feeding. It seems covered in dirty orange dust._

A disease-carrying red carrion bird. A beast.

The discordant chorus of huge boltforager flocks is a staple of many hot climates. They harass other creatures indiscriminately at dusk and dawn, when their orange plumage blends in the golden light. They feed on those who fall victim of the parasites they carry. 

<br>

---

|  <span style="display: inline-block; width:250px"></span>  |  |
| -------- | --------|
| **HD** 1 | **Armor:** 0  |
| **Hit it:** normal | **Dodge it:** normal |
| **Movement:** fly fast      | 

##### <span class="tooltip" data-tooltip="Armor = damage reduction · · · Easy/Normal/Hard = roll above 10/15/20 to beat">→ How to read monster stats</span>

This creature can smell a rotting corpse from a mile away.

**Attacks (1/round)**

<ins>Dive Bomb</ins>. If the Boltforager is flying high, it dives down and makes a melee attack (1D6 dmg) to try to impale a victim on its ridge.

<ins>Wing Assault</ins>. The Boltforager makes a melee attack as it flaps its wings frantically and scratches its target (1D4 dmg). If the target is [Wounded](/2020/11/09/base-rules/), it must save or be infected with parasites.

<span class="alchemy">**Boneforager**. Disease. Symptom: gain 1 [wound](/2020/11/09/base-rules/) as the parasite eats your bones. Save every night to avoid adding a cumulative symptom. The wounds cannot be recovered until the disease is removed.</span>

<br>

---

**Number** : 2D6 <span style="display: inline-block; width:30px"></span>
**Lair** : Worm-infested nests full of rotting bones and eggshells. <span style="display: inline-block; width:30px"></span> <br>
**Desire** : Rotting Flesh & Impress Its Mates

<button id="generate-btn">Generate Roaming Monster Event</button>
<p id="RoamResult" style="font-style: italic;">When you roll this monster on your encounter table. Most of them are hints the monster is nearby.</p>

<button onclick="generateMood()">Generate What The Monster Is Doing</button>
<p id="MoodResult" style="font-style: italic;">If the party meets this monster, what is it doing?</p>
<script src="/scripts/generateMood.js"></script>

---

## So, You Are Hunting Boltforagers?

New carousing activities!

<details markdown="1">
<summary style="font-weight: bold;">Tame the Beast</summary>
If you have captured this beast, you can spend the equivalent of 1 bags of gold in food between two adventures to tame it. It is now one of your <span class="tooltip" data-tooltip="You can bring a follower in your adventures if you dedicate a Psyche slot to it."><i>followers</i></span>. Each extra bag of gold spent training the beast teaches it a one-word order. Otherwise, it only acts to eat or in self-defence. 
</details>

<details markdown="1">
<summary style="font-weight: bold;">Craft from Beast Parts</summary>
The boltforager's beak and bony ridge make a solid, easy to carve material. The dust covering it is full of worm eggs and can be of interest to those interested in biological warfare. Its meat is edible, but must be thoroughly cleansed of the parasites.

If you have access to an artisan and a workshop, you can spend loot between two adventures to create something with parts of the beast. The object you craft can be anything mostly made of the provided materials. If you use mundane tools, the result will be mundane; if you spent at least a bag of gold on it, the object will be special; and if you spend the equivalent of a treasure for the tools, it will be magical. Discuss what you want with the referee.
</details>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
  // ENCOUNTER GENERATOR SCRIPT
    $(document).ready(function() {
      $("#generate-btn").click(function() {
        // define the specific value to search for in column 0
        var searchValue = "0008"; // change this to the actual value you need

        // retrieve the CSV file
        $.get("/CSV/Monster - Index.csv", function(data) {
          // split the CSV data by rows and remove the header row
          var rows = data.split("\n").slice(1);

          // filter the rows by the specific value in column 0
          var matchingRows = rows.filter(function(row) {
            var columns = row.split(",");
            return columns[0] === searchValue;
          });
