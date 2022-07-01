import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>What the hell?</p>
      <StaticImage
        src="../images/opossom.jpg"
        alt="an opossum under a canoe"
        placeholder="blurred"
      />
    </Layout>
  )
}

export default IndexPage
