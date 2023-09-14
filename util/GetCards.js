const GetCards = async () => {
  const set1response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set1/1037dfc3e2b6243522ade44a36872d5267e6f321/data/set1-en_us.json'
  );
  const set1 = await set1response.json();

  const set2response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set2/c5841b8ae3c30ed39d76316ea576207f28e143f3/data/set2-en_us.json'
  );
  const set2 = await set2response.json();

  const set3response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set3/2e7abf9bbe102b112ce608730ea618c6f7c22de5/data/set3-en_us.json'
  );
  const set3 = await set3response.json();

  const set4response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set4/d36369ddb41d6b32a08f738970ecfcce56666664/data/set4-en_us.json'
  );
  const set4 = await set4response.json();

  const set5response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set5/bed6073321a72e3b31c15fdccb8c57b2805b7db3/data/set5-en_us.json'
  );
  const set5 = await set5response.json();

  const set6response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set6/d6126d9f2ff61a52a2788d5fdf7b8021580a39b6/data/set6-en_us.json'
  );
  const set6 = await set6response.json();

  const set6cderesponse = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set6CDE/3eb8ea2ba9b982e7fe9b523ef6d2a327aeac46c6/data/set6cde-en_us.json'
  );
  const set6cde = await set6cderesponse.json();

  const set7response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set7/374c22b7b0e3daa55f70b753d974098bac8d06c4/data/set7-en_us.json'
  );
  const set7 = await set7response.json();

  const set7bresponse = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set7B/82eba84ab1e60608b09c65dc95bb2177669c4773/data/set7b-en_us.json'
  );
  const set7b = await set7bresponse.json();

  const set8response = await fetch(
    'https://raw.githubusercontent.com/InFinity54/LoR_DDragon_Set8/4c5b0fc6fd4fb0f5af37bb2a77e8cfbdf9df727c/data/set8-en_us.json'
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
