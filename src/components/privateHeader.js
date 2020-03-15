import React from "react"
import { Link } from "gatsby"
import { useIdentityContext } from "react-netlify-identity"
import { Layout, Menu } from "antd"

const { Header } = Layout

const PrivateHeader = () => {
  const identity = useIdentityContext()

  return (
    <Header>
      <div
        className="logo"
        style={{
          color: "white",
          width: "150px",
          float: "left",
          fontWeight: "bold",
        }}
      >
        PRIVATE OM INFO:
      </div>
      {identity.isLoggedIn && (
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/app/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/app/status">Employee Status</Link>
          </Menu.Item>
        </Menu>
      )}
    </Header>
  )
}

export default PrivateHeader
