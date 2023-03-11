import React from "react";
import { Blog, Possibility, Features, WhatGPT3, Header, Footer } from './containers';
import { CTA, Brand, Navbar} from './modules'
import './app.css'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
