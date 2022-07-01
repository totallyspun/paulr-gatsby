import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="Blog Posts">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`

export default BlogPage
