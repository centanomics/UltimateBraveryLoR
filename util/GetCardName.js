const { GetCards } = require('./GetCards');

const GetCardName = async (cardCode) => {
  let allCards = await GetCards();
  let getCard = allCards.filter((card) => card.cardCode === cardCode);

  return getCard[0].name;
};

module.exports = GetCardName;
