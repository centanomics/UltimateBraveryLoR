const { GetCards } = require('./GetCards');
const NeekoSubtypes = [
  'BIRD',
  'CAT',
  'DOG',
  'ELNUK',
  'FAE',
  'REPTILE',
  'SPIDER',
];
const RandomDeckGenerator = async () => {
  const deck = [];

  let allCards = await GetCards();
  // removes cards that dont have a rarity (tokens, lvl2s, etc)
  let collectibleCards = allCards.filter((card) => card.collectible);
  // removes non standard cards
  let cards = collectibleCards.filter(
    (card) => card.formats.indexOf('Standard') != -1
  );

  // console.log(cards);

  /*//STANDARD RULES
  1. 40 STANDARD CARDS card.formats contains standard
  3. only 6 champion cards supertype = Champion, type == unit
  4. only two regions ( including runeterran champions)

  jax = card.subtype[0] = 'WEAPONMASTER'
  neeko = card.subtype[0].indexOf() != -1 (using method on array with neeko origin)
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

  // jax filter
  // cards = cards.filter(
  //   (card) => card.supertype != 'Champion' && card.subtypes[0] == 'WEAPONMASTER'
  // );
  // console.log(cards.length);

  // neeko filter
  // cards = cards.filter(
  //   (card) =>
  //     card.supertype != 'Champion' &&
  //     card.type == 'Unit' &&
  //     card.subtypes.filter((subtype) => NeekoSubtypes.indexOf(subtype) != -1)
  //       .length != 0
  // );
  // cards.map((card) => console.log(card.name));
  // console.log(cards.length);

  // bard filter
  // cards = cards.filter(
  //   (card) =>
  //     card.supertype != 'Champion' &&
  //     (card.associatedCardRefs.indexOf('06RU001T3') != -1 ||
  //       card.cardCode == '07BC020')
  // );
  // console.log(cards.length);
  // cards.map((card) => console.log(card.name));

  // evelynn filter
  // cards = cards.filter(
  //   (card) =>
  //     card.supertype != 'Champion' &&
  //     card.descriptionRaw.toLowerCase().indexOf('summon a random husk') != -1
  // );
  // console.log(cards.length);

  // jhin filter
  // cards = cards.filter((card) => {
  //   let validCard = false;
  //   if (card.rarity != 'Champion' && card.type == 'Unit') {
  //     card.associatedCardRefs.map((ref) => {
  //       let refCard = allCards.find((element) => element.cardCode == ref);
  //       if (
  //         refCard.keywords.indexOf('Skill') != -1 &&
  //         refCard.type == 'Ability'
  //       ) {
  //         validCard = true;
  //       }
  //     });
  //   }
  //   return validCard;
  // });
  // console.log(cards.length);

  // ryze filter
  cards = cards.filter(
    (card) => card.supertype != 'Champion' && card.subtypes[0] == 'WEAPONMASTER'
  );
  console.log(cards.length);

  // varus filter
  // cards = cards.filter(
  //   (card) => card.supertype != 'Champion' && card.subtypes[0] == 'CULTIST'
  // );
  // console.log(cards.length);

  // kayn filter
  // cards = cards.filter(
  //   (card) => card.supertype != 'Champion' && card.subtypes[0] == 'CULTIST'
  // );
  // console.log(cards.length);

  // poro king filter
  // cards = cards.filter(
  //   (card) =>
  //     card.supertype != 'Champion' &&
  //     (card.descriptionRaw.toLowerCase().indexOf('poro') != -1 ||
  //       card.name.toLowerCase().indexOf('poro') != -1 ||
  //       card.subtypes[0] == 'PORO')
  // );
  // console.log(cards.length);

  // aatrox filter
  // cards = cards.filter(
  //   (card) => card.supertype != 'Champion' && card.subtypes[0] == 'DARKIN'
  // );
  // console.log(cards.length);

  return deck;
};

RandomDeckGenerator();

module.exports = RandomDeckGenerator;
