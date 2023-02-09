import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Episodes from "./components/pages/episodes";
import Team from "./components/pages/team";
import Sponsors from "./components/pages/sponsors";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
