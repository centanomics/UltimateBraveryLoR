import * as React from 'react';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
// import * as styles from '../components/index.module.css';

import RandomDeckGenerator from '../../util/RandomDeckGenerator';
import DeckCodeGenerator from '../../util/DeckCodeGenerator';
import { useState } from 'react';

const IndexPage = () => {
  const [deck, setDeck] = useState(null);
  const [deckCode, setDeckCode] = useState('');
  const generateDeckCode = async () => {
    const getDeck = await RandomDeckGenerator();
    const getDeckCode = await DeckCodeGenerator(getDeck);
    setDeck(getDeck);
    setDeckCode(getDeckCode);
  };
  return (
    <Layout>
      <h1>Welcome to Ultamite Bravery LOR</h1>
      <button onClick={generateDeckCode}>LET'S GO</button>
      <div>{deckCode !== '' && deckCode !== null ? <p>{deckCode}</p> : ''}</div>
      <div>
        {!deck ? (
          ''
        ) : (
          <div>
            {deck.map((card) => (
              <p>
                {card.code} : {card.count}
              </p>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Ultamite Bravery LOR' />;

export default IndexPage;
