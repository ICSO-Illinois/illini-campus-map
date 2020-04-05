// @flow

import Leaflet from 'leaflet'
import React, { StrictMode } from 'react'

import CampusMap from './campus'

Leaflet.Icon.Default.imagePath =
    '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const App = () => (
    <StrictMode>
        <h1>Illini Campus Map</h1>
        <CampusMap />
    </StrictMode>
);

export default App
