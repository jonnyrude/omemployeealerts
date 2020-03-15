import React from "react"
import { navigate } from "gatsby"
import { useNetlifyIdentity } from "react-netlify-identity-widget"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const identity = useNetlifyIdentity("https://omemployees.com/")

  if (!identity.isLoggedIn) {
    navigate("/")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute
