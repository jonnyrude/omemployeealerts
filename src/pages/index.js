import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <h1>No delays currently</h1>
    <p>
      As of: 2/11/2020 10:10 AM <br />
      There are no delays.
    </p>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
