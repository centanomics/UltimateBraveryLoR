import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../components/index.module.css';

const DeckPage = () => {
  <Layout>
    <h1>Welcome to Deck Page</h1>
  </Layout>;
};

export const Head = () => <Seo title='Ultamite Bravery LoR' />;

export default DeckPage;
