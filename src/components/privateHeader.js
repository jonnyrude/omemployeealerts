import React from "react"
import { Link } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"

const PrivateHeader = () => {
  const identity = useIdentityContext()
  return (
    <div>
      <h2>Private OM Content</h2>
      {identity.isLoggedIn && (
        <nav>
          <ul>
            <li>
              <Link to="/app/status">Employee Status</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default PrivateHeader
