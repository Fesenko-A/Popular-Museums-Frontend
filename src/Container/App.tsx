import React from "react";
import { Footer, Header } from "../Components";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Contacts,
  Home,
  ImagesGallery,
  Museums,
  News,
  NotFound,
} from "../Pages";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/images" element={<ImagesGallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/museums" element={<Museums />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
