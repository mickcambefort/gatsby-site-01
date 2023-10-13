import * as React from 'react'
import Layout from "../components/Layout";
import {StaticImage} from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/img-01.jpg"
            />
        </Layout>
    )
}
export const Head = () => <title>About Me</title>
export default AboutPage