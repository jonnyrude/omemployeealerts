import React, { useState } from "react"
import { useIdentityContext } from "react-netlify-identity"
import { navigate } from "gatsby"
import { Button, Form, Input } from "antd"

const Login = () => {
  const [showDialog, setShowDialog] = useState(false)
  // TO GET USER LOGIN STATUS/DATA, use:
  const identity = useIdentityContext()
  const formRef = React.useRef()
  const [msg, setMsg] = useState("")

  if (!identity.isLoggedIn || !identity.user) {
    return (
      <div>
        LOGIN:
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 12 }}
          name="login"
          ref={formRef}
          onFinish={values => {
            const email = values.email
            const password = values.password
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
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input and email address" },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input a password" }]}
          >
            <Input.Password type="password" name="password" />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            {msg && <pre>{msg}</pre>}
          </Form.Item>
        </Form>
      </div>
    )
  } else {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            identity.logoutUser()
            navigate("/app")
          }}
        >
          You are signed in - Click Here to Log Out
        </Button>
      </div>
    )
  }
}

export default Login
