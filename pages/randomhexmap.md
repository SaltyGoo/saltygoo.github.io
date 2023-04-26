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
    complete: (results) => resolve(results)
  }));
  return results.data;
}
      
      // Load the CSV files into arrays
      const arcticCSV = loadCSV('/CSV/Monster - 01_Arctic.csv');
      const desertCSV = loadCSV('/CSV/Monster - 02_Desert.csv');
      const forestCSV = loadCSV('/CSV/Monster - 03_Forest.csv');
      const hillsCSV = loadCSV('/CSV/Monster - 04_Hills.csv');
      const jungleCSV = loadCSV('/CSV/Monster - 05_Jungle.csv');
      const mountainCSV = loadCSV('/CSV/Monster - 06_Mountain.csv');
      const plainsCSV = loadCSV('/CSV/Monster - 07_Plains.csv');
      const swampCSV = loadCSV('/CSV/Monster - 08_Swamp.csv');
      const cityCSV = loadCSV('/CSV/Monster - 09_City.csv');
      const seaCSV = loadCSV('/CSV/Monster - 10_Sea.csv');
      const gateCSV = loadCSV('/CSV/Monster - 11_Gate.csv');
      const indexCSV = loadCSV('/CSV/Monster - Index.csv');
      
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
if (Math.random() < 0.9) {
  const gateRows = await gateCSV;
  let gateText = '';
  const columns = [4, 5, 6, 7];
  for (let i = 0; i < columns.length; i++) {
    const col = columns[i];
    const cells = [];
    for (let j = 1; j < gateRows.length; j++) {
      const gateCells = gateRows[j];
      if (gateCells.length >= col + 1 && gateCells[col] !== '') {
        cells.push(gateCells[col]);
      }
    }
    if (cells.length > 0) {
      const randomCell = cells[Math.floor(Math.random() * cells.length)];
      gateText += randomCell + ' ';
    }
  }
  concatenatedText += '\n\n' + gateText.trim();
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
  
  for (let i = 0; i < indexCSVRows.length; i++) {
    const indexRow = indexCSVRows[i];
    if (!indexRow) {
      continue;
    }
    
    const regex = new RegExp('\\b' + indexRow.substring(0, 4) + '\\b', 'g');
    
    let match;
    while ((match = regex.exec(concatenatedText)) !== null) {
      const indexCells = indexRow.split(',');
      const availableIndexes = Array.from(Array(indexCells.length).keys()).slice(31, 37);
      let randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
      while (replacedIndexes.has(randomIndex)) {
        randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
      }
      
      if (indexCells[randomIndex] && indexCells[randomIndex].trim()) {
        concatenatedText = concatenatedText.substring(0, match.index) + indexCells[randomIndex].trim() + concatenatedText.substring(match.index + match[0].length);
        foundMatch = true;
        replacedIndexes.add(randomIndex);
        replacedIndexCount++;
      }
    }
  }
  
  if (!foundMatch) {
    break;
  }
}

console.log(`Replaced ${replacedIndexCount} 4-digit sequences.`);

return concatenatedText;

}
// Bind an event listener to a button
const button = document.querySelector('button');
button.addEventListener('click', async () => {
  const text = await generateText();
  const outputDiv = document.querySelector('#output');
  outputDiv.innerHTML = \n + text;
});
    </script>
  </body>
</html>
