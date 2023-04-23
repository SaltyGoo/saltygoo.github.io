function generateText() {
  // Create an array of six options
  var options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"];

  // Generate a random index number between 0 and 5
  var index = Math.floor(Math.random() * 6);

  // Get the option at the generated index
  var selectedOption = options[index];

  // Get the paragraph element where we will display the generated text
  var generatedText = document.getElementById("generated-text");

}
