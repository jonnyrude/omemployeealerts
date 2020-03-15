import React from "react"

const PrivateContentDiv = ({ children }) => {
  return (
    <div
      className="site-layout-content"
      style={{ marginBottom: 20, backgroundColor: "#FFF", padding: "10px" }}
    >
      {children}
    </div>
  )
}

export default PrivateContentDiv
