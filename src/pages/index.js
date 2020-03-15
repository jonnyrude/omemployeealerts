import React from "react"
import { Link } from "gatsby"
import { Button } from "antd"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>No delays currently</h1>
    <p>
      As of: 3/11/2020 2:45 PM <br />
      There are no delays.
      <br />
      <br />
      Be sure to refresh the page for the latest information.
    </p>

    <Button type="primary">
      <Link to="/app">Login to see more information</Link>
    </Button>
  </Layout>
)

export default IndexPage
