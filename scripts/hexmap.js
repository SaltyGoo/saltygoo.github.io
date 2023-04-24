const cvsFiles = ['Monster - 01_Arctic.csv', 'Monster - 02_Desert.csv', 'Monster - 03_Forest.csv', 'Monster - 04_Hills.csv', 'Monster - 05_Jungle.csv', 'Monster - 06_Mountain.csv', 'Monster - 07_Plains.csv', 'Monster - 08_Swamp.csv', 'Monster - 09_City.csv', 'Monster - 10_Sea'];

// Name of the specific CVS to use for 10% of the time
const specificCvs = 'Monster - 11_Gate.csv';

async function getRandomCell(csvFile, columnIndex) {
  const response = await fetch(csvFile);
  const data = await response.text();
  const rows = data.split('\n').filter(row => row.trim() !== '');
  const cells = rows.map(row => row.split(',').map(cell => cell.trim())[columnIndex]).filter(cell => cell !== '');
  return cells[Math.floor(Math.random() * cells.length)] || '';
}

async function generateText() {
  const csvFile = cvsFiles[Math.floor(Math.random() * cvsFiles.length)];
  const cells = await Promise.all(Array.from({length: 12}, (_, i) => getRandomCell(csvFile, i + 3)));

  // Add content of columns 4-7 of specific CVS 10% of the time
  if (csvFile !== specificCvs && Math.random() < 0.1) {
    const specificCells = await Promise.all(Array.from({length: 4}, (_, i) => getRandomCell(specificCvs, i + 3)));
    cells.push(...specificCells);
  }

  return cells.join(' ');
}

generateText().then(text => console.log(text));
