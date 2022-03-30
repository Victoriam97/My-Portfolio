import React from "react"

import Layout from "../src/Components/Layout"

// Components
import Header from "../src/Components/Header"
import Gallery from "../src/Components/Work"
import Skills from "../src/Components/Skills"
import Footer from "../src/Components/Footer"


const App = () => (
  <Layout>
    <Header></Header>
    <Gallery></Gallery>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default App
