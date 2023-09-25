import { BrowserRouter } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Router from "./Router"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
