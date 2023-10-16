import * as React from 'react'
import {graphql, Link} from "gatsby";
import Layout from "../../components/Layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Page">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>{node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        slug
        title
        date(formatString: "MMMM D, YYYY")
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="My Blog Page" />

export default BlogPage