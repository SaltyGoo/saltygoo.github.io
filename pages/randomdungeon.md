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
                            var filteredValues = [];

                            // Find the index of the column that matches the selectedValue
                            var columnIndex = results.meta.fields.indexOf(selectedValue);

                            if (columnIndex !== -1) { // Ensure the column exists
                                // Filter the rows
                                results.data.forEach(function(row) {
                                    if (row[selectedValue] === "TRUE") { // Check if the cell in the selected column has "TRUE"
                                        filteredValues.push(row[Object.keys(row)[0]]); // Add the value from the first column
                                    }
                                });

                                // Randomly select 3 unique values
                                var uniqueRandomValues = [];
                                while (uniqueRandomValues.length < 3 && filteredValues.length > 0) {
                                    var randomIndex = Math.floor(Math.random() * filteredValues.length);
                                    uniqueRandomValues.push(filteredValues.splice(randomIndex, 1)[0]);
                                }

                                $("#result").html("Generated values: " + uniqueRandomValues.join(", "));
                            } else {
                                $("#result").html("No matching column found for the selected climate.");
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
