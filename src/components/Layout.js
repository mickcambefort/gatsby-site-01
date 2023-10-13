import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container } from './layout.module.css'

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
    query  {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)
    console.log(data)
    return (
        <div className={container}>
            <header>{data.site.siteMetadata.title}</header>
            <nav>
                <ul>
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout