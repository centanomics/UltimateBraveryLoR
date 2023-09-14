const { GetCards } = require('./GetCards');
const RandomDeckGenerator = async () => {
  const deck = [];

  const cards = await GetCards();

  console.log(cards);

  //STANDARD RULES
  // 1. 40 CARDS deck.length == 40
  // 2. ONLY STANDARD CARDS card.formats contains standard
  // 3. only 6 champion cards supertype = Champion, type == unit
  // 4. only two regions

  // filtering rules
  // 1. filter out rarity = none (gets rid of tokens)
  // 2. get a random card
  // 2. if it is a champion add it to the champion count

  return deck;
};

RandomDeckGenerator();

module.exports = RandomDeckGenerator;
