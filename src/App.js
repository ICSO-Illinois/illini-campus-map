// @flow

import Leaflet from 'leaflet'
import React, { StrictMode } from 'react'
import './App.css'
import SearchAppBar from "./appbar"
import Container from '@material-ui/core/Container';
import CampusMap from "./campus";


Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const App = () => (
    <StrictMode>
        <h1>Place Holder</h1>
        {SearchAppBar([])}
        <Container maxWidth={'md'}>
            <h1 align={'left'}>校园地标与（部分）宿舍一览</h1>
            <div><CampusMap /></div>
            <h1>宿舍介绍</h1>
        </Container>
    </StrictMode>
);

export default App
