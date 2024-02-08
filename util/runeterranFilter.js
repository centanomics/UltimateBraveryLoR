// use to generate card list for runeterran regions
const runeterran = require('./runeterran');

const jaxCards = async (cards) => {
  // jax filter
  cards = cards.filter(
    (card) =>
      card.supertype !== 'Champion' && card.subtypes[0] === 'WEAPONMASTER'
  );
  return cards;
};

const neekoCards = async (cards) => {
  // neeko filter
  cards = cards.filter(
    (card) =>
      card.supertype !== 'Champion' &&
      card.type === 'Unit' &&
      card.subtypes.filter(
        (subtype) => runeterran.neekoSubtypes.indexOf(subtype) !== -1
      ).length !== 0
  );

  return cards;
};

const bardCards = async (cards) => {
  // bard filter
  cards = cards.filter(
    (card) =>
      card.supertype !== 'Champion' &&
      (card.associatedCardRefs.indexOf('06RU001T3') !== -1 ||
        card.cardCode === '07BC020')
  );
  return cards;
};

const evelynnCards = async (cards) => {
  // evelynn filter
  cards = cards.filter(
    (card) =>
      card.supertype !== 'Champion' &&
      card.descriptionRaw.toLowerCase().indexOf('summon a random husk') !== -1
  );
  return cards;
};

const jhinCards = async (cards, allCards) => {
  // jhin filter
  cards = cards.filter((card) => {
    let validCard = false;
    if (card.rarity !== 'Champion' && card.type === 'Unit') {
      card.associatedCardRefs.map((ref) => {
        let refCard = allCards.find((element) => element.cardCode === ref);
        if (
          refCard.keywords.indexOf('Skill') !== -1 &&
          refCard.type === 'Ability'
        ) {
          validCard = true;
        }
        return null;
      });
    }
    return validCard;
  });
  return cards;
};

const ryzeCards = async (cards) => {
  // ryze filter
  cards = cards.filter(
    (card) => runeterran.ryzeCards.indexOf(card.cardCode) !== -1
  );
  return cards;
};

const varusCards = async (cards) => {
  // varus filter
  cards = cards.filter(
    (card) => card.supertype !== 'Champion' && card.subtypes[0] === 'CULTIST'
  );
  return cards;
};

const kaynCards = async (cards) => {
  // kayn filter
  cards = cards.filter(
    (card) => card.supertype !== 'Champion' && card.subtypes[0] === 'CULTIST'
  );
  return cards;
};

const poroCards = async (cards) => {
  // poro king filter
  cards = cards.filter(
    (card) =>
      card.supertype !== 'Champion' &&
      (card.descriptionRaw.toLowerCase().indexOf('poro') !== -1 ||
        card.name.toLowerCase().indexOf('poro') !== -1 ||
        card.subtypes[0] === 'PORO')
  );
  return cards;
};

const aatroxCards = async (cards) => {
  // aatrox filter
  cards = cards.filter(
    (card) => card.supertype !== 'Champion' && card.subtypes[0] === 'DARKIN'
  );
  return cards;
};

const edCards = async (cards) => {
  //eddie filter
  cards = cards.filter(
    (card) =>
      card.supertype !== 'Champion' && card.type === 'Unit' && card.cost >= 6
  );
  return cards;
};

const runeterranFilter = async (cards, champion, allCards) => {
  let runeterranCards = [];
  switch (champion) {
    case 'JAX':
      runeterranCards = await jaxCards(cards);
      break;
    case 'NEEKO':
      runeterranCards = await neekoCards(cards);
      break;
    case 'BARD':
      runeterranCards = await bardCards(cards);
      break;
    case 'EVELYNN':
      runeterranCards = await evelynnCards(cards);
      break;
    case 'JHIN':
      runeterranCards = await jhinCards(cards, allCards);
      break;
    case 'RYZE':
      runeterranCards = await ryzeCards(cards);
      break;
    case 'VARUS':
      runeterranCards = await varusCards(cards);
      break;
    case 'KAYN':
      runeterranCards = await kaynCards(cards);
      break;
    case 'THE PORO KING':
      runeterranCards = await poroCards(cards);
      break;
    case 'AATROX':
      runeterranCards = await aatroxCards(cards);
      break;
    case 'ELDER DRAGON':
      runeterranCards = await edCards(cards);
      break;
    default:
      break;
  }

  // console.log(runeterranCards.length);
  return runeterranCards;
};

module.exports = runeterranFilter;
