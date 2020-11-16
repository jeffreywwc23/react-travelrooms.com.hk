export const INITIAL_STATE = {
    aboutUsContent: [
        {
            id: 1,
            parallaxTitle: 'Hotel',
            imageUrl: 'https://cdn.asiatatler.com/asiatatler/i/hk/2019/06/19170909-rosewood-hong-kong-asya-pool_cover_2000x1159.jpg',
            text: 'Since 1975, TravelRoom.com has been committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world\'s wonders on the leisure travel side, and providing corporate travelers hi-touch services to facilitate their business travel needs. We’re an employee-owned travel agency anchored by our values, integrity and dedication to customer service. Our award-winning company consistently ranks as one of the best agencies in the country (Travel Weekly, Business Travel Weekly), and is a top member of the prestigious Signature Travel Network, a worldwide partnership allowing us to provide our customers unmatched benefits. Since 2009, our strong company culture and passion for our profession has resulted in our being named each year as one of the "Best Places To Work" in Los Angeles County.',
            textBelowLine: 'Our management is active on various travel advisory boards and committees for travel organizations, travel magazines (Afar, Travel+Leisure), major hotel brands, and more. TravelStore is a Premium Member of ASTA (American Society of Travel Advisors), as well as an ASTA Green Member agency, and CLIA (Cruise Line International Association). Satisfied employees lead to satisfied customers. We know the growth and success of our company depends upon fulfilling our clients needs every day. That is also our promise. Read about Our Advantage.',
            parallaxCount: 'one',
        },
        {
            id: 2,
            parallaxTitle: 'Resort',
            imageUrl: 'https://images8.alphacoders.com/541/thumb-1920-541025.jpg',
            text: 'We offer a full range of services. Aside from regular sightseeing tours, special-interest products are also useable for your selection, such as Delicacies, Marathon Run, Parent-child tours. These are all with well-planned itineraries, popular sightseeing spots and local delicacies which can meet your demands.',
            textBelowLine: 'We also Travel provides service on hotel or air ticket reservations, individual air tickets and hotel packages. To provide the diversified demands of customers, we also offer value-added packages, such as local tours or special offers which cooperate with tourism boards or local concerns.',
            parallaxCount: 'two',
        },
        {
            id: 3,
            parallaxTitle: 'Villa',
            imageUrl: 'https://images.unsplash.com/photo-1583743089745-1b4da736bd6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1970&q=80',
            text: 'Private Group Tour Division and the Mini-Group Package series providing an extensive range of tailor-made tours for group travel along a private base, designed itineraries, accommodations and meals are entirely in conformity with the preference of individual customers.',
            textBelowLine: 'Travelrooms.com is the agent of various world-wide leading cruise lines with itineraries. Morning Star Travel also cooperates with renowned international cruise lines to provide special interest cruise tours, such as study tour and wedding photography tour. To further enhance the service, Morning Star Travel has set up a dedicated cruise hotline in 2012 to answer customers’enquiries.',
            parallaxCount: 'three',
        }
    ]
};

const aboutUsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default aboutUsReducer;
