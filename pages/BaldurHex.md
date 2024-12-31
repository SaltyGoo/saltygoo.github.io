 <head>
  <title>Fantasy Land Generator</title>
  </head>
  
   <body>
 
    <button id="generateText">Generate Text</button>
    <p id="result"></p>

    <script>
        // Define the climates
        const climate1 = "Forest";
        const climate2 = "Barren";

        // Helper function to load a CSV file and parse it
        async function loadCSV(filePath) {
            const response = await fetch(filePath);
            const text = await response.text();
            const rows = text.split("\n").map(row => row.split(","));
            return rows;
        }

        // Helper function to generate a random number between min and max (inclusive)
        function randomBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Main logic
        document.getElementById("generateText").addEventListener("click", async () => {
            const csvData = await loadCSV("/CSV/BG hexcrawl - HexGen.csv");
            const headerRow = csvData[0]; // First row is the header
            const resultElement = document.getElementById("result");

            const randomNumber = randomBetween(1, 4);
            let output = "";

            if (randomNumber === 1) {
                output = "Nothing happens.";
            } else if (randomNumber === 2) {
                const chosenClimate = randomBetween(1, 2) === 1 ? climate1 : climate2;
                const columnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
                const randomRow = randomBetween(2, 7); // Rows between 2 and 7
                output += csvData[randomRow][columnIndex] + "<br>";

                const subNumber = randomBetween(1, 6);
                if (subNumber === 1) output += "They are resting.";
                else if (subNumber === 2) output += "They are wounded!";
                else if (subNumber === 3) {
                    output += "They are struggling with a ";
                    const subColumnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
                    const subRandomRow = randomBetween(9, 12); // Rows between 9 and 12
                    const subValue = csvData[subRandomRow][subColumnIndex];
                    const subSubColumnIndex = headerRow.findIndex(header => header.startsWith(subValue));
                    const subSubRandomRow = randomBetween(23, 28); // Rows between 23 and 28
                    output += csvData[subSubRandomRow][subSubColumnIndex];
                } else if (subNumber === 4) output += "They are hunting/patroling.";
                else if (subNumber === 5) {
                    output += "They are fighting a ";
                    const subColumnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
                    const subRandomRow = randomBetween(2, 7); // Rows between 2 and 7
                    output += csvData[subRandomRow][subColumnIndex];
                } else if (subNumber === 6) {
                    output += "Fleeing ";
                    const subColumnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
                    const subRandomRow = randomBetween(9, 12); // Rows between 9 and 12
                    const subValue = csvData[subRandomRow][subColumnIndex];
                    const subSubColumnIndex = headerRow.findIndex(header => header.startsWith(subValue));
                    const subSubRandomRow = randomBetween(2, 21); // Rows between 2 and 21
                    output += csvData[subSubRandomRow][subSubColumnIndex];
                }
            } else if (randomNumber === 3) {
                const chosenClimate = randomBetween(1, 2) === 1 ? climate1 : climate2;
                const columnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
                const randomRow = randomBetween(9, 12); // Rows between 9 and 12
                const value = csvData[randomRow][columnIndex];
                const subColumnIndex = headerRow.findIndex(header => header.startsWith(value));
                const subRandomRow = randomBetween(2, 21); // Rows between 2 and 21
                output += csvData[subRandomRow][subColumnIndex] + "<br>";

                // Nested logic for subNumber 1-6...
            } else if (randomNumber === 4) {
                const subNumber = randomBetween(1, 5);
                const chosenClimate = randomBetween(1, 2) === 1 ? climate1 : climate2;
                const columnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
                if (subNumber === 1) {
                    output += csvData[20][columnIndex]; // Row 20
                } else if (subNumber === 2) {
                    const randomRow = randomBetween(9, 12); // Rows between 9 and 12
                    const value = csvData[randomRow][columnIndex];
                    const subColumnIndex = headerRow.findIndex(header => header.startsWith(value));
                    const subRandomRow = randomBetween(23, 28); // Rows between 23 and 28
                    output += csvData[subRandomRow][subColumnIndex];
                } else if (subNumber === 3) {
                    const randomRow = randomBetween(2, 7); // Rows between 2 and 7
                    const value = csvData[randomRow][columnIndex];
                    output += "The nest of " + value;
                } else if (subNumber === 4) {
                    output += "Heavy fog makes the party lost. They arrive at another location in the hex.";
                } else if (subNumber === 5) {
                    output += "The Gibberling Horde is coming tonight. Sleeping will be impossible on this hex.";
                }
            }

            resultElement.innerHTML = output;
        });
    </script>
  </body>
