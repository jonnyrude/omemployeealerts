import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import EeStatus from "../components/eeStatus"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/status" component={EeStatus} />
    </Router>
  </Layout>
)
export default App
