<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Text Generator</title>
  </head>
  <body>
    <h1>Random Hex Generator</h1>
    <button id="generate-button">Generate Text</button>
    <div id="output"></div>
    <script>
// Load the CSV files into arrays
const arcticCSV = fetch('/CSV/Monster - 01_Arctic.csv').then(response => response.text());
const desertCSV = fetch('/CSV/Monster - 02_Desert.csv').then(response => response.text());
const forestCSV = fetch('/CSV/Monster - 03_Forest.csv').then(response => response.text());
const hillsCSV = fetch('/CSV/Monster - 04_Hills.csv').then(response => response.text());
const jungleCSV = fetch('/CSV/Monster - 05_Jungle.csv').then(response => response.text());
const mountainCSV = fetch('/CSV/Monster - 06_Mountain.csv').then(response => response.text());
const plainsCSV = fetch('/CSV/Monster - 07_Plains.csv').then(response => response.text());
const swampCSV = fetch('/CSV/Monster - 08_Swamp.csv').then(response => response.text());
const cityCSV = fetch('/CSV/Monster - 09_City.csv').then(response => response.text());
const seaCSV = fetch('/CSV/Monster - 10_Sea.csv').then(response => response.text());
const gateCSV = fetch('/CSV/Monster - 11_Gate.csv').then(response => response.text());
const indexCSV = fetch('/CSV/Monster - Index.csv').then(response => response.text());

// Create a function to select a random Monster CSV file
function selectMonsterCSV() {
  const monsterCSVs = [arcticCSV, desertCSV, forestCSV, hillsCSV, jungleCSV, mountainCSV, plainsCSV, swampCSV, cityCSV, seaCSV];
  const randomIndex = Math.floor(Math.random() * monsterCSVs.length);
  return monsterCSVs[randomIndex];
}

// Create a function to concatenate random cells from a Monster CSV file
async function generateText() {
  const monsterCSV = await selectMonsterCSV();
  const monsterCSVRows = monsterCSV.split('\n');
  let concatenatedText = '';
  for (let i = 1; i < monsterCSVRows.length; i++) { // start loop at index 1
    const cells = monsterCSVRows[i].split(',');
    if (cells.length >= 16 && cells[4] !== '') {
      for (let j = 4; j < 16; j++) {
        if (cells[j] !== '') {
          concatenatedText += cells[j] + '.' + ' ';
        }
      }
      if (Math.random() < 0.1) {
        const gateRows = (await gateCSV).split('\n');
        let gateText = '';
        for (let k = 0; k < gateRows.length; k++) {
          const gateCells = gateRows[k].split(',');
          if (gateCells.length >= 7 && gateCells[4] !== '') {
            for (let l = 4; l <= 7; l++) {
              if (gateCells[l] !== '') {
                gateText += gateCells[l] + ' ';
              }
            }
            concatenatedText += '\n\n' + gateText;
          }
        }
      }
    }
  }
  // Replace 4-digit sequences with values from the Index CSV file
  const indexCSVResponse = await fetch('/CSV/Monster - Index.csv');
  const indexCSVText = await indexCSVResponse.text();
  const indexCSVRows = indexCSVText.split('\n');
  for (let i = 0; i < indexCSVRows.length; i++) {
    const regex = new RegExp('\\b' + indexCSVRows[i].substring(0, 4) + '\\b', 'g');
    const indexRow = indexCSVRows.find(row => row.startsWith(indexCSVRows[i].substring(0, 4)));
    if (indexRow) {
      const indexCells = indexRow.split(',');
      for (let k = 31; k <= 36; k++) {
        if (indexCells[k] && indexCells[k].trim()) {
          concatenatedText = concatenatedText.replace(regex, indexCells[k].trim());
        }
      }
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
