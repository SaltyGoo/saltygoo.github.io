<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Hex Generator</title>
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
  const rows = monsterCSV.split('\n');
  let concatenatedText = '';
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].split(',');
    if (cells.length >= 16 && cells[4] !== '') {
      for (let j = 4; j <= 16; j++) {
        if (cells[j] !== '') {
          concatenatedText += cells[j] + ' ';
        }
      }
      if (Math.random() < 0.1) {
        const gateRows = await gateCSV.split('\n');
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
  // Replace 4-digit sequences with values from the Index CSV file
  const indexCSVData = await indexCSV.split('\n');
  for (let i = 0; i < indexCSVData.length; i++) {
    const row = indexCSVData[i].split(',');
    if (row.length >= 37) {
      for (let j = 31; j <= 36; j++) {
        const regex = new RegExp('\\b' + row[j] + '\\b', 'g');
        concatenatedText = concatenatedText.replace(regex, '<a href="' + row[j] + '">' + row[j] + '</a>');
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
