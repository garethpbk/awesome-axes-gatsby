import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

// import components
import Header from "../Header";

// import styled components
import { Container, CustomProperties, GlobalStyles } from "../styled";

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
      <CustomProperties />
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
