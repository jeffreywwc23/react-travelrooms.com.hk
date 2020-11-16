export const INITIAL_STATE = {
    imageGalleryContent: [
        {
            id: 1,
            title: 'Resorts',
            imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
            label: 'To nature lovers',
        },
        {
            id: 2,
            title: 'Hotels',
            imageUrl: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            label: 'For business trips',
        }, {
            id: 3,
            title: 'Hostels',
            imageUrl: 'https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            label: 'Meet people around the world',
        },
    ]
};

const imageGalleryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default imageGalleryReducer;
