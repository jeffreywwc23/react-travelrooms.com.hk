import React from "react";
import { Link } from 'react-router-dom';

import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import FeaturedRooms from "../../components/FeaturedRooms/FeaturedRooms";
import Footer from "../../components/Footer/Footer";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Blog from "../../components/Blog/Blog";

import SlideData from "../../components/ImageSlider/SliderData";

const home = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="TravelRooms.com"
                    subtitle="YOUR ROOMS BOOKING ASSISTANT IN YOUR JOURNEY"
                >
                    <Link to="/rooms" className="banner-btn">
                        Look for rooms?
                    </Link>
                </Banner>
            </Hero>
            <ImageGallery />
            <ImageSlider heading="Example Slider" slides={SlideData} />
            <FeaturedRooms />
            <Blog />
            <Footer />
        </>
    );
};

export default home;
