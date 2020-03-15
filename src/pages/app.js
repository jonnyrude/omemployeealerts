import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import { navigate } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"
import PrivateHeader from "../components/privateHeader"
import EeStatus from "../components/eeStatus"
import Login from "../components/login.js"
import AppHome from "../components/appHome"

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
      <PrivateHeader />
      {/*<div>
        <h2>Logged In Page/App</h2>
        {/* {useIdentityContext().isLoggedIn && <button> Logout </button>}
      </div> */}
      <Router>
        <PrivateRoute path="/app/home" component={AppHome} />
        <PrivateRoute path="/app/status" component={EeStatus} />
      </Router>
      <Login />
      <footer></footer>
    </Layout>
  )
}

export default App
