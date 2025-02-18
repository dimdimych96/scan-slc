import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://i.pinimg.com/736x/40/6c/11/406c11371e69ee29b80f4c9722e0c020.jpg?format=jpg&name=large"
      />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage