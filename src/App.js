import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeOne from './components/HomeOne';
import AOS from 'aos';
import Header from './components/Header';
import Client from './components/Client';
import Cta from './components/Cta';
import Footer from './components/Footer';
import FooterData from './components/FooterWidgets/FooterData';

import './App.css';

function App() {
  AOS.init();
  
  return (
    <div className="main-wrapper">
        <Router>
            <Header/>
              <Route exact path="/" render={props => (
                  <React.Fragment>
                      <HomeOne/>
                  </React.Fragment>
              )} />
            
            <Client/>
            <Cta CtaTitle="Create your web3 username today!" CtaDec="We make register, hosting and managing domain for yourself or others easy and affordable, because the internet needs people" CtaBtnText="Get Started" ctaLink=".#" />
            <Footer FooterData={FooterData}/>
        </Router>
    </div>
  );
  
}

export default App;
