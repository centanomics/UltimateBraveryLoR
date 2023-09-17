const { GetCards } = require('./GetCards');
const RandomDeckGenerator = async () => {
  const deck = [];

  let cards = await GetCards();
  cards = cards.filter((card) => card.rarity == 'None');
  // console.log(cards[0].formats.length);
  cards = cards.filter((card) => {
    console.log(card.formats.includes('Standard'));
  });

  // console.log(cards);

  /*//STANDARD RULES
  1. 40 STANDARD CARDS card.formats contains standard
  3. only 6 champion cards supertype = Champion, type == unit
  4. only two regions ( including runeterran champions)

  jax = card.subtype[0] = 'WEAPONMASTER'
  neeko = card.subtype[0].findIndex() != -1 (using method on array with neeko origin)
  bard = any card that plants chimes
  evelynn = card.supertype != champion && card.description.indexOf('summon a random husk') != -1
  jhin = followers with skills
  ryze = non targeted burst and focus spells
  varus = card.subtype[0] = 'CULTIST'
  kayn = card.subtype[0] = 'CULTIST'
  poro king = card.supertype != champion && card.description.indexOf('poro') != -1
  aatrox = card.supertype != champion && card.subtype[0] = 'DARKIN'

  filtering rules
  1. filter out rarity = none (gets rid of tokens)
  2. filter champions > get a random champion
  3. check for runeterran champion

  */

  cards = cards.filter(
    (card) => card.supertype != 'Champion' && card.subtypes[0] == 'WEAPONMASTER'
  );
  console.log(cards.length);
  return deck;
};

RandomDeckGenerator();

module.exports = RandomDeckGenerator;
