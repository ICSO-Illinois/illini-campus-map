// @flow

import Leaflet from 'leaflet'
import React, { StrictMode } from 'react'
import './App.css'
import SearchAppBar from "./appbar"
import Container from '@material-ui/core/Container';
import CampusMap from "./campus";
import Typography from "@material-ui/core/Typography";

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const App = () => (
    <StrictMode>
        {SearchAppBar([])}
        <CampusMap/>
    </StrictMode>
);

export default App
