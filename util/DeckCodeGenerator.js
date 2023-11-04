const { DeckEncoder } = require('runeterra');

const DeckCodeGenerator = async (deck) => {
  const code = await DeckEncoder.encode(deck);

  return code;
};

module.exports = DeckCodeGenerator;
