import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making a Gatsby site via tutorial.</p>
      <StaticImage
        alt="an opossum under a canoe"
        src="../images/opossom.jpg"
      />
    </Layout>
  )
}

export default IndexPage
