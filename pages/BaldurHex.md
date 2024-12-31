
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Baldur's Gate Encounter Generator</title>
</head>
<body>
  <h1>Baldur's Gate Encounter Generator</h1>
  <button id="generateText">Generate Text</button>
  <p id="result"></p>

  <script>
    // Define the climates
    const climate1 = "Forest";
    const climate2 = "Barren";

    // Helper function to load a CSV file and parse it
    async function loadCSV(filePath) {
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${filePath}: ${response.statusText}`);
        }
        const text = await response.text();
        return text.split("\n").map(row => row.split(","));
      } catch (error) {
        console.error("Error loading CSV:", error);
        return [];
      }
    }

    // Helper function to generate a random number between min and max (inclusive)
    function randomBetween(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Helper function to validate row and column indices
    function isValidIndex(index, max) {
      return index >= 0 && index < max;
    }

    // Main logic
    document.getElementById("generateText").addEventListener("click", async () => {
      const csvData = await loadCSV("/CSV/BG hexcrawl - HexGen.csv");
      if (csvData.length === 0) {
        document.getElementById("result").innerText = "Error loading CSV data.";
        return;
      }

      const headerRow = csvData[0]; // First row is the header
      const resultElement = document.getElementById("result");

      const randomNumber = randomBetween(1, 4);
      console.log(`Dice Roll: ${randomNumber}`);  // Log rolled number
      let output = "";

      if (randomNumber === 1) {
        output = "Nothing happens.";
      } else if (randomNumber === 2) {
        const chosenClimate = randomBetween(1, 2) === 1 ? climate1 : climate2;
        const columnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
        if (isValidIndex(columnIndex, headerRow.length)) {
          const RandomRow = randomBetween(2, 7); // Rows 2 to 7
          if (isValidIndex(RandomRow, csvData.length)) {
            output += csvData[RandomRow][columnIndex] + "<br>";

            const subNumber = randomBetween(1, 6);
                  console.log(`Sub Roll: ${subNumber}`);  // Log rolled number
            if (subNumber === 1) {
              output += "They are resting.";
            } else if (subNumber === 2) {
              output += "They are wounded!";
            } else if (subNumber === 3) {
              output += "They are struggling with ";
              const subRandomRow = randomBetween(9, 12); // Rows 9 to 12
              if (isValidIndex(subRandomRow, csvData.length)) {
                const subValue = csvData[subRandomRow][columnIndex];
                const subSubColumnIndex = headerRow.findIndex(header => header.startsWith(subValue));
                const subSubRandomRow = randomBetween(22, 27); // Rows 22 to 27
                if (isValidIndex(subSubRandomRow, csvData.length) && isValidIndex(subSubColumnIndex, headerRow.length)) {
                  output += csvData[subSubRandomRow][subSubColumnIndex];
                }
              }
            } else if (subNumber === 4) {
              output += "They are hunting/patroling.";
            } else if (subNumber === 5) {
              output += "They are fighting ";
              const subRandomRow = randomBetween(2, 7); // Rows 2 to 7
              if (isValidIndex(subRandomRow, csvData.length)) {
                output += csvData[subRandomRow][columnIndex];
              }
            } else if (subNumber === 6) {
              output += "They are fleeing ";
              const subRandomRow = randomBetween(9, 12); // Rows 9 to 12
              if (isValidIndex(subRandomRow, csvData.length)) {
                const subValue = csvData[subRandomRow][columnIndex];
                                console.log(`Value: ${subValue}`);  // Log rolled faction
                const subSubColumnIndex = headerRow.findIndex(header => header.startsWith(subValue));
                const subSubRandomRow = randomBetween(1, 20); // Rows 1 to 20
                if (isValidIndex(subSubRandomRow, csvData.length) && isValidIndex(subSubColumnIndex, headerRow.length)) {
                  output += csvData[subSubRandomRow][subSubColumnIndex];
                }
              }
            }
          }
        }
      } else if (randomNumber === 3) {
        const chosenClimate = randomBetween(1, 2) === 1 ? climate1 : climate2;
                        console.log(`Chosen Climate: ${chosenClimate}`);  // Log rolled climate
        const columnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
                        console.log(`Climate column Index: ${columnIndex}`);  // Log climate colume
        if (isValidIndex(columnIndex, headerRow.length)) {
          const RandomRow = randomBetween(9, 12); // Rows 9 to 12
                        console.log(`Random Row: ${RandomRow}`);  // Log random row
              if (isValidIndex(RandomRow, csvData.length)) {
                const Value = csvData[RandomRow][columnIndex];
                console.log(`Value: ${Value}`);  // Log rolled faction
                const SubColumnIndex = headerRow.findIndex(header => header.startsWith(Value));
                const SubRandomRow = randomBetween(1, 20); // Rows 1 to 20
                if (isValidIndex(SubRandomRow, csvData.length) && isValidIndex(SubColumnIndex, headerRow.length)) {
                  output += csvData[SubRandomRow][SubColumnIndex] + "<br>";


            const subNumber = randomBetween(1, 6);
               console.log(`Sub Roll: ${subNumber}`);  // Log rolled number
            if (subNumber === 1) {
              output += "They are resting.";
            } else if (subNumber === 2) {
              output += "They are wounded!";
            } else if (subNumber === 3) {
              output += "They are struggling with ";
              const subRandomRow = randomBetween(9, 12); // Rows 9 to 12
              if (isValidIndex(subRandomRow, csvData.length)) {
                const subValue = csvData[subRandomRow][columnIndex];
                const subSubColumnIndex = headerRow.findIndex(header => header.startsWith(subValue));
                const subSubRandomRow = randomBetween(22, 27); // Rows 22 to 27
                if (isValidIndex(subSubRandomRow, csvData.length) && isValidIndex(subSubColumnIndex, headerRow.length)) {
                  output += csvData[subSubRandomRow][subSubColumnIndex];
                }
              }
            } else if (subNumber === 4) {
              output += "They are hunting/patroling.";
            } else if (subNumber === 5) {
              output += "They are fighting ";
              const subRandomRow = randomBetween(2, 7); // Rows 2 to 7
              if (isValidIndex(subRandomRow, csvData.length)) {
                output += csvData[subRandomRow][columnIndex];
              }
            } else if (subNumber === 6) {
              output += "They are fleeing ";
              const subRandomRow = randomBetween(9, 12); // Rows 9 to 12
              if (isValidIndex(subRandomRow, csvData.length)) {
                const subValue = csvData[subRandomRow][columnIndex];
                const subSubColumnIndex = headerRow.findIndex(header => header.startsWith(subValue));
                const subSubRandomRow = randomBetween(1, 20); // Rows 1 to 20
                if (isValidIndex(subSubRandomRow, csvData.length) && isValidIndex(subSubColumnIndex, headerRow.length)) {
                  output += csvData[subSubRandomRow][subSubColumnIndex];
                }
              }
            }
          }
        }
                          }
              }
        else if (randomNumber === 4) {
        const subNumber = randomBetween(1, 5);
               console.log(`Sub Roll: ${subNumber}`);  // Log rolled number
        const chosenClimate = randomBetween(1, 2) === 1 ? climate1 : climate2;
        const columnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
        if (isValidIndex(columnIndex, headerRow.length)) {
          if (subNumber === 1) {
            if (isValidIndex(20, csvData.length)) {
              output += csvData[20][columnIndex];
            }
          } else if (subNumber === 2) {
            const RandomRow = randomBetween(9, 12); // Rows 9 to 12
            if (isValidIndex(RandomRow, csvData.length)) {
              const value = csvData[RandomRow][columnIndex];
              const subColumnIndex = headerRow.findIndex(header => header.startsWith(value));
              const subSubRandomRow = randomBetween(22, 27); // Rows 22 to 27
              if (isValidIndex(subSubRandomRow, csvData.length) && isValidIndex(subColumnIndex, headerRow.length)) {
                output += csvData[subSubRandomRow][subColumnIndex];
              }
            }
          } else if (subNumber === 3) {
            const RandomRow = randomBetween(2, 7); // Rows 2 to 7
            if (isValidIndex(RandomRow, csvData.length)) {
              const value = csvData[RandomRow][columnIndex];
              output += "The nest of " + value;
            }
          } else if (subNumber === 4) {
            output += "Heavy fog makes the party lost. They arrive at another location in the hex.";
          } else if (subNumber === 5) {
            output += "The Gibberling Horde is coming tonight. Sleeping will be impossible on this hex.";
          }
        }
      }

      resultElement.innerHTML = output || "Error: Unable to generate text.";
    });
  </script>
</body>
