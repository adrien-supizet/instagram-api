import React, { Component } from 'react';
import { connect } from 'react-redux';
class Feed extends Component {
    componentDidMount() {
        // a redux middleware would be prefered to return a promise from the reducer function
        navigator.geolocation.getCurrentPosition(position =>
            this.props.dispatch({
                type: 'SET_LOCATION',
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        );
    }
    render() {
        return <div style={styles}>{this.props.latitude}</div>;
    }
}

const mapStateToProps = state => ({
    longitude: state.longitude,
    latitude: state.latitude
});

const styles = {
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
    color: 'black'
};

export default connect(mapStateToProps)(Feed);
