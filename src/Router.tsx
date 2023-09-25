import { Route, Routes } from "react-router-dom"

import PageNotFound from "./pages/PageNotFound"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"

function Router() {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
    </Routes>
  )
}

export default Router
