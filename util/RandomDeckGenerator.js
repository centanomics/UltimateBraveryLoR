// const { GetCards } = require('./GetCards');
const runeterranFilter = require('./runeterranFilter');
const runeterran = require('./runeterran');
const { Card } = require('runeterra');
const RandomDeckGenerator = async (allCards, format) => {
  const deck = [];
  let deckRegions = [];
  let hasRuneterran = false;
  let maxCards = 3;
  let maxChamps = 6;
  let maxRegions = 2;

  // removes cards that dont have a rarity (tokens, lvl2s, etc)
  let collectibleCards = allCards.filter((card) => card.collectible);

  // filters to the format specified
  let cards = null;

  //singleton is presumed to be eternal pls god dont let there be standard singleton
  switch (format) {
    case 'Standard':
      cards = collectibleCards.filter(
        (card) => card.formats.indexOf('Standard') !== -1
      );
      break;
    case 'Eternal':
      cards = collectibleCards;
      break;
    case 'Singleton':
      cards = collectibleCards;
      maxCards = 1;
      maxRegions = 3;
      break;
    case 'Commons Only':
      cards = collectibleCards.filter(
        (card) => card.rarity === 'COMMON' || card.rarity === 'Champion'
      );
      maxChamps = 4;
      break;
    case 'Even Cost Cards':
      cards = collectibleCards.filter((card) => card.cost % 2 === 0);
      break;
    default:
      break;
  }

  //filter by champions (6 max, 3-3 split for standard/eternal/even cost)
  let champCards = cards.filter((card) => card.supertype === 'Champion');
  let champCount = 0;
  while (champCount < maxChamps) {
    //rng choose a champion
    // add 3 of that champ card to the deck list
    // add a region (check runeterran >> multi region >> rest)
    // remove the champion from the list of champ cards
    let rngChamp = champCards[Math.floor(Math.random() * champCards.length)];
    console.log(rngChamp.name, rngChamp.regions);
    const newCard = new Card();
    newCard.code = rngChamp.cardCode;
    newCard.count =
      format === 'Singleton' ? 1 : format === 'Commons Only' ? 2 : 3;
    console.log('Region Count:', deckRegions.length);

    if (deckRegions.length < maxRegions) {
      // if max regions are not reached yet adds the region to the list
      //checks for regions runeterra first then multiregion then single region
      // then adds the card
      if (rngChamp.regions[0] === 'Runeterra') {
        deckRegions.push(rngChamp.name.toUpperCase());
        hasRuneterran = true;
      } else if (rngChamp.regions.length === 2) {
        deckRegions.push(rngChamp.regions[Math.floor(Math.random() * 2)]);
      } else {
        deckRegions.push(rngChamp.regions[0]);
      }
      deck.push(newCard);
      champCount += newCard.count;
      champCards = champCards.filter((card) => card.name !== rngChamp.name);
      console.log(champCount, maxChamps);
      continue;
    } else {
      // once max regions have been hit, filters the champion list into those regions
      // champCards.filter(
      //   (card) =>
      //     card.regions.includes(deckRegions[0]) ||
      //     card.regions.includes(deckRegions[1]) ||
      //     card.regions.includes(deckRegions[2])
      // );
    }

    // console.log();

    // else it checks if the generated champ is in the region list
    // then if so adds the card
    // let inRegion = false;
    // for (let i = 0; i < rngChamp.regions.length; i++) {
    //   if (deckRegions.indexOf(rngChamp.regions[i] !== -1)) {
    //     inRegion = true;
    //   }
    // }
    // console.log(inRegion);
    if (rngChamp.regions.some((r) => deckRegions.includes(r))) {
      deck.push(newCard);
      champCount += newCard.count;
      champCards = champCards.filter((card) => card.name !== rngChamp.name);
      console.log(champCount, maxChamps);
    }
  }

  //removes duplicates if two of the same region were chosen
  deckRegions = [...new Set(deckRegions)];
  console.log(deckRegions);
  console.log('-------------');

  //sorts the cards by regions before rnging the last 36
  let filteredCards = [];
  if (hasRuneterran) {
    for (let i = 0; i < deckRegions.length; i++) {
      if (runeterran.runeterranChamps.indexOf(deckRegions[i]) !== -1) {
        let tempCards = await runeterranFilter(cards, deckRegions[i], allCards);
        filteredCards = filteredCards.concat(tempCards);
      } else {
        let tempCards = cards.filter(
          (card) => card.regions.indexOf(deckRegions[i]) !== -1
        );
        filteredCards = filteredCards.concat(tempCards);
      }
    }
  } else {
    for (let i = 0; i < deckRegions.length; i++) {
      let tempCards = cards.filter(
        (card) => card.regions.indexOf(deckRegions[i]) !== -1
      );
      filteredCards = filteredCards.concat(tempCards);
    }
  }
  // console.log(filteredCards);
  filteredCards = [...new Set(filteredCards)];
  filteredCards = filteredCards.filter((card) => card.supertype !== 'Champion');

  //rngs the last 36 cards. checks if card exists in the deck before adding it
  //
  let i = maxChamps;
  while (i < 40) {
    let card = filteredCards[Math.floor(Math.random() * filteredCards.length)];
    let deckCard = deck.filter((dCard) => dCard.code === card.cardCode);
    if (deckCard.length === 0) {
      let newCard = new Card();
      newCard.code = card.cardCode;
      newCard.count = 1;
      deck.push(newCard);
    } else {
      if (format === 'Singleton') continue;

      let newCard = deckCard[0];
      let index = deck.indexOf(newCard);
      newCard.count++;
      if (newCard.count !== maxCards) {
        deck[index] = newCard;
      } else {
        continue;
      }
    }
    let count = 0;
    deck.map((card) => (count += card.count));
    i = count;
  }

  return deck;
};

module.exports = RandomDeckGenerator;
