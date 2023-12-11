/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `1000px`,
          maxHeight: `100%`,
          padding: `var(--size-gutter)`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-between`,
        }}
      >
        <main
          style={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
          }}
        >
          {children}
        </main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
          {` `}
          Ultimate Bravery LOR isn't endorsed by Riot Games and doesn't reflect
          the views or opinions of Riot Games or anyone officially involved in
          producing or managing Legends of Runeterra. Legends of Runeterra and
          Riot Games are trademarks or registered trademarks of Riot Games, Inc.
          Legends of Runeterra © Riot Games, Inc.
        </footer>
      </div>
    </>
  );
};

export default Layout;
