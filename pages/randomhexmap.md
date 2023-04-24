:)

  <div>
    <button onclick="generateAndDisplay()">Generate Text</button>
  </div>
  <div id="generated-text">Text will appear here</div>
  <script src="/CSV/hexmap.js"></script>
  <script>
    async function generateAndDisplay() {
      const generatedText = await generateText();
      document.getElementById("generated-text").innerHTML = generatedText;
    }
  </script>
