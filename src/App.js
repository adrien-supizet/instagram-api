import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import reducer from './reducers';
import Header from './components/Header';
import Feed from './components/Main/Feed';

const store = createStore(reducer);

class App extends Component {
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
