<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Dungeon Generator</title>
    <script src="/scripts/randomwords.js"></script> 

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

                            // ... leave rest of your code unchanged ...
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
