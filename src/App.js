import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import rootReducer from './reducers/';
import Header from './components/Header';
import Feed from './components/Main/Feed';

const store = createStore(rootReducer);

class App extends Component {
    componentDidMount() {
        // a redux middleware would be prefered to return a promise from the reducer function
        navigator.geolocation.getCurrentPosition(position => {
            store.dispatch({
                type: 'SET_LOCATION',
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });

        if (window.location.hash) {
            const access_token = window.location.hash.replace('#access_token=', '');
            store.dispatch({ type: 'SET_TOKEN', token: access_token });
        }
    }
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Header className="App-header" />
                    <Feed className="App-feed" />
                </div>
            </Provider>
        );
    }
}

export default App;
