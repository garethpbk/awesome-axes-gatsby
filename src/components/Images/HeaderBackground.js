import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const HeaderBackground = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default HeaderBackground;
