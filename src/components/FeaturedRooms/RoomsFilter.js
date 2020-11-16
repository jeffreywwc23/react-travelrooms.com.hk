import React from 'react';
import './RoomsFilter.css';

import { useContext } from "react";
import { RoomContext } from "../../utilities/context";
import Title from "../Title/Title";

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    // get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ["all", ...types];
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    // get unique capacity
    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));
    return (
        <>
            <section className="filter-container">
                <Title title="search rooms" />
                <form>
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select
                            name="type"
                            onChange={handleChange}
                            value={type}
                            className="custom-select"
                        >
                            {types}
                        </select>
                    </div>


                    <div className="form-group">
                        <label htmlFor="capacity">guests</label>
                        <select
                            name="capacity"
                            onChange={handleChange}
                            value={capacity}
                            className="custom-select"
                        >
                            {people}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">price (${price})</label>
                        <div className="range">
                            <input
                                type="range"
                                name="price"
                                min={minPrice}
                                max={maxPrice}
                                value={price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">room size</label>
                        <div className="size-inputs">
                            <input
                                type="number"
                                name="minSize"
                                value={minSize}
                                onChange={handleChange}
                                className="size-input"
                            />

                            <input
                                type="number"
                                name="maxSize"
                                value={maxSize}
                                onChange={handleChange}
                                className="size-input"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="checkbox-group">
                            <div className="single-extra">
                                <label htmlFor="breakfast">breakfast</label>
                                <input
                                    type="checkbox"
                                    name="breakfast"
                                    checked={breakfast}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="single-extra">
                                <label htmlFor="breakfast">pets</label>
                                <input
                                    type="checkbox"
                                    name="pets"
                                    checked={pets}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                </form>
            </section>
        </>
    );
}

export default RoomFilter;
