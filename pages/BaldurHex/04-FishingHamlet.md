##### [Return to Map](https://saltygoo.github.io/2024/12/31/BGHex/)

<img align="left" width=150px src="/images/Hexes/hex04.png">
<h1>Hex 04 - Fishing Hamlet</h1>

*The farmlands south of Baldur's Gate are fertilized by sediments from the Chiontar's estuary and toiled by giant beetles known as Ankhegs.*

**Biome:** <u>Farmland</u>. Wet dirt. Post harvest. Dewey. Low fog. Sea air.

---

Travel **NW:** [03 - Cloakwood Mines](/pages/BaldurHex/03-CloakwoodMines), **N:** Chiontar Estuary, **NE:** [05 - Wyrm's Crossing](/pages/BaldurHex/05-WyrmsCrossing), <br>
Travel **SW:** [08 - The Friendly Arm Inn](/pages/BaldurHex/08-FriendlyArmInn), **S:** [09 - Peldvale](/pages/BaldurHex/09-Peldvale) , **SE:** [10 - Old Ruins](/pages/BaldurHex/10-OldRuins)

 ---
 
<button id="generateText" >Generate Encounter</button> <br>

<span class="grey" id="result" style="height: 75px;"> Click the button above to generate an encounter. </span>

<details markdown="1">
<summary>Encounter Rules</summary>
Generate an encounter the first time the party goes to one of this hex's features and every 12 hours. Encounters can happen on the way to the location or at the destination. If an encounter would happen while the party rests, good survival skills while setting up camp make the encounter happen after the full rest is completed. Search the [Baldur's Gate Wiki](https://baldursgate.fandom.com/wiki/Baldur%27s_Gate_Wiki) for informations on named NPC. Do not hesitate to replace any named NPC by one the players have already met from time to time! It makes for a better story.
</details>

 ---

<span class="blacktitle"> Feature A - Fishing Village </span>

A handful of simple houses are clustered on the sandy banks of the Chiontar estuary. Drying nets and fishes sway in the wind while Baldur's Gate can be seen looming across the river. 

---

<span class="blacktitle"> Feature B - Brun's Farm</span>

One of the small farms lining the Coast Way near Baldur's Gate. This one stands discreetely on the outskirts of Peldvale, suggesting it could be a safe haven.

---

<span class="blacktitle"> Feature C - The Ankheg Pit </span>

Corroded tunnels in the farmland lead to a dark, damp nest.









  <script>
    // Define the climates
    const climate1 = "Farmland";
    const climate2 = "Farmland";

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
              output += "They are victims of a trap: ";
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
