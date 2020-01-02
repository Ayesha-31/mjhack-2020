import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout/Layout"
import Topbar from "../components/Topbar/Topbar"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>MJ Hack Revolution 2020</title>
    </Helmet>
    <Topbar />
  </Layout>
)

export default IndexPage
