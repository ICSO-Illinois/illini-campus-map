// @flow

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

type State = {
    lat: number,
    lng: number,
    zoom: number,
}

export default class SimpleExample extends Component<{}, State> {
    state = {
        lat: 40.1095876,
        lng: -88.2275806,
        zoom: 20,
    };

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        This is Illini Union.
                    </Popup>
                </Marker>
            </Map>
        )
    }
}
