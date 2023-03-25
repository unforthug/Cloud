import './App.css';
import React from 'react'

import IntroSection from './Components/intro/Intro'
import ContactSection from './Components/contact-section/ContactSection'
import MapSection from './Components/map/Map' // import the map here
import DisclaimerSection from './Components/disclaimer/Disclaimer'
import FooterSection from './Components/footer/Footer'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier

function App() {
  return (
<div className="App">
    <IntroSection />
    <ContactSection />
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
    <DisclaimerSection />
    <FooterSection />
  </div>
  );
}

export default App;
