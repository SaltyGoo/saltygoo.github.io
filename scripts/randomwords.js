document.addEventListener('DOMContentLoaded', () => {
const replacements = {
  'rdmPLANE': ['PURGATORY', 'GEHENNA', 'HELL', 'THE ABYSS', 'THE DREAMWORLD', 'HEAVEN', 'THE ELEMENTAL PLANE OF FIRE', 'THE ELEMENTAL PLANE OF AIR', 'THE ELEMENTAL PLANE OF EARTH', 'THE ELEMENTAL PLANE OF WATER', 'THE ASTRAL SEA'],
  'word_to_replace_2': ['random4', 'random5', 'random6'],
};

const generatedText = document.getElementById('output');

Object.keys(replacements).forEach(searchWord => {
  generatedText.innerHTML = generatedText.innerHTML.replace(new RegExp(searchWord, 'g'), () => {
    const words = replacements[searchWord];
    return words[Math.floor(Math.random() * words.length)];
  });
});
});
