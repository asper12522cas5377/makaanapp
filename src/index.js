import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Property from "./pages/Property";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import PropertyList from "./pages/PropertyList";
import PropertyType from "./pages/PropertyType";
import PropertyAgent from "./pages/PropertyAgent";
import Testimonial from "./pages/Testimonial";
import Error from "./pages/404Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="property" element={<Property />} />
          <Route path="pages" element={<Pages />} />
          <Route path="contact" element={<Contact />} />
          <Route path="propertylist" element={<PropertyList />} />
          <Route path="propertytype" element={<PropertyType />} />
          <Route path="propertyagent" element={<PropertyAgent />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="error" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const r1 = ReactDom.createRoot(document.getElementById('root'))
r1.render(<App />)