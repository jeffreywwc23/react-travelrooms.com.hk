import React from 'react';
import Title from "../../Title/Title";
import Loading from "../../Loading/Loading";

export default function ShowRooms({ loading, rooms }) {
    return (
        <section className="featured-rooms">
            <Title title="Rooms" className="featured-rooms-title" />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms}
            </div>

            <div className="featured-rooms-button">
                <a href='/rooms'>
                    <button className="btn-primary" >
                        More
                    </button>
                </a>
            </div>
        </section>
    )
}
