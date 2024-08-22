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
                $.get("/CSV/Monster - Index.csv", function(data) {
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

                            // Generate the encounter table
                            allGeneratedValues.forEach(function(value) {
                                results.data.forEach(function(row) {
                                    if (row[Object.keys(row)[0]] === value) { // Check if the first column matches the generated value
                                        encounterTable.push(row["Link"]); // Add the encounter to the table
                                    }
                                });
                            });

                            // Generate Dungeon Rooms content
                            function generateDungeonRoom() {
                                var roomContent = "";

                                // Randomly select a row and column for the first cell (columns 38-43)
                                var randomRow1 = allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)];
                                results.data.forEach(function(row) {
                                    if (row[Object.keys(row)[0]] === randomRow1) {
                                        var randomColumn1 = Math.floor(Math.random() * (43 - 38 + 1)) + 38;
                                        roomContent += row[results.meta.fields[randomColumn1]] + "<br>";
                                    }
                                });

                                // Randomly select a row and column for the second cell (columns 3-8)
                                var randomRow2 = allGeneratedValues[Math.floor(Math.random() * allGeneratedValues.length)];
                                results.data.forEach(function(row) {
                                    if (row[Object.keys(row)[0]] === randomRow2) {
                                        var randomColumn2 = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
                                        roomContent += row[results.meta.fields[randomColumn2]] + "<br><br>";
                                    }
                                });

                                return roomContent;
                            }

                            // Repeat Dungeon Room generation 6 times
                            for (var i = 0; i < 6; i++) {
                                dungeonRoomsContent += generateDungeonRoom();
                            }

                            // Display the encounter table and dungeon rooms content
                            var encounterContent = "<br><strong>Monster Encounter Table</strong><br><ol><li>" 
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
