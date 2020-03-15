import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <h1>No delays currently</h1>
    <p>
      As of: 3/11/2020 2:45 PM <br />
      There are no delays.
      <br />
      <br />
      Be sure to refresh the page for the latest information.
    </p>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/app/status">Go to Employee Status</Link>
  </Layout>
)

export default IndexPage
