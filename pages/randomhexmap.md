<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Text Generator</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
  </head>
  <body>
    <h1>Random Hex Generator</h1>
    <button id="generate-button">Generate Text</button>
    <div id="output"></div>
    <script>
      // Create a function to load a CSV file and parse it with Papa Parse
      async function loadCSV(url) {
        const response = await fetch(url);
        const text = await response.text();
        const results = await new Promise(resolve => Papa.parse(text, {
          delimiter: ",",
          header: false,
          skipEmptyLines: true,
          complete: (results) => resolve(results.data)
        }));
        return results;
      }
      
 async function loadCSVFiles() {
  try {
    // Load the CSV files into arrays
    const arcticCSV = await loadCSV('/CSV/Monster - 01_Arctic.csv');
    const desertCSV = await loadCSV('/CSV/Monster - 02_Desert.csv');
    const forestCSV = await loadCSV('/CSV/Monster - 03_Forest.csv');
    const hillsCSV = await loadCSV('/CSV/Monster - 04_Hills.csv');
    const jungleCSV = await loadCSV('/CSV/Monster - 05_Jungle.csv');
    const mountainCSV = await loadCSV('/CSV/Monster - 06_Mountain.csv');
    const plainsCSV = await loadCSV('/CSV/Monster - 07_Plains.csv');
    const swampCSV = await loadCSV('/CSV/Monster - 08_Swamp.csv');
    const cityCSV = await loadCSV('/CSV/Monster - 09_City.csv');
    const seaCSV = await loadCSV('/CSV/Monster - 10_Sea.csv');
    const gateCSV = await loadCSV('/CSV/Monster - 11_Gate.csv');
    const indexCSV = await loadCSV('/CSV/Monster - Index.csv');
    
    // Return the arrays
    return [arcticCSV, desertCSV, forestCSV, hillsCSV, jungleCSV, mountainCSV, plainsCSV, swampCSV, cityCSV, seaCSV, gateCSV, indexCSV];
  } catch (err) {
    console.error(err);
  }
      
      // Create a function to select a random Monster CSV file
      function selectMonsterCSV() {
        const monsterCSVs = [arcticCSV, desertCSV, forestCSV, hillsCSV, jungleCSV, mountainCSV, plainsCSV, swampCSV, cityCSV, seaCSV];
        const randomIndex = Math.floor(Math.random() * monsterCSVs.length);
        return monsterCSVs[randomIndex];
      }
      
      // Create a function to concatenate random cells from a Monster CSV file
async function generateText() {
  const monsterCSV = await selectMonsterCSV();
  let concatenatedText = '';
  for (let i = 1; i < monsterCSV.length; i++) { // start loop at index 1
    const cells = monsterCSV[i];
    if (cells.length >= 16 && cells[4] !== '') {
      for (let j = 4; j < 16; j++) {
        if (cells[j] !== '') {
          concatenatedText += cells[j]+ ' ';
        }
      }
      if (Math.random() < 0.1) {
        const gateRows = await gateCSV;
        let gateText = '';
        for (let k = 0; k < gateRows.length; k++) {
          const gateCells = gateRows[k];
          if (gateCells.length >= 7 && gateCells[4] !== '') {
            for (let l = 4; l <= 7; l++) {
              if (gateCells[l] !== '') {
                gateText += gateCells[l] + ' ';
              }
            }
          }
        }
        concatenatedText += '\n\n' + gateText;
      }
    }
  }
  // Replace 4-digit sequences with values from the Index CSV file
  const indexCSVResponse = await fetch('/CSV/Monster - Index.csv');
  const indexCSVText = await indexCSVResponse.text();
  const indexCSVRows = indexCSVText.split('\n');

  const replacedIndexes = new Set();
  let replacedIndexCount = 0;

  while (true) {
    let foundMatch = false;

    // Keep track of the available indexes for each matched sequence
    const availableIndexesForMatches = {};

    // Search for matches in the concatenated text and keep track of the available indexes for each match
    concatenatedText.replace(/\b\d{4}\b/g, match => {
      const regex = new RegExp(`\\b${match}\\b`, 'g');
      for (let i = 0; i < indexCSVRows.length; i++) {
        const indexRow = indexCSVRows[i];
        if (!indexRow) {
          continue;
        }

        if (indexRow.includes(match)) {
          const indexCells = indexRow.split(',');
          const availableIndexes = Array.from(Array(indexCells.length).keys()).slice(31, 37);
          availableIndexesForMatches[match] = availableIndexes.filter(index => indexCells[index] && indexCells[index].trim());
          break;
        }
      }
      return match;
    });

    // Replace each matched sequence with a random index
    Object.entries(availableIndexesForMatches).forEach(([match, availableIndexes]) => {
      if (availableIndexes.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableIndexes.length);
const index = availableIndexes[randomIndex];
const replacementValue = indexCSVRows[index] || '';
        concatenatedText = concatenatedText.replace(new RegExp(`\\b${match}\\b`, 'g'), indexCSVRows[randomIndex].split(',')[1].trim());
        replacedIndexes.add(randomIndex);
        replacedIndexCount++;
        foundMatch = true;
      }
    });

    if (!foundMatch) {
      break;
    }
  }

  return concatenatedText;
}

      
// Bind an event listener to a button
const button = document.querySelector('button');
button.addEventListener('click', async () => {
  const text = await generateText();
  const outputDiv = document.querySelector('#output');
  outputDiv.innerHTML = text;
});
    </script>
  </body>
</html>
