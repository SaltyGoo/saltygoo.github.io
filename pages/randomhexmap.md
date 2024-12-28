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
    
  (async function() {
  async function loadCSV(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch ${url}`);
      const text = await response.text();
      const results = await new Promise(resolve => Papa.parse(text, {
        delimiter: ",",
        header: false,
        skipEmptyLines: true,
        complete: resolve
      }));
      return results.data;
    } catch (error) {
      console.error('Error loading CSV:', error);
      return [];
    }
  }

  // Load CSVs
  const arcticCSV = await loadCSV('/CSV/Monster - 01_Arctic.csv');
  const gateCSV = await loadCSV('/CSV/Monster - 11_Gate.csv');
  const indexCSV = await loadCSV('/CSV/Monster - Index.csv');

  // Select a random Monster CSV
  const monsterCSVs = [arcticCSV /* add other CSVs here */];
  function selectMonsterCSV() {
    return monsterCSVs[Math.floor(Math.random() * monsterCSVs.length)];
  }

  // Generate text
  async function generateText() {
    const monsterCSV = selectMonsterCSV();
    let concatenatedText = '';
    // Add logic for generating text
    return concatenatedText;
  }

  // Define replacements
  const replacements = {
    // Add your replacement mappings here
  };

  // Button click handler
  const button = document.querySelector('button');
  button.addEventListener('click', async () => {
    try {
      let generatedText = await generateText();
      const outputDiv = document.querySelector('#output');
      Object.keys(replacements).forEach(searchWord => {
        generatedText = generatedText.replace(new RegExp(searchWord, 'g'), () => {
          const words = replacements[searchWord];
          return words[Math.floor(Math.random() * words.length)];
        });
      });
      outputDiv.innerHTML = '<br>' + generatedText;
    } catch (error) {
      console.error('Error generating text:', error);
    }
  });
})();
  
      
      
  </body>
</html>
