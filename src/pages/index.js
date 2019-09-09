import React from "react";
import { Link } from "gatsby";

import { Carousel, Layout, SEO } from "../components";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
  </Layout>
);

export default IndexPage;
