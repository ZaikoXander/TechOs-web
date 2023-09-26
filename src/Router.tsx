import { Route, Routes } from "react-router-dom"

import PageNotFound from "./pages/PageNotFound"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import ProjetoContainer from "./pages/ProjetoContainer"

function Router() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/project" element={ <ProjetoContainer />} />
    </Routes>
  )
}

export default Router
