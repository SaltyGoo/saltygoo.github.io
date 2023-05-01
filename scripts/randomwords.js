const words = ['PURGATORY', 'GEHENNA', 'HELL', 'THE ABYSS', 'THE DREAMWORLD', 'HEAVEN', 'THE ELEMENTAL PLANE OF FIRE', 'THE ELEMENTAL PLANE OF AIR', 'THE ELEMENTAL PLANE OF EARTH', 'THE ELEMENTAL PLANE OF WATER', 'THE ASTRAL SEA'];
const searchWord = 'rdmPLANE';

document.body.innerHTML = document.body.innerHTML.replace(new RegExp(searchWord, 'g'), () => {
  return words[Math.floor(Math.random() * words.length)];
});
