import React from 'react';
import './ImageGallery.css';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectImageGallerySelector } from '../../redux/ImageGallery/ImageGallery.selector';

const ImageGallery = ({ imageGalleryContent }) => {
    return (
        <div className="image-gallery-container">
            <div className="image-gallery-wrapper">
                {
                    imageGalleryContent.map((singleImageGallery) => {
                        return (
                            <div className="image-gallery-box" key={singleImageGallery.id}>
                                <div className="image-gallery-image-container">
                                    <img className="image-gallery-image" src={singleImageGallery.imageUrl} alt={`gallery-${singleImageGallery.id}`} />
                                    <div className="overlay"></div>
                                    <div className="overlay2"></div>
                                </div>
                                <div className="text">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <h2>{singleImageGallery.title}</h2>
                                    <p>{singleImageGallery.label}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    imageGalleryContent: selectImageGallerySelector
});

export default connect(mapStateToProps)(ImageGallery);