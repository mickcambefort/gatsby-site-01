import * as React from 'react'
import {graphql} from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"

const BlogPost = ({ data, children}) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost
