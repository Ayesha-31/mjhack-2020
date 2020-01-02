import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../Layout/Layout"
import Navbar from "../components/Navbar"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>MJ Hack Revolution 2020</title>
    </Helmet>
    <Navbar />
    <div style={{ height: "1000px" }}></div>
  </Layout>
)

export default IndexPage
