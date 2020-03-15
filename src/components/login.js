import React, { useState } from "react"
// import { Link } from "gatsby"
// import IdentityModal, {
//   useNetlifyIdentity,
// } from "react-netlify-identity-widget"
import { useIdentityContext } from "react-netlify-identity"
import { navigate } from "gatsby"

const Login = () => {
  const [showDialog, setShowDialog] = useState(false)
  // TO GET USER LOGIN STATUS/DATA, use:
  const identity = useIdentityContext()
  const formRef = React.useRef()
  const [msg, setMsg] = useState("")

  // const identity = useNetlifyIdentity("https://omemployees.com/")

  if (!identity.isLoggedIn || !identity.user) {
    return (
      <div>
        {/* IdetntyModal should always render, toggle showDialog to show/hide login prompt */}
        {/* <IdentityModal
        showDialog={showDialog}
        onCloseDialog={() => setShowDialog(false)}
      /> */}

        {/* LOGIN FORM */}
        <form
          ref={formRef}
          onSubmit={e => {
            e.preventDefault()
            const email = e.target.email.value
            const password = e.target.password.value
            identity
              .loginUser(email, password, true)
              .then(user => {
                console.log("Success! Logged in", user)
                navigate("/app/home")
              })
              .catch(
                err => console.error(err) || setMsg("Error: " + err.message)
              )
          }}
        >
          <div>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
          </div>
          <div>
            <label>
              {" "}
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <div>
            <input type="submit" value="Log in" />
            {msg && <pre>{msg}</pre>}
          </div>
        </form>

        {/* Button to toggle showDialog */}
        {/* <button onClick={e => setShowDialog(true)}>Login</button> */}
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={identity.logoutUser}>
          You are signed in. Log Out
        </button>
      </div>
    )
  }
}

export default Login
