import { createSelector } from 'reselect';

const selectAboutUs = state => state.aboutUs;

export const selectAboutUsSelector = createSelector(
    [selectAboutUs],
    aboutUs => aboutUs.aboutUsContent
);
