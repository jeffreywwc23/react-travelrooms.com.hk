import React from "react";
import { withRoomConsumer } from "../../utilities/context";
import Loading from "../Loading/Loading";
import RoomsFilter from './RoomsFilter.js';
import RoomsList from "./RoomsList";

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);