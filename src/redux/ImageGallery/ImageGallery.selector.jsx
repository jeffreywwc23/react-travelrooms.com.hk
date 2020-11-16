import { createSelector } from 'reselect';

const selectImageGallery = state => state.imageGallery;

export const selectImageGallerySelector = createSelector(
    [selectImageGallery],
    imageGallery => imageGallery.imageGalleryContent
);
