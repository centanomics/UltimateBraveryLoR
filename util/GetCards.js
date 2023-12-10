const GetCards = async () => {
  const set1response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set1/c9bc36367c5736aa0c772e04d489fad87107ec21/data/set1-en_us.json'
  );
  const set1 = await set1response.json();

  const set2response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set2/df912aabd70f388099a67d8e7b56811b6f5b7df1/data/set2-en_us.json'
  );
  const set2 = await set2response.json();

  const set3response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set3/fc6b3419889b4be0b967ef6d7b5c244068df19b5/data/set3-en_us.json'
  );
  const set3 = await set3response.json();

  const set4response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set4/f828290079c556a05135d815fac7306167c4f70f/data/set4-en_us.json'
  );
  const set4 = await set4response.json();

  const set5response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set5/bbc9f881f4c6f34f8e2747c1b0182c4382aef988/data/set5-en_us.json'
  );
  const set5 = await set5response.json();

  const set6response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set6/1035afc3ed1a0ccfe11fda9c4c3db7ecaa5d3a14/data/set6-en_us.json'
  );
  const set6 = await set6response.json();

  const set6cderesponse = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set6CDE/4c2b67e7430d155e351209bcb35fe9c0b66da8ca/data/set6cde-en_us.json'
  );
  const set6cde = await set6cderesponse.json();

  const set7response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set7/d63521a4bf8ad2e04ec6e2f16ddf22f52d4e8a00/data/set7-en_us.json'
  );
  const set7 = await set7response.json();

  const set7bresponse = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set7B/7ded6b8eb0dac07d0a5cbe3132b518502ea7485e/data/set7b-en_us.json'
  );
  const set7b = await set7bresponse.json();

  const set8response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set8/e3d978a10447fc811dd8f2bfb40e6351180edc80/data/set8-en_us.json'
  );
  const set8 = await set8response.json();

  const cards = [
    ...set1,
    ...set2,
    ...set3,
    ...set4,
    ...set5,
    ...set6,
    ...set6cde,
    ...set7,
    ...set7b,
    ...set8,
  ];
  return cards;
};

// GetCards()

module.exports.GetCards = GetCards;
