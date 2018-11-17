//import { combineReducers } from 'redux';

const initialState = {
    latitude: 0,
    longitude: 0
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_LOCATION':
            return {
                latitude: action.latitude,
                longitude: action.Longitude
            };
        default:
            return state;
    }
};

export default reducer;
