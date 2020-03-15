/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import IdentityModal, { // for Netlify Identity - https://github.com/sw-yx/react-netlify-identity-widget
//   IdentityContextProvider,
// } from "react-netlify-identity-widget"
import { IdentityContextProvider } from "react-netlify-identity"
import "react-netlify-identity-widget/styles.css"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const url = "https://omemployees.com"
  return (
    <>
      {/* IdentityContectProvider is used for login
       * Login managed in login component
       */}
      <IdentityContextProvider url={url}>
        <Header siteTitle={`OM Employee Alerts`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
      </IdentityContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
