import React from 'react';
import './app.scss'
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import Skills from './pages/skills/Skills';
import Work from './pages/work/Work';
import Certificate from './pages/certificates/Certificate';
import Testimonial from './pages/testimonial/Testimonial';


function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Certificate />
      <Footer />
    </div>
  )
}

export default App;
