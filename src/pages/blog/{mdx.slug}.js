import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPost = ({data}) => {
  const image = data.mdx.frontmatter.hero_image.childrenImageSharp[0].gatsbyImageData
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    <p>{data.mdx.frontmatter.date}</p>
    <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
    <p>
      Photo Credit:&nbsp;
      <a href={data.mdx.frontmatter.hero_image_credit_link}>
        {data.mdx.frontmatter.hero_image_credit}
      </a>
    </p>
    <MDXRenderer>
      {data.mdx.body}
    </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit
        hero_image_credit_link
        hero_image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost
