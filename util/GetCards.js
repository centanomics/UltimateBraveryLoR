const GetCards = async () => {
  const set1response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set1/2dec1cb63cb35d9014710dfc9f05d71fb9972b3a/data/set1-en_us.json'
  );
  const set1 = await set1response.json();

  const set2response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set2/297dbe8ae054655e931735d6ca360c9021c0202b/data/set2-en_us.json'
  );
  const set2 = await set2response.json();

  const set3response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set3/036dcf83fb15fdfadba46e6662d08209aba3ae58/data/set3-en_us.json'
  );
  const set3 = await set3response.json();

  const set4response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set4/0596b0cbcb8a4be834b9c4c6c0ea381d8cbaaa52/data/set4-en_us.json'
  );
  const set4 = await set4response.json();

  const set5response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set5/2086b892c51854359fcdbf405a2c18c25419b7ef/data/set5-en_us.json'
  );
  const set5 = await set5response.json();

  const set6response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set6/930b87768497d99f829c33fc833fd59f78ffa770/data/set6-en_us.json'
  );
  const set6 = await set6response.json();

  const set6cderesponse = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set6CDE/a43273cac2a5aef404b9ab0882c1215b5718c5e8/data/set6cde-en_us.json'
  );
  const set6cde = await set6cderesponse.json();

  const set7response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set7/999f5a4ae46e3ff5e5d96ac24c7f2b50df2afe80/data/set7-en_us.json'
  );
  const set7 = await set7response.json();

  const set7bresponse = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set7B/83cc2395de6e2b97e85ed45d6861e9e9fe92ddb0/data/set7b-en_us.json'
  );
  const set7b = await set7bresponse.json();

  const set8response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set8/f30c013728808ad0206542c47e6e0c582203bd41/data/set8-en_us.json'
  );
  const set8 = await set8response.json();

  const set9response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set9/c50c40f9497ab22096a8cff8c86b23ff198be590/data/set9-en_us.json'
  );
  const set9 = await set9response.json();

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
    ...set9,
  ];
  return cards;
};

// GetCards()

module.exports.GetCards = GetCards;
