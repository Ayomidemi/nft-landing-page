import './App.scss';
import React from 'react'
import Home from './components/Home';
// import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';
import About from './components/About';
import Showcase from './components/Showcase';
import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';




const App = () => {
  return (

    <div className='contain'>
   {/* <Navbar /> */}
   <Home > </Home>
   <About />
   <Roadmap />
   <Showcase />
   <Team />
   <Faq />
   <Footer />
   <ScrollButton />

   </div>
  )
}

export default App
