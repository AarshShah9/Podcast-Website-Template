import "./App.css";
import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";
import Episodes from "./components/pages/episodes";
import Team from "./components/pages/team";
import Sponsors from "./components/pages/sponsors";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Episodes":
      component = <Episodes />;

      break;
    case "/Team":
      component = <Team />;

      break;
    case "/Sponsors":
      component = <Sponsors />;
      break;
    default:
      component = <App />;
  }
  return (
    <div>
      <Header />
      <>
        <Navbar />
        {component}
      </>
    </div>
  );
}

export default App;
