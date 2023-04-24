<h1>Monster Text Generator</h1>
<button onclick="generateAndDisplayText()">Generate Text</button>
<p id="generatedText"></p>

<script>
  const cvsBiomes = ['/CSV/Monster - 01_Arctic.csv', '/CSV/Monster - 02_Desert.csv', '/CSV/Monster - 03_Forest.csv', '/CSV/Monster - 04_Hills.csv', '/CSV/Monster - 05_Jungle.csv', '/CSV/Monster - 06_Mountain.csv', '/CSV/Monster - 07_Plains.csv', '/CSV/Monster - 08_Swamp.csv', '/CSV/Monster - 09_City.csv', '/CSV/Monster - 10_Sea.csv'];

  // Name of the specific CSV to use for 10% of the time
  const underdarkCvs = '/CSV/Monster - 11_Gate.csv';

  async function getRandomCell(csvFile, columnIndex) {
    const response = await fetch(csvFile);
    const data = await response.text();
    const rows = data.split('\n').filter(row => row.trim() !== '');
    const cells = rows.map(row => row.split(',')).filter((row, index) => index !== 0).map(row => row[columnIndex]).filter(cell => cell !== '');
    return cells[Math.floor(Math.random() * cells.length)] || '';
  }

  async function generateText() {
    const csvFile = cvsBiomes[Math.floor(Math.random() * cvsBiomes.length)];
    const cells = await Promise.all(Array.from({length: 12}, (_, i) => getRandomCell(csvFile, i + 4)));

    // Add content of columns 4-7 of specific CSV 10% of the time
    if (csvFile !== underdarkCvs && Math.random() < 0.1) {
      const specificCells = await Promise.all([
        getRandomCell(underdarkCvs, 4),
        getRandomCell(underdarkCvs, 5),
        getRandomCell(underdarkCvs, 6),
        getRandomCell(underdarkCvs, 7)
      ]);
      cells.push(...specificCells);
    }

    // Combine cells into one string
    return cells.join(' ');
  }

  async function generateAndDisplayText() {
    const generatedText = await generateText();
    document.getElementById('generatedText').textContent = generatedText;
  }
</script>
