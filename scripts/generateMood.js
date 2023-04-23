function generateMood() {
  // Create an array of six mood options
  var moods = ["happiness", "anger", "sadness", "excitement", "fear", "surprise"];

  // Generate a random index number between 0 and 5
  var index = Math.floor(Math.random() * 6);

  // Get the mood option at the generated index
  var selectedMood = moods[index];

  // Get the paragraph element where we will display the generated text
  var generatedText = document.getElementById("MoodResult");

  // Set the text content of the paragraph element to the selected mood in italic
  generatedText.innerHTML = "<em>" + selectedMood + "</em>";
}
