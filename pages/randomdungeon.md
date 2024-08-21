<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Dungeon Generator</title>

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

    <!-- Generate Button -->
    <button id="generateBtn">Generate</button>

    <!-- Result Display -->
    <div id="result"></div>

    <!-- jQuery library -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- PapaParse library (for parsing CSV) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

    <!-- Script to Load CSV and Handle Button Click -->
    <script>
        $(document).ready(function() {
            $("#generateBtn").click(function() {
                var selectedValue = $("#climate1").val(); // Get the selected value

                if (selectedValue) {
                    // Load the CSV file
                    $.get("/CSV/Monster - Index.csv", function(data) {
                        // Parse the CSV data
                        Papa.parse(data, {
                            header: true,
                            complete: function(results) {
                                var filteredRows = results.data.filter(function(row) {
                                    return row[Object.keys(row)[1]].startsWith(selectedValue) && row[Object.keys(row)[2]] === "TRUE";
                                });

                                if (filteredRows.length > 0) {
                                    var selectedValues = [];
                                    for (var i = 0; i < 3 && i < filteredRows.length; i++) {
                                        selectedValues.push(filteredRows[i][Object.keys(filteredRows[i])[0]]);
                                    }

                                    $("#result").html("Generated values: " + selectedValues.join(", "));
                                } else {
                                    $("#result").html("No matching rows found.");
                                }
                            }
                        });
                    });
                } else {
                    $("#result").html("Please select a climate option.");
                }
            });
        });
    </script>
      
  </body>
</html>
