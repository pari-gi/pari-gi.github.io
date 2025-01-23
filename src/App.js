import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Connect from './Components/Connect';
import Divider from './Components/Divider';
import Body from './Components/Body';
import Carousel from './Components/Carousel';

import About from './Pages/About';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Connect />
            <Divider text="UI/UX Portfolio" id="portfolio"/>
            <Body />
            <Divider text="Art" id="art" />
            <Carousel />
            <Footer /> 
          </>
        } />
        <Route path="/about" element={<About />} />  {/* About Me Page */}
      </Routes>
    </Router>
  );
};


// export default App;
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Banner />
//       <Connect />
//       <Divider text="UI/UX Portfolio" id="portfolio"  />
//       <Body />
//       <Divider text="Art" id="art"/>
//       <Carousel />
      
//     </div>
//   );
// };

export default App;