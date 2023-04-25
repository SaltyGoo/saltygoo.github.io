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
        const results = Papa.parse(text, {
          delimiter: ",",
          header: false,
          skipEmptyLines: true
        });
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
const replacedSequences = {}; // keep track of replaced sequences
for (let i = 0; i < indexCSVRows.length; i++) {
  const regex = new RegExp('\\b' + indexCSVRows[i].substring(0, 4) + '\\b', 'g');
  const indexRow = indexCSVRows.find(row => row.startsWith(indexCSVRows[i].substring(0, 4)));
  if (indexRow) {
    const indexCells = indexRow.split(',');
    const k = Math.floor(Math.random() * 6) + 31; // Generate a random number between 31 and 36
    if (indexCells[k] && indexCells[k].trim()) {
      let replaceIndex = 0;
      if (replacedSequences.hasOwnProperty(indexCells[0])) { // check if sequence has been replaced before
        replaceIndex = replacedSequences[indexCells[0]] + 1; // select next index for the sequence
      }
      replacedSequences[indexCells[0]] = replaceIndex; // update index for sequence
      const replaceString = indexCells[replaceIndex + 31].trim();
      concatenatedText = concatenatedText.replace(regex, replaceString);
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
