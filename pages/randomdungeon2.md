<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Dungeon Generator</title>
  </head>
  <body>

<h1>Random Dungeon Generator</h1>
 
     <!-- Dropdown Menu -->
<label for="climate1">Select Biome I:</label>
<select id="climate1">
        <option value="Arctic">Cold</option>
        <option value="Desert">Desert</option>
        <option value="Wood">Forest</option>
        <option value="Hills">Barren</option>
        <option value="Jungle">Tropical</option>
        <option value="Mountain">Mountain</option>
        <option value="Plains">Plains</option>
        <option value="Swamp">Swamp</option>
        <option value="City">Urban</option>
        <option value="Sea">Marine</option>
        <option value="Cave">Underground</option>
        <option value="Astral">Astral</option>
        <option value="Chaos">Eldritch</option>
        <option value="Death">Undead</option>
        <option value="Law">Temple</option>
        <option value="Fey">Fairy</option>
        <option value="Magic">Wizard</option>
        <option value="Air">Elemental Air</option>
        <option value="Earth">Elemental Earth</option>
        <option value="Fire">Elemental Fire</option>
        <option value="Water">Elemental Water</option>																	
    </select>
    
      <label for="climate2">and Biome II:</label>
      <select id="climate2">
        <option value="Arctic">Cold</option>
        <option value="Desert">Desert</option>
        <option value="Wood">Forest</option>
        <option value="Hills">Barren</option>
        <option value="Jungle">Tropical</option>
        <option value="Mountain">Mountain</option>
        <option value="Plains">Plains</option>
        <option value="Swamp">Swamp</option>
        <option value="City">Urban</option>
        <option value="Sea">Marine</option>
        <option value="Cave">Underground</option>
        <option value="Astral">Astral</option>
        <option value="Chaos">Eldritch</option>
        <option value="Death">Undead</option>
        <option value="Law">Temple</option>
        <option value="Fey">Fairy</option>
        <option value="Magic">Wizard</option>
        <option value="Air">Elemental Air</option>
        <option value="Earth">Elemental Earth</option>
        <option value="Fire">Elemental Fire</option>
        <option value="Water">Elemental Water</option>																	
    </select>

<br><br>

    <!-- Generate Button -->
    <button id="generateBtn">Generate</button>

    <!-- Result Display -->
    <div id="result"></div>

    <!-- jQuery library -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- PapaParse library (for parsing CSV) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

<script src="/scripts/randomwords.js"></script> 

<script>
    $(document).ready(function() {
        $("#generateBtn").click(function() {
            var selectedValue1 = $("#climate1").val();
            var selectedValue2 = $("#climate2").val();
            console.log("Selected Climate 1:", selectedValue1);
            console.log("Selected Climate 2:", selectedValue2);

            if (selectedValue1 || selectedValue2) {
                $.get("/CSV/Monster - Index2.csv", function(data) {
                    Papa.parse(data, {
                        header: true,
                        complete: function(results) {
                            var uniqueRandomValues1 = [];
                            var uniqueRandomValues2 = [];
                            var encounterTable = [];
                            var dungeonRoomsContent = "";

                            function getRandomValues(selectedValue) {
                                var filteredValues = [];
                                var columnIndex = results.meta.fields.indexOf(selectedValue);
                                console.log("Column index for", selectedValue, ":", columnIndex);

                                if (columnIndex !== -1) {
                                    results.data.forEach(function(row) {
                                        if (row[selectedValue] === "TRUE") {
                                            filteredValues.push(row[Object.keys(row)[0]]);
                                        }
                                    });
                                    console.log("Filtered Values for", selectedValue, ":", filteredValues);

                                    var selectedValues = [];
                                    while (selectedValues.length < 3 && filteredValues.length > 0) {
                                        var randomIndex = Math.floor(Math.random() * filteredValues.length);
                                        selectedValues.push(filteredValues.splice(randomIndex, 1)[0]);
                                    }
                                    console.log("Selected Values for", selectedValue, ":", selectedValues);
                                    return selectedValues;
                                } else {
                                    return ["No matching column found for the selected climate."];
                                }
                            }

                            if (selectedValue1) uniqueRandomValues1 = getRandomValues(selectedValue1);
                            if (selectedValue2) uniqueRandomValues2 = getRandomValues(selectedValue2);

                            var allGeneratedValues = uniqueRandomValues1.concat(uniqueRandomValues2);
                            console.log("All Generated Values:", allGeneratedValues);

                            function getRandomRowFromPool(pool, data) {
                                const tries = 10;
                                for (let i = 0; i < tries; i++) {
                                    const key = pool[Math.floor(Math.random() * pool.length)];
                                    const row = data.find(r => r[Object.keys(r)[0]] === key);
                                    console.log("Trying to fetch row for:", key, "Found:", !!row);
                                    if (row) return row;
                                }
                                console.warn("No valid row found after 10 tries.");
                                return null;
                            }
                          
                            // Generate Dungeon Features (each from a different random monster)
                            var dungeonFeatures = "<br><strong>General Dungeon Features</strong><br>";
                            var featureIndices = [32, 33, 34, 35]; // AG to AJ

                            featureIndices.forEach(function(index) {
                                var randomMonster = allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)];
    
                                results.data.forEach(function(row) {
                                    if (row[Object.keys(row)[0]] === randomMonster) {
                                        var featureLabel = results.meta.fields[index];
                                        var featureContent = row[featureLabel] || "Unknown";
                                        dungeonFeatures += featureContent + " ";
                                    }
                                });
                            });
                          
                            // Generate the encounter table
                            allGeneratedValues.forEach(function(value) {
                                results.data.forEach(function(row) {
                                    if (row[Object.keys(row)[0]] === value) { // Check if the first column matches the generated value
                                       var randomIndex = Math.floor(Math.random() * (30 - 25 + 1)) + 25; // 25 = Z, 30 = AE
                                        var randomField = results.meta.fields[randomIndex]; // get field name
                                        var randomText = row[randomField] || "Unknown";
                                        var omen = row["OMEN"] || "No omen";
                                        encounterTable.push("<b>" + randomText + " </b><br><i>OMEN: " + omen + </i>);                 
                                                                    }
                                });
                            });

                            // Generate Dungeon Rooms content
                   function generateDungeonRoom() {
    let roomContent = "";

    // Step 1: Main Room Feature
    const primaryRow = getRandomRowFromPool(allGeneratedValues, results.data);
    console.log("Primary row:", primaryRow);
    if (!primaryRow) {
        console.warn("[Room generation failed] No valid primary row.");
        return "<i>[Room generation failed]</i><br><br>";
    }

    const featureCols = [36, 39, 42, 45, 48, 51]; // AK, AN, AQ, AT, AW, AZ
    const featureColIndex = featureCols[Math.floor(Math.random() * featureCols.length)];
    const featureLabel = results.meta.fields[featureColIndex];
    const featureContent = primaryRow[featureLabel] || "Unknown";
    console.log("Main Room Feature:", featureLabel, "=", featureContent);

    roomContent += "<b><u>" + featureContent + "</u></b><br>";

    // Step 2: Size and two adjacent columns
    const sizeOptions = ["Small", "Medium", "Large"];
    const size = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];
    const nextCol1 = results.meta.fields[featureColIndex + 1] || "";
    const nextCol2 = results.meta.fields[featureColIndex + 2] || "";
    console.log("Room size:", size, "| Next cols:", nextCol1, primaryRow[nextCol1], "|", nextCol2, primaryRow[nextCol2]);

    roomContent += "<i>" + size + " " + (primaryRow[nextCol1] || "") + " " + (primaryRow[nextCol2] || "") + "</i><br><br>";

    // Step 3: Minor room details
    const minorCols1 = [54, 55, 56, 57]; // BC to BF
    const minorCols2 = [54, 55, 56, 57];
    const minorCols3 = [58, 59, 60];     // BG to BI

    console.log("Minor Features (same row):");
      const colSame = results.meta.fields[minorCols1[Math.floor(Math.random() * minorCols1.length)]];
      console.log("→", colSame, "=", primaryRow[colSame]);
      roomContent += (primaryRow[colSame] || "") + " ";

      console.log("Minor Features (other rows):");
      const otherRow = getRandomRowFromPool(allGeneratedValues, results.data);
      const colOther = results.meta.fields[minorCols2[Math.floor(Math.random() * minorCols2.length)]];
      console.log("→ Other row:", colOther, "=", otherRow?.[colOther]);
      if (otherRow) {
          roomContent += (otherRow[colOther] || "") + " ";
      }

      const finalRow = getRandomRowFromPool(allGeneratedValues, results.data);
      const col3 = results.meta.fields[minorCols3[Math.floor(Math.random() * minorCols3.length)]];
      console.log("→ Final minor feature:", col3, "=", finalRow?.[col3]);
      if (finalRow) {
    roomContent += (finalRow[col3] || "");
}

    roomContent += "<br><br>";

// Step 4: Denizens (50% chance)
if (Math.random() < 0.5) {
    const denizenRow = getRandomRowFromPool(allGeneratedValues, results.data);
    if (denizenRow) {
        const encounterOptions = ["Encounter 1", "Encounter 2"];
        const randomEncounter = encounterOptions[Math.floor(Math.random() * encounterOptions.length)];
        console.log("Denizen:", randomEncounter, "=", denizenRow[randomEncounter]);

        roomContent += "<u>Denizens:</u> " + (denizenRow[randomEncounter] || "");

        if (Math.random() < 0.1) {
            const friendRow = getRandomRowFromPool(allGeneratedValues, results.data);
            console.log("→ Friend:", friendRow?.["Friend"]);
            if (friendRow) {
                roomContent += " " + (friendRow["Friend"] || "");
            }
        }

        roomContent += "<br><br>";
    } else {
        console.warn("Skipped Denizens (no valid row)");
    }
}

    // Step 5: Loot (67% chance)
    if (Math.random() < 0.67) {
        roomContent += "<u>Loot:</u> ";
        const lootIndices = [61, 62, 63]; // BJ, BK, BL

        const loot1Row = getRandomRowFromPool(allGeneratedValues, results.data);
        if (loot1Row) {
            const lootCol = results.meta.fields[lootIndices[Math.floor(Math.random() * lootIndices.length)]];
            console.log("Loot 1:", lootCol, "=", loot1Row[lootCol]);
            roomContent += (loot1Row[lootCol] || "");
        }

        for (let i = 0; i < 2; i++) {
            if (Math.random() < 0.15) {
                const extraLootRow = getRandomRowFromPool(allGeneratedValues, results.data);
                if (extraLootRow) {
                    const lootCol = results.meta.fields[lootIndices[Math.floor(Math.random() * lootIndices.length)]];
                    console.log("Extra Loot", i + 2, ":", lootCol, "=", extraLootRow[lootCol]);
                    roomContent += " " + (extraLootRow[lootCol] || "");
                }
            }
        }

        roomContent += "<br><br>";
    }

    return roomContent;
}


                            // Repeat Dungeon Room generation 6 times
                            for (var i = 0; i < 6; i++) {
                                dungeonRoomsContent += generateDungeonRoom();
                            }

                            // Display the encounter table and dungeon rooms content
                             var encounterContent = dungeonFeatures 
                                 + "<br><strong>Monster Encounter Table</strong><br><ol><li>" 
                                 + encounterTable.join("</li><li>") 
                                 + "</li></ol><br><br><strong>Dungeon Rooms</strong><br><br>" 
                                 + dungeonRoomsContent;

                            // Apply replacements before rendering
                            encounterContent = applyReplacements(encounterContent);

                            $("#result").html(encounterContent);
                        }
                    });
                });
            } else {
                $("#result").html("Please select options for both climates.");
            }
        });
    });
</script>
   
  </body>
</html>
