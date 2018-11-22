const initialState = {
    latitude: 0,
    longitude: 0,
    access_token: ''
};

const location = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_LOCATION':
            return {
                latitude: action.latitude,
                longitude: action.Longitude
            };
        case 'SET_TOKEN':
            return { token: action.token };
        default:
            return state;
    }
};

export default location;
