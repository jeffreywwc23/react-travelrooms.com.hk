import React, { Component } from 'react';
import './SingleRoom.css';

import { Link } from "react-router-dom";
import defaultBcg from "../../images/room-11.jpeg";
import Banner from "../../components/Banner/Banner";
import { RoomContext } from "../../utilities/context";
import StyledHero from "../../components/Hero/StyledHero";

class SingleRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg,
        };

        this.handleClickActiveTab = this.handleClickActiveTab.bind(this);
    }

    static contextType = RoomContext;

    handleClickActiveTab(currentTab) {
        this.setState({ activeTab: currentTab });
    }

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);

        if (!room) {
            return (
                <div className="error">
                    <h3> No such room could be found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </div>
            );
        }

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;
        const [...defaultImages] = images;

        return (
            <>
                <StyledHero img={images[0] || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>

                <div className="single-room-image-container">
                    {defaultImages.map((item, index) => (
                        <div className="single-room-image-card" key={index} >
                            <img src={item} alt={name} />
                        </div>
                    ))}
                </div>

                <div className="single-room-info-container">
                    <section id="single-room-info-wrapper">
                        <div className="single-room-info-content">
                            <div className="single-room-tabs">
                                <button className={this.state.activeTab === 0 ? "single-room-tablinks active" : "single-room-tablinks"} onClick={this.handleClickActiveTab.bind(this, 0)} data-tab="0" data-title="Details"><p data-title="Details">Details</p></button>
                                <button className={this.state.activeTab === 1 ? "single-room-tablinks active" : "single-room-tablinks"} onClick={this.handleClickActiveTab.bind(this, 1)} data-tab="1" data-title="Info"><p data-title="Info">Room Info.</p></button>
                                <button className={this.state.activeTab === 2 ? "single-room-tablinks active" : "single-room-tablinks"} onClick={this.handleClickActiveTab.bind(this, 2)} data-tab="2" data-title="Extras"><p data-title="Extras">Extras</p></button>
                            </div>

                            <div className="single-room-tabcontent-wrapper">
                                <div id="single-room-tabcontent-details" className={this.state.activeTab === 0 ? "single-room-tabcontent active" : "single-room-tabcontent"}>
                                    <h3>Details</h3>
                                    <p>{description}</p>
                                </div>

                                <div id="single-room-tabcontent-info" className={this.state.activeTab === 1 ? "single-room-tabcontent active" : "single-room-tabcontent"}>
                                    <h3>Info</h3>
                                    <p>Price : ${price}</p>
                                    <p>Size : {size} SQFT</p>
                                    <p>
                                        Max capacity :
                                        {capacity > 1 ? ` ${capacity} people` : ` ${capacity} person`}
                                    </p>
                                    <p>{pets ? "Pets allowed" : "No pets allowed"}</p>
                                    <p>{breakfast && "Free breakfast included"}</p>
                                </div>

                                <div id="single-room-tabcontent-extras" className={this.state.activeTab === 2 ? "single-room-tabcontent active" : "single-room-tabcontent"}>
                                    <h3>Extras</h3>
                                    <span>
                                        {extras.map((item, index) => (
                                            <p key={index}>{item}</p>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default SingleRoom;
