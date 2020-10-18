import React, { Component } from 'react';
import Map from './globe_map.js';
import Header from './header.js';
import Footer from './footer.js';
import ToggleMsg from './toggle_msg.js'
import NeoCollapsibleHeader from './neo_collapsible_header';
import ApodCollapsibleHeader from './apod_collapsible_header';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <Header />
        <Map />
        <ToggleMsg />
        <ApodCollapsibleHeader />
        <NeoCollapsibleHeader />
        <Footer />
      </div>
      </>
  );
 }
}
