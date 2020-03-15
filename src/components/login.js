import React, { useState } from "react"
// import { Link } from "gatsby"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"

const Login = () => {
  const [showDialog, setShowDialog] = useState(false)
  return (
    <div>
      {/* IdetntyModal should always render, toggle showDialog to show/hide login prompt */}
      <IdentityModal
        showDialog={showDialog}
        onCloseDialog={() => setShowDialog(false)}
      />

      {/* Button to toggle showDialog */}
      <button onClick={e => setShowDialog(true)}>Login</button>
    </div>
  )
}

export default Login