<html>
  <head>
    <meta charset="UTF-8">
    <title>Random Text Generator</title>
  </head>
  <body>
    <h1>Random Hex Generator</h1>
    <button id="generate-button">Generate Text</button>
    <div id="output"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
    <script>
      // Load the CSV files into arrays
      const arcticCSV = Papa.parse('/CSV/Monster - 01_Arctic.csv', { download: true, header: true });
      const desertCSV = Papa.parse('/CSV/Monster - 02_Desert.csv', { download: true, header: true });
      const forestCSV = Papa.parse('/CSV/Monster - 03_Forest.csv', { download: true, header: true });
      const hillsCSV = Papa.parse('/CSV/Monster - 04_Hills.csv', { download: true, header: true });
      const jungleCSV = Papa.parse('/CSV/Monster - 05_Jungle.csv', { download: true, header: true });
      const mountainCSV = Papa.parse('/CSV/Monster - 06_Mountain.csv', { download: true, header: true });
      const plainsCSV = Papa.parse('/CSV/Monster - 07_Plains.csv', { download: true, header: true });
      const swampCSV = Papa.parse('/CSV/Monster - 08_Swamp.csv', { download: true, header: true });
      const cityCSV = Papa.parse('/CSV/Monster - 09_City.csv', { download: true, header: true });
      const seaCSV = Papa.parse('/CSV/Monster - 10_Sea.csv', { download: true, header: true });
      const gateCSV = Papa.parse('/CSV/Monster - 11_Gate.csv', { download: true, header: true });
      const indexCSV = Papa.parse('/CSV/Monster - Index.csv', { download: true, header: true });

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
          concatenatedText += cells[j]+ ' ';
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
