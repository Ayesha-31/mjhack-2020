import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../Layout/Layout"

const AdminPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Admin | MJ Hack Revolution 2020</title>
    </Helmet>
    <h1>Admin Page!</h1>
  </Layout>
)

export default AdminPage
