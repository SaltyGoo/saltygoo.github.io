<h1>Monster Text Generator</h1>

<button id="generate-btn">Generate Text</button>
    <div id="original"></div>
    <div id="modified"></div>
    <div id="sequences"></div>
    <div id="cells"></div>
    <script src="https://cdn.jsdelivr.net/npm/promise-polyfill"></script>
    <script src="/JS/hexmap.js"></script>
    <script>
      const generateBtn = document.getElementById('generate-btn');
      const originalDiv = document.getElementById('original');
      const modifiedDiv = document.getElementById('modified');
      const sequencesDiv = document.getElementById('sequences');
      const cellsDiv = document.getElementById('cells');

      generateBtn.addEventListener('click', async () => {
        const { original, modified, sequences, cells } = await generateText();
        originalDiv.innerText = `Original: ${original}`;
        modifiedDiv.innerText = `Modified: ${modified}`;
        sequencesDiv.innerText = `Sequences: ${sequences}`;
        cellsDiv.innerText = `Cells: ${cells.join(' | ')}`;
      });
    </script>
