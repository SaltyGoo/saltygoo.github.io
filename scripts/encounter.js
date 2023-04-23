function generateSentence() {
  // Get the specific value from the HTML
  const specificValue = document.getElementById("specific-value").textContent;
  
  // Load the CSV file using Papa Parse
  Papa.parse("Monster - Index.csv", {
    download: true,
    header: true,
    complete: function(results) {
      // Filter the rows based on the specific value in column 0
      const filteredRows = results.data.filter(row => row["column0"] === specificValue);
      
      // Select a random row from the filtered rows
      const randomRow = filteredRows[Math.floor(Math.random() * filteredRows.length)];
      
      // Select a random column between 3 and 8
      const randomColumnIndex = Math.floor(Math.random() * 6) + 3;
      
      // Get the value of the random column in the selected row
      const randomValue = randomRow[`column${randomColumnIndex}`];
      
      // Concatenate the values of columns 3, 4, 5, 6, 7, or 8 into a sentence
      const sentence = `randomValue`;
      
      // Display the sentence in the HTML
      document.getElementById("output").textContent = sentence;
    }
  });
}
