import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Faculty from './components/Faculty';
import Campus from './components/Campus';
import Admissions from './components/Admissions';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Faculty />
      <Campus />
      <Admissions />
      <News />
      <Footer />
    </div>
  );
}

export default App;