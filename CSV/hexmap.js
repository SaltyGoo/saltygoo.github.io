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
    return cell.then(async result => {
      // Check if the cell value is a sequence of 4 numbers
      if (/^\d{4}$/.test(result)) {
        // Get the random cell from Monster - Index CSV
        const indexCsv = '/CSV/Monster - Index.csv';
        const response = await fetch(indexCsv);
        const data = await response.text();
        const rows = data.split('\n').filter(row => row.trim() !== '');
        const targetRow = rows.find(row => row.startsWith(result));
        if (targetRow) {
          const cells = targetRow.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(cell => cell.trim());
          const randomCell = cells.slice(31, 37)[Math.floor(Math.random() * 6)] || '';
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
      }
      return result;
    });
  }));

  // Add content of columns 4-7 of specific CSV 10% of the time
  if (csvFile !== underdarkCvs && Math.random() < 0.1) {
    const cell = await getRandomCell(underdarkCvs, Math.floor(Math.random() * 4) + 4);
    cells.push(cell);
  }

  // Assemble the final output sentence
  const sentence = `This ${cells[1]} ${cells[0]} is known for its ${cells[2]}. Beware of ${cells[3]} that could collapse at any moment when traveling there. It is inhabited by ${cells[4]} and also ${cells[5]}.`;
  return sentence;
}
