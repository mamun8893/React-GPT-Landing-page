import "./App.css";
import { Navbar, Brand, Cta } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Posibility,
  WhatGpt3,
} from "./container";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
