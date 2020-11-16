import { combineReducers } from 'redux';

import imageGalleryReducer from './ImageGallery/ImageGallery.reducer';
import blogReducer from './Blog/Blog.reducer';
import aboutUsReducer from './AboutUs/AboutUs.reducer';

export default combineReducers({
    imageGallery: imageGalleryReducer,
    blog: blogReducer,
    aboutUs: aboutUsReducer,
});