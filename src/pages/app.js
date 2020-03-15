import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"
import { Layout as AntLayout } from "antd"
import PrivateHeader from "../components/privateHeader"
import EeStatus from "../components/eeStatus"
import Login from "../components/login.js"
import AppHome from "../components/appHome"

const { Content } = AntLayout

const App = () => {
  const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const identity = useIdentityContext()

    if (!identity.isLoggedIn || !identity.user) {
      navigate("/app")
      return null
    }
    return <Component {...rest} />
  }

  return (
    <Layout>
      <AntLayout>
        <PrivateHeader />
        <Content style={{ padding: "0 50px", marginTop: 20 }}>
          <Router>
            <PrivateRoute path="/app/home" component={AppHome} />
            <PrivateRoute path="/app/status" component={EeStatus} />
          </Router>

          <Login />
        </Content>
      </AntLayout>
    </Layout>
  )
}

export default App
