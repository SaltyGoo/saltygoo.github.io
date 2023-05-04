document.addEventListener('DOMContentLoaded', () => {
  const replacements = {
    'rdmPLANE': ['PURGATORY', 'GEHENNA', 'HELL', 'THE ABYSS', 'THE DREAMWORLD', 'HEAVEN', 'THE ELEMENTAL PLANE OF FIRE', 'THE ELEMENTAL PLANE OF AIR', 'THE ELEMENTAL PLANE OF EARTH', 'THE ELEMENTAL PLANE OF WATER', 'THE ASTRAL SEA'],
    'word_to_replace_2': ['random4', 'random5', 'random6'],
  };

  const button = document.querySelector('button');
  button.addEventListener('click', async () => {
    const text = await generateText();
    const outputDiv = document.querySelector('#output');
    outputDiv.innerHTML = '<br>' + text;
    
    Object.keys(replacements).forEach(searchWord => {
      outputDiv.innerHTML = outputDiv.innerHTML.replace(new RegExp(searchWord, 'g'), () => {
        const words = replacements[searchWord];
        return words[Math.floor(Math.random() * words.length)];
      });
    });
  });
});
