import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

import Router from "./Router"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
