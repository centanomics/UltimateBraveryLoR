const { GetCards } = require('./GetCards');
const runeterranFilter = require('./runeterranFilter');
const runeterran = require('./runeterran');
const DeckCodeGenerator = require('./DeckCodeGenerator');
const { Card } = require('runeterra');
const RandomDeckGenerator = async () => {
  const deck = [];
  let deckRegions = [];
  let hasRuneterran = false;

  let allCards = await GetCards();
  // removes cards that dont have a rarity (tokens, lvl2s, etc)
  let collectibleCards = allCards.filter((card) => card.collectible);
  // removes non standard cards
  let cards = collectibleCards.filter(
    (card) => card.formats.indexOf('Standard') != -1
  );

  //filter by champions (6 max, 3-3 split)
  let champCards = cards.filter((card) => card.supertype == 'Champion');
  for (let i = 0; i < 2; i++) {
    //rng choose a champion
    // add 3 of that champ card to the deck list
    // add a region (check runeterran >> multi region >> rest)
    // remove the champion from the list of champ cards
    let rngChamp = champCards[Math.floor(Math.random() * champCards.length)];
    console.log(rngChamp.name);
    const newCard = new Card();
    newCard.code = rngChamp.cardCode;
    newCard.count = 3;
    deck.push(newCard);
    champCards = champCards.filter((card) => card.name != rngChamp.name);
    if (rngChamp.regions[0] == 'Runeterra') {
      deckRegions.push(rngChamp.name.toUpperCase());
      hasRuneterran = true;
    } else if (rngChamp.regions.length == 2) {
      deckRegions.push(rngChamp.regions[Math.floor(Math.random() * 2)]);
    } else {
      deckRegions.push(rngChamp.regions[0]);
    }
  }
  //removes duplicates if two of the same region were chosen
  deckRegions = [...new Set(deckRegions)];

  //sorts the cards by regions before rnging the last 36
  let filteredCards = [];
  if (hasRuneterran) {
    for (let i = 0; i < deckRegions.length; i++) {
      if (runeterran.runeterranChamps.indexOf(deckRegions[i]) != -1) {
        let tempCards = await runeterranFilter(cards, deckRegions[i], allCards);
        filteredCards = filteredCards.concat(tempCards);
      } else {
        let tempCards = cards.filter(
          (card) => card.regions.indexOf(deckRegions[i]) != -1
        );
        filteredCards = filteredCards.concat(tempCards);
      }
    }
  } else {
    for (let i = 0; i < deckRegions.length; i++) {
      let tempCards = cards.filter(
        (card) => card.regions.indexOf(deckRegions[i]) != -1
      );
      filteredCards = filteredCards.concat(tempCards);
    }
  }
  filteredCards = [...new Set(filteredCards)];
  filteredCards = filteredCards.filter((card) => card.supertype != 'Champion');

  // console.log(deckRegions);

  //rngs the last 36 cards. checks if card exists in the deck before adding it
  let i = 6;
  while (i < 40) {
    let card = filteredCards[Math.floor(Math.random() * filteredCards.length)];
    let deckCard = deck.filter((dCard) => dCard.code == card.cardCode);
    if (deckCard.length === 0) {
      let newCard = new Card();
      newCard.code = card.cardCode;
      newCard.count = 1;
      deck.push(newCard);
    } else {
      // console.log('hi');
      let newCard = deckCard[0];
      let index = deck.indexOf(newCard);
      newCard.count++;
      // console.log(newCard);
      if (newCard.count != 3) {
        deck[index] = newCard;
      } else {
        continue;
      }
    }
    // console.log(deck);
    let count = 0;
    deck.map((card) => (count += card.count));
    i = count;
  }
  // let finalCount = 0;
  // deck.map((card) => (finalCount += card.count));
  // console.log('final', deck);
  // const deckCode = await DeckCodeGenerator(deck);
  // console.log(deckCode);
  return deck;
};

// RandomDeckGenerator();

module.exports = RandomDeckGenerator;
