import React from "react"
import { useIdentityContext } from "react-netlify-identity"
import { navigate } from "gatsby"
import { Button, Form, Input } from "antd"

const SignUp = () => {
  const identity = useIdentityContext()
  const formRef = React.useRef()
  const [msg, setMsg] = React.useState("")

  const signUp = values => {
    const email = values.email
    const password = values.password
    identity
      .signupUser(email, password)
      .then(user => {
        console.log("Success! Signed up", user)
        navigate("/app/home")
      })
      .catch(err => console.error(err) || setMsg("Error: " + err.message))
  }

  return (
    <div>
      SIGNUP:
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 12 }}
        name="login"
        ref={formRef}
        onFinish={values => {
          signUp(values)
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
}

export default SignUp
