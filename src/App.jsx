import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Docs from './components/Docs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light overflow-x-hidden w-full max-w-full">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Gallery />
      <Docs />
      <Footer />
    </div>
  );
}

export default App;
