import * as React from 'react';
// import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
// import * as styles from '../components/index.module.css';

import RandomDeckGenerator from '../../util/RandomDeckGenerator';
import DeckCodeGenerator from '../../util/DeckCodeGenerator';
import { useState } from 'react';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMyCards {
        nodes {
          cards {
            collectible
            name
            assets {
              fullAbsolutePath
            }
            associatedCardRefs
            attack
            cardCode
            cost
            descriptionRaw
            formats
            health
            rarity
            regions
            subtypes
            supertype
            type
            set
            keywords
          }
        }
      }
    }
  `);
  const [deck, setDeck] = useState(null);
  const [deckCode, setDeckCode] = useState('');
  const [format, setFormat] = useState('Standard');
  const generateDeckCode = async () => {
    const getDeck = await RandomDeckGenerator(
      data.allMyCards.nodes[0].cards,
      format
    );
    const getDeckCode = await DeckCodeGenerator(getDeck);
    setDeck(getDeck);
    setDeckCode(getDeckCode);
  };
  const settingFormat = async (e) => {
    setFormat(e.target.value);
  };
  return (
    <Layout>
      <div className='main-left'>
        <h1>Welcome to Ultamite Bravery LOR</h1>
        <div>
          {deckCode !== '' && deckCode !== null ? <p>{deckCode}</p> : ''}
        </div>
        <div>
          {!deck ? (
            'The “darkest corners of Summoners Rift” brought to you in Legends of Runeterra!'
          ) : (
            <div>
              {deck.map((card) => (
                <p key={card.code}>
                  {card.code} : {card.count}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='main-right'>
        <button onClick={generateDeckCode}>LET'S GO</button>
        <div>
          <input
            type='radio'
            id='Standard'
            name='format'
            value='Standard'
            defaultChecked
            onChange={(e) => settingFormat(e)}
          />{' '}
          <label htmlFor='Standard'>Standard</label>
          <input
            type='radio'
            id='Eternal'
            name='format'
            value='Eternal'
            onChange={(e) => settingFormat(e)}
          />{' '}
          <label htmlFor='Eternal'>Eternal</label>
          <input
            type='radio'
            id='Singleton'
            name='format'
            value='Singleton'
            onChange={(e) => settingFormat(e)}
          />{' '}
          <label htmlFor='Singleton'>Singleton</label>
          <input
            type='radio'
            id='Commons Only'
            name='format'
            value='Commons Only'
            onChange={(e) => settingFormat(e)}
          />{' '}
          <label htmlFor='Commons Only'>Commons Only</label>
          <input
            type='radio'
            id='Even Cost Cards'
            name='format'
            value='Even Cost Cards'
            onChange={(e) => settingFormat(e)}
          />{' '}
          <label htmlFor='Even Cost Cards'>Even Cost Cards</label>
        </div>
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
