<h1>Monster Text Generator</h1>
<button onclick="generateText()">Generate Text</button>
<p id="generatedText"></p>

<script>
  const cvsBiomes = ['/CSV/Monster - 01_Arctic.csv', '/CSV/Monster - 02_Desert.csv', '/CSV/Monster - 03_Forest.csv', '/CSV/Monster - 04_Hills.csv', '/CSV/Monster - 05_Jungle.csv', '/CSV/Monster - 06_Mountain.csv', '/CSV/Monster - 07_Plains.csv', '/CSV/Monster - 08_Swamp.csv', '/CSV/Monster - 09_City.csv', '/CSV/Monster - 10_Sea'];

  // Name of the specific CVS to use for 10% of the time
  const underdarkCvs = '/CSV/Monster - 11_Gate.csv';

  async function getRandomCell(csvFile, columnIndex) {
    const response = await fetch(csvFile);
    const data = await response.text();
    const rows = data.split('\n').filter(row => row.trim() !== '');
    const cells = rows.map(row => row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(cell => cell.trim())[columnIndex]).filter((cell, index) => cell !== '' && index !== 0);
    const randomCell = cells[Math.floor(Math.random() * cells.length)] || '';
    const regex = /<a href='(.*?)'>(.*?)<\/a>/;
    const match = randomCell.match(regex);
    if (match) {
      const link = match[1];
      const text = match[2];
      return `<a href="${link}">${text}</a>`;
    } else {
      return randomCell;
    }
  }

  async function getMonsterIndexCell(csvFile, columnIndex, rowIndex) {
    const response = await fetch(csvFile);
    const data = await response.text();
    const rows = data.split('\n').filter(row => row.trim() !== '');
    const cells = rows.map(row => row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(cell => cell.trim()));
    const targetValue = cells[rowIndex][0];
    const targetRow = cells.find(row => row[0] === targetValue);
    const randomCell = targetRow.slice(columnIndex, columnIndex + 6)[Math.floor(Math.random() * 6)] || '';
    const regex = /<a href='(.*?)'>(.*?)<\/a>/;
    const match = randomCell.match(regex);
    if (match) {
      const link = match[1];
      const text = match[2];
      return `<a href="${link}">${text}</a>`;
    } else {
      return randomCell;
    }
  }

async function generateText() {
  const csvFile = cvsBiomes[Math.floor(Math.random() * cvsBiomes.length)];
  const cells = await Promise.all(Array.from({ length: 12 }, (_, i) => {
    const cell = getRandomCell(csvFile, i + 3);
    return cell.then(result => {
      // Check if the cell value is a sequence of 4 numbers
      if (/^\d{4}$/.test(result)) {
        // Get the random cell from Monster - Index CSV
        const indexCsv = '/CSV/Monster - Index.csv';
        return getMonsterIndexCell(indexCsv, 32, parseInt(result) - 1);
      }
      return result;
    });
  }));

  // Concatenate the cells into a single sentence
  let sentence = cells.join(' ');

  // Find all 4-digit sequences in the sentence
  const regex = /\d{4}/g;
  const sequences = sentence.match(regex);

  // Add content of columns 4-7 of specific CSV 10% of the time
  let specificCells;
  if (csvFile !== underdarkCvs && Math.random() < 0.1) {
    specificCells = await Promise.all(Array.from({ length: 4 }, (_, i) => getRandomCell(underdarkCvs, i + 3)));
    sentence += " " + specificCells.join(' ');
  }

  const generatedText = document.getElementById("generatedText");
  generatedText.innerHTML = sentence;
  
  return { original: sentence, sequences};

</script>
