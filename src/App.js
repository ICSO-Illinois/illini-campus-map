// @flow

import Leaflet from 'leaflet'
import React, { StrictMode } from 'react'
import './App.css'
import SearchAppBar from "./appbar"
import Container from '@material-ui/core/Container';
import CampusMap from "./campus";
import DormReviewCard from "./dorms";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";

import GridList from "@material-ui/core/GridList";
import Typography from "@material-ui/core/Typography";
import GridListTile from "@material-ui/core/GridListTile";

import CenteredTabs from "./tabs";

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

const App = () => (
    <StrictMode>
        <h1>Place Holder</h1>
        {SearchAppBar([])}
        <Container>
            <h1>校园地标与（部分）宿舍一览</h1>
            <div><CampusMap /></div>
            <h1>宿舍介绍</h1>
        </Container>
    </StrictMode>
);

export default App
