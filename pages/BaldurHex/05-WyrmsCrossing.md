
<img align="left" width=150px src="/images/Hexes/hex05.png">
<h1>Hex 05 - Wyrm's Crossing</h1>

*A massive fortified bridge that crosses the Chiontar river near the city-state of Baldur's Gate.*

**Biome:** <u>Settled Farmland</u>. Paved road. Signposts. Pastures. Low fog. Sea air.

---

##### [Return to Map](https://saltygoo.github.io/2024/12/31/BGHex/)
Travel **NW:** Chiontar Estuary, **N:** To **BALDUR'S GATE**! **NE:** Chiontar River <br>
Travel **SW:** [04 - Fishing Hamlet](/pages/BaldurHex/04-FishingHamlet), **S:** [10 - Old Ruins](/pages/BaldurHex/10-OldRuins), **SE:** Wood of Sharp Teeth

 ---
 
<button id="generateText" >Generate Encounter</button> <br>

<span class="grey" id="result" style="height: 75px;"> Click the button above to generate an encounter. </span>

<details markdown="1">
<summary>Encounter Rules</summary>
Generate an encounter the first time the party goes to one of this hex's features and every 12 hours. Encounters can happen on the way to the location or at the destination. If an encounter would happen while the party rests, good survival skills while setting up camp make the encounter happen after the full rest is completed. Search the [Baldur's Gate Wiki](https://baldursgate.fandom.com/wiki/Baldur%27s_Gate_Wiki) for informations on named NPC. Do not hesitate to replace any named NPC by one the players have already met from time to time! It makes for a better story.
</details>

 ---

<span class="blacktitle"> Feature A - Wyrm's Crossing </span>

Massive stone bridge that crosses the Chiontar along the Coast Way near Baldur's Gate. Rempant banditry has led the Flaming Fist mercenaries to close it until further notice.

---

<span class="blacktitle"> Feature B - Merchant Camp</span>

Merchant caravans from Amn and beyond that have survived the bandit raids are stuck here until the bridge is open. Tension is high.

---

<span class="blacktitle"> Feature C - Tenya's Hut </span>

Further along the river and hidden by fog lives Tenya, the local sea witch.









  <script>
    // Define the climates
    const climate1 = "Farmland";
    const climate2 = "Village1";

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
              output += "They are victims of a trap: ";
              const subRandomRow = randomBetween(9, 12); // Rows 9 to 12
              if (isValidIndex(subRandomRow, csvData.length)) {
                const subValue = csvData[subRandomRow][columnIndex];
                const subSubColumnIndex = headerRow.findIndex(header => header.trim().normalize('NFC').startsWith(subValue.trim().normalize('NFC')));
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
                const subSubColumnIndex = headerRow.findIndex(header => header.trim().normalize('NFC').startsWith(subValue.trim().normalize('NFC')));
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
                console.log(`Header Row: ${headerRow}`);
                console.log(`Matching headers: ${headerRow.filter(header => header.startsWith(Value))}`);
                const SubColumnIndex = headerRow.findIndex(header => header.trim().normalize('NFC').startsWith(Value.trim().normalize('NFC')));
                console.log(`Faction Column: ${SubColumnIndex}`);  // Log rolled faction column number
                const SubRandomRow = randomBetween(1, 20); // Rows 1 to 20
                if (isValidIndex(SubRandomRow, csvData.length) && isValidIndex(SubColumnIndex, headerRow.length)) {
                  output += csvData[SubRandomRow][SubColumnIndex] + "<br>";
            const subNumber = randomBetween(1, 6)
               console.log(`Sub Roll: ${subNumber}`);  // Log rolled number
            if (subNumber === 1) {
              output += "They are resting.";
            } else if (subNumber === 2) {
              output += "They are wounded!";
            } else if (subNumber === 3) {
              output += "They are victims of a trap: ";
               let subValue;
               let subRandomRow;
             do {
                    subRandomRow = randomBetween(9, 12); // Generate a new random row
                     if (isValidIndex(subRandomRow, csvData.length)) {
                       subValue = csvData[subRandomRow][columnIndex];
                     } else {
                       subValue = null; // Ensure subValue is reset if index is invalid
                     }
                   } while (subValue === Value);
                const subSubColumnIndex = headerRow.findIndex(header => header.trim().normalize('NFC').startsWith(subValue.trim().normalize('NFC')));
                const subSubRandomRow = randomBetween(22, 27); // Rows 22 to 27
                if (isValidIndex(subSubRandomRow, csvData.length) && isValidIndex(subSubColumnIndex, headerRow.length)) {
                  output += csvData[subSubRandomRow][subSubColumnIndex];
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
               let subValue;
               let subRandomRow;
             do {
                    subRandomRow = randomBetween(9, 12); // Generate a new random row
                     if (isValidIndex(subRandomRow, csvData.length)) {
                       subValue = csvData[subRandomRow][columnIndex];
                     } else {
                       subValue = null; // Ensure subValue is reset if index is invalid
                     }
                   } while (subValue === Value);
                const subSubColumnIndex = headerRow.findIndex(header => header.trim().normalize('NFC').startsWith(subValue.trim().normalize('NFC')));
                const subSubRandomRow = randomBetween(1, 20); // Rows 1 to 20
                if (isValidIndex(subSubRandomRow, csvData.length) && isValidIndex(subSubColumnIndex, headerRow.length)) {
                  output += csvData[subSubRandomRow][subSubColumnIndex];
                }
              }
            }
          }
        }
              }
        else if (randomNumber === 4) {
        const subNumber = randomBetween(1, 6);
               console.log(`Sub Roll: ${subNumber}`);  // Log rolled number
        const chosenClimate = randomBetween(1, 2) === 1 ? climate1 : climate2;
        const columnIndex = headerRow.findIndex(header => header.startsWith(chosenClimate));
        if (isValidIndex(columnIndex, headerRow.length)) {
          if (subNumber === 1) {
            if (isValidIndex(19, csvData.length)) {
              output += csvData[19][columnIndex];
            }
          } else if (subNumber === 2) {
            const RandomRow = randomBetween(9, 12); // Rows 9 to 12
            if (isValidIndex(RandomRow, csvData.length)) {
              const value = csvData[RandomRow][columnIndex];
              const subColumnIndex = headerRow.findIndex(header => header.trim().normalize('NFC').startsWith(value.trim().normalize('NFC')));
              const subSubRandomRow = randomBetween(22, 27); // Rows 22 to 27
              if (isValidIndex(subSubRandomRow, csvData.length) && isValidIndex(subColumnIndex, headerRow.length)) {
                output += csvData[subSubRandomRow][subColumnIndex];
              }
            }
          } else if (subNumber === 3) {
            const RandomRow = randomBetween(2, 7); // Rows 2 to 7
            if (isValidIndex(RandomRow, csvData.length)) {
              const value = csvData[RandomRow][columnIndex];
              output += "A lair! It is inhabited by " + value;
            }
          } else if (subNumber === 4) {
            output += "HEAVY FOG. Travelers end at another location in this hex than the one intended.";
          } else if (subNumber === 5) {
            output += "The GIBBERLING HORDE is coming tonight. Sleeping will be impossible in this hex.";
          } else if (subNumber === 6) {
            const RandomRow = randomBetween(14, 17); // Rows 14 to 17
            if (isValidIndex(RandomRow, csvData.length)) {
              const value = csvData[RandomRow][columnIndex];
              output += "You meet " + value;
            }
          } 
        }
      }

      resultElement.innerHTML = output || "Error: Unable to generate text.";
    });
  </script>
