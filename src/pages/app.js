import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import EeStatus from "../components/eeStatus"

const App = () => (
  <Layout>
    <h2>Logged In Page/App</h2>
    <Router>
      <PrivateRoute path="/app/status" component={EeStatus} />
    </Router>
  </Layout>
)
export default App
