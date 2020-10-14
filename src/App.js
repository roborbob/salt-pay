import React from 'react';
import Header from './containers/header';
import Services from './containers/services';
import CTA_2 from './containers/cta_2';
import Specs from './containers/specs';
import CTA from './containers/cta';
import Footer from './containers/footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <CTA_2/>
      <Specs/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
