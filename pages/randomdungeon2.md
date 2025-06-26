<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Dungeon Generator</title>
    <script src="/scripts/randomwords.js"></script> 

  </head>
  <body>
    <h1>Random Dungeon Generator</h1>
 
     <!-- Dropdown Menu -->
    <label for="dropdown">Select Biome I:</label>
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

        <label for="dropdown">and Biome II:</label>
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

<script>
    $(document).ready(function() {
        $("#generateBtn").click(function() {
            var selectedValue1 = $("#climate1").val(); // Get the selected value from climate1
            var selectedValue2 = $("#climate2").val(); // Get the selected value from climate2

            if (selectedValue1 || selectedValue2) {
                // Load the CSV file
                $.get("/CSV/Monster - Index2.csv", function(data) {
                    // Parse the CSV data
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

                                if (columnIndex !== -1) { // Ensure the column exists
                                    // Filter the rows
                                    results.data.forEach(function(row) {
                                        if (row[selectedValue] === "TRUE") { // Check if the cell in the selected column has "TRUE"
                                            filteredValues.push(row[Object.keys(row)[0]]); // Add the value from the first column
                                        }
                                    });

                                    // Randomly select 3 unique values
                                    var selectedValues = [];
                                    while (selectedValues.length < 3 && filteredValues.length > 0) {
                                        var randomIndex = Math.floor(Math.random() * filteredValues.length);
                                        selectedValues.push(filteredValues.splice(randomIndex, 1)[0]);
                                    }

                                    return selectedValues;
                                } else {
                                    return ["No matching column found for the selected climate."];
                                }
                            }

                            if (selectedValue1) {
                                uniqueRandomValues1 = getRandomValues(selectedValue1);
                            }
                            if (selectedValue2) {
                                uniqueRandomValues2 = getRandomValues(selectedValue2);
                            }

                            // Combine the values from both climates
                            var allGeneratedValues = uniqueRandomValues1.concat(uniqueRandomValues2);

                            // Generate Dungeon Features (each from a different random monster)
                            var dungeonFeatures = "<br><strong>Dungeon Features</strong><br>";
                            var featureIndices = [32, 33, 34, 35]; // AG to AJ

                            featureIndices.forEach(function(index) {
                                var randomMonster = allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)];
    
                                results.data.forEach(function(row) {
                                    if (row[Object.keys(row)[0]] === randomMonster) {
                                        var featureLabel = results.meta.fields[index];
                                        var featureContent = row[featureLabel] || "Unknown";
                                        dungeonFeatures += featureContent + "<br>";
                                    }
                                });
                            });
                          
                            // Generate the encounter table
                            allGeneratedValues.forEach(function(value) {
                                results.data.forEach(function(row) {
                                    if (row[Object.keys(row)[0]] === value) { // Check if the first column matches the generated value
                                        var randomIndex = Math.floor(Math.random() * (31 - 26 + 1)) + 26; // columns Z (26) to AE (31)
                                        var randomField = results.meta.fields[randomIndex]; // get field name
                                        var randomText = row[randomField] || "Unknown";
                                        var omen = row["OMEN"] || "No omen";
                                        encounterTable.push(randomText + " / omen: " + omen);                 
                                                                    }
                                });
                            });

                            // Generate Dungeon Rooms content
                         function generateDungeonRoom() {
    let roomContent = "";

    // Step 1: Main Room Feature
    let primaryRowKey = allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)];
    let primaryRow = results.data.find(r => r[Object.keys(r)[0]] === primaryRowKey);

    const featureCols = [36, 39, 42, 45, 48, 51]; // AK, AN, AQ, AT, AW, AZ
    const featureColIndex = featureCols[Math.floor(Math.random() * featureCols.length)];
    const featureLabel = results.meta.fields[featureColIndex];
    const featureContent = primaryRow[featureLabel] || "Unknown";

    roomContent += "<b><u>" + featureContent + "</u></b><br>";

    // Step 2: Size and two adjacent columns
    const sizeOptions = ["Small", "Medium", "Large"];
    const size = sizeOptions[Math.floor(Math.random() * sizeOptions.length)];
    const nextCol1 = results.meta.fields[featureColIndex + 1] || "";
    const nextCol2 = results.meta.fields[featureColIndex + 2] || "";
    roomContent += size + " " + (primaryRow[nextCol1] || "") + " - " + (primaryRow[nextCol2] || "") + "<br><br>";

    // Step 3: Two from BC–BF (53–56), then 3 from BC–BF (2x) and BG–BI (1x) from other rows
    const minorCols1 = [53, 54, 55, 56]; // BC to BF
    const minorCols2 = [53, 54, 55, 56]; // another 2 from BC to BF
    const minorCols3 = [57, 58, 59];     // BG to BI

    // From the same row
    for (let i = 0; i < 2; i++) {
        const col = results.meta.fields[minorCols1[Math.floor(Math.random() * minorCols1.length)]];
        roomContent += (primaryRow[col] || "") + " ";
    }

    // From other rows
    for (let i = 0; i < 2; i++) {
        let row = results.data.find(r => r[Object.keys(r)[0]] === allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)]);
        const col = results.meta.fields[minorCols2[Math.floor(Math.random() * minorCols2.length)]];
        roomContent += (row[col] || "") + " ";
    }

    let otherRow = results.data.find(r => r[Object.keys(r)[0]] === allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)]);
    const col3 = results.meta.fields[minorCols3[Math.floor(Math.random() * minorCols3.length)]];
    roomContent += (otherRow[col3] || "") + "<br><br>";

    // Step 4: 50% chance Denizens
    if (Math.random() < 0.5) {
        const denizenRow = results.data.find(r => r[Object.keys(r)[0]] === allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)]);
        const denizenCol = results.meta.fields[60 + Math.floor(Math.random() * 2)]; // BM (60), BN (61)
        roomContent += "<u>Denizens:</u> " + (denizenRow[denizenCol] || "");

        // 10% chance to add BO (62)
        if (Math.random() < 0.1) {
            const boRow = results.data.find(r => r[Object.keys(r)[0]] === allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)]);
            roomContent += " " + (boRow["BO"] || "");
        }

        roomContent += "<br><br>";
    }

    // Step 5: 33% chance Loot
    if (Math.random() < 0.67) {
        roomContent += "<u>Loot:</u> ";

        const lootIndices = [63, 64, 65]; // BJ, BK, BL
        const loot1Row = results.data.find(r => r[Object.keys(r)[0]] === allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)]);
        roomContent += (loot1Row[results.meta.fields[lootIndices[Math.floor(Math.random() * lootIndices.length)]]] || "");

        // 15% chance for 2nd and 3rd loot items
        for (let i = 0; i < 2; i++) {
            if (Math.random() < 0.15) {
                const extraLootRow = results.data.find(r => r[Object.keys(r)[0]] === allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)]);
                const lootCol = results.meta.fields[lootIndices[Math.floor(Math.random() * lootIndices.length)]];
                roomContent += ", " + (extraLootRow[lootCol] || "");
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
