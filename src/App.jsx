import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Banner from './Components/Banner/Banner';
import WhyChoose from './Components/Why Choose/WhyChoose';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Popup/Popup';
import AOS from 'aos';
import 'aos/dist/aos.css'

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const HandlePopup = () => {
    setShowPopup(true);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='overflow-x-hidden'>
      <Navbar HandlePopup={HandlePopup}/>
      <Hero />
      <Banner />
      <WhyChoose />
      <About HandlePopup={HandlePopup}/>
      <Banner />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
      
    </div>
  );
}

export default App;
