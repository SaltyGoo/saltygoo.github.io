 <h1>Monster Text Generator</h1>
  <button onclick="generateAndDisplayText()">Generate Text</button>
  <p id="generatedText"></p>
  
  <script>
    const cvsBiomes = ['/CSV/Monster - 01_Arctic.csv', '/CSV/Monster - 02_Desert.csv', '/CSV/Monster - 03_Forest.csv', '/CSV/Monster - 04_Hills.csv', '/CSV/Monster - 05_Jungle.csv', '/CSV/Monster - 06_Mountain.csv', '/CSV/Monster - 07_Plains.csv', '/CSV/Monster - 08_Swamp.csv', '/CSV/Monster - 09_City.csv', '/CSV/Monster - 10_Sea.csv'];

    // Name of the specific CVS to use for 10% of the time
    const underdarkCvs = '/CSV/Monster - 11_Gate.csv';

    async function getRandomCell(csvFile, columnIndex) {
      const response = await fetch(csvFile);
      const data = await response.text();
      const rows = data.split('\n').filter(row => row.trim() !== '');
      const cells = rows.map(row => row.split(',').map(cell => cell.trim())[columnIndex]).filter(cell => cell !== '');
      return cells[Math.floor(Math.random() * cells.length)] || '';
    }

    async function generateText() {
      const csvFile = cvsBiomes[Math.floor(Math.random() * cvsBiomes.length)];
      const cells = await Promise.all(Array.from({length: 12}, (_, i) => getRandomCell(csvFile, i + 3)));

      // Add content of columns 4-7 of specific CVS 10% of the time
      if (csvFile !== underdarkCvs && Math.random() < 0.1) {
        const specificCells = await Promise.all(Array.from({length: 4}, (_, i) => getRandomCell(underdarkCvs, i + 3)));
        cells.push(...specificCells);
      }

      return cells.join(' ');
    }

    async function generateAndDisplayText() {
      const generatedText = await generateText();
      document.getElementById('generatedText').textContent = generatedText;
    }
  </script>
