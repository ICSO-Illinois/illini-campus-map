// @flow

import Leaflet from 'leaflet'
import React, { StrictMode } from 'react'
import './App.css'
import CampusMap from './campus'
import SearchAppBar from "./appbar"

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const App = () => (
    <StrictMode>
        <div><SearchAppBar/></div>
        <h1>Illini Campus Map</h1>
        <h2><CampusMap/></h2>
    </StrictMode>
);

export default App
