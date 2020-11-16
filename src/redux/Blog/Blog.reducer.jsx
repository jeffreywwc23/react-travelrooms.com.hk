export const INITIAL_STATE = {
    blogContent: [
        {
            id: 1,
            title: 'Whatever your reasons, traveling solo can be one of life’s most rewarding experiences. ',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Landscape-nature-sky-man_%2823700035333%29.jpg/1200px-Landscape-nature-sky-man_%2823700035333%29.jpg',
            label: 'travelogue',
            author: 'Jeffrey Wong',
            date: '6/11/2020',
        },
        {
            id: 2,
            title: 'Another well-liked spot for a luxurious hotel experience, W Hong Kong’s pool is a must-visit for its breathtaking views of Hong Kong’s iconic skyline',
            imageUrl: 'https://cdn.asiatatler.com/asiatatler/i/hk/2020/05/28170921-w-hong-kong-pool_article_1440x960.jpg',
            label: 'hotel',
            author: 'Jeffrey Wong',
            date: '6/11/2020',
        }, {
            id: 3,
            title: 'Fancy a pool that offers gorgeous views over Victoria Harbour? The Peninsula Hong Kong\'s pool is sure to please.',
            imageUrl: 'https://cdn.asiatatler.com/asiatatler/i/hk/2019/06/19181053-peninsula-hong-kong-pool_article_1280x852.jpeg',
            label: 'promotion',
            author: 'Jeffrey Wong',
            date: '6/11/2020',
        }, {
            id: 4,
            title: 'The Beginner’s Guide to International Travel',
            imageUrl: 'https://www.narcity.com/uploads/283557_d9275f161cf65a59c8aa51ec8f2b9b19fc4f8ae2.png_facebook.png',
            label: 'tips',
            author: 'Jeffrey Wong',
            date: '6/11/2020',
        }, {
            id: 5,
            title: 'The best places to photograph around the world - travel bloggers reveal',
            imageUrl: 'https://images.unsplash.com/photo-1486962532485-55d6645c218e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            label: 'travelogue',
            author: 'Jeffrey Wong',
            date: '6/11/2020',
        },
        {
            id: 6,
            title: 'Four Seasons’ pool terrace is a calm oasis that has long been a favourite among locals and visitors. ',
            imageUrl: 'https://cdn.asiatatler.com/asiatatler/i/hk/2019/06/19171817-four-seaons-hotel-hong-kong-pool_article_1530x852.jpg',
            label: 'hotel',
            author: 'Jeffrey Wong',
            date: '6/11/2020',
        },
    ]
};

const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default blogReducer;
