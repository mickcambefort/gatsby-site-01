import * as React from 'react'
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const BlogPage = ({ data }) => {
    const nodes = data.allFile.edges.map(edge => edge.node);

    return (
        <Layout pageTitle="My Blog Page">
            <ul>
                {nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
  allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
    edges {
      node {
        name
      }
    }
  }
}
`

export const Head = () => <Seo title="My Blog Page" />

export default BlogPage