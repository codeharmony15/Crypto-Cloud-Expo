import React from 'react';
import Header from './pages/header';
import Footer from './pages/footer';
import RightContent from './components/RightContent';
import Home from './pages/home';
import About from './pages/about';
import Counter from './pages/counter';
import Attend from './pages/attend';
import Video from './pages/video/temp';
import Slider from './pages/slider';
import Exhibit from './pages/exhibit';
import Insight from './pages/insight';
import Speaker from './pages/speaker';
import Sponsor from './pages/sponsor';
import Partner from './pages/partner';
import Agenda from './pages/agenda';
import FloorPlan from './pages/floorplan';
import Map from './pages/map';
import Team from './pages/team';
import Contact from './pages/contact';
function App() {
  return (
 
    <div style={{overflow: 'hidden'}}>
      <Header />
      <Home />
      <About />
      <Counter />
      <Attend />
      <Video />
      <Slider />
      <Exhibit />
      <Insight />
      <Speaker />
      <Sponsor />
      <Partner />
      <Agenda />
      <FloorPlan />
      <Map />
      <Team />
      <Contact />
      <RightContent />
      <Footer/>
    </div>
  );
}

export default App;
