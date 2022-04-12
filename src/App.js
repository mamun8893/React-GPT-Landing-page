import "./App.css";
import { Navbar, Brand, Cta } from "./components";
import {
  Blog,
  Feature,
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
      <Feature />
      <Posibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
