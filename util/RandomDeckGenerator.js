const { GetCards } = require('./GetCards');
const RandomDeckGenerator = async () => {
  const deck = [];

  const cards = await GetCards();

  console.log(cards.length);

  return deck;
};

RandomDeckGenerator();

module.exports = RandomDeckGenerator;
