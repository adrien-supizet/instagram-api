import React, { Component } from 'react';

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            longitude: 0,
            latitude: 0
        };
    }

    componentDidMount() {
        this.setState({ location: navigator.geolocation });
        navigator.geolocation.getCurrentPosition(position =>
            this.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude })
        );
    }
    render() {
        console.log(this.state.latitude);
        return <div style={styles} {...this.props} />;
    }
}

const styles = {
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
    color: 'black'
};
