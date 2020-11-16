import React, { Component } from "react";
import { RoomContext } from "../../utilities/context";

import Room from "./Room/Room.js";
import ShowRooms from "./Room/ShowRooms.js";

import './FeaturedRooms.css';

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let { loading, featuredRooms: rooms } = this.context;

        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });

        return (
            <ShowRooms rooms={rooms} loading={loading} />
        );
    }
}
