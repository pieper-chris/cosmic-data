import React, { Component } from 'react';
import Map from './components/globe_map.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import ToggleMsg from './components/toggle_msg.js'
import NeoCollapsibleHeader from './components/neo_collapsible_header';
import SpaceXCollapsibleHeader from './components/spacex';
import ApodCollapsibleHeader from './components/apod_collapsible_header';
import './components/App.css';

export default class App extends Component {
  render() {
    return (
      <>
      <div className="App">
        <Header />
        <Map />
        <ToggleMsg />
        <ApodCollapsibleHeader />
        <SpaceXCollapsibleHeader />
        <NeoCollapsibleHeader />
        <Footer />
      </div>
      </>
  );
 }
}
