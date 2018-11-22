import React, { Component } from 'react';
import { connect } from 'react-redux';
//import MediaList from './MediaList';
class Feed extends Component {
    componentDidUpdate() {}

    getMedias = async () => {
        const { longitude, latitude, token } = this.props;
        // TEST on known location
        const lat = 40.7485452;
        const ln = -73.98576349999996;
        const search = `https://api.instagram.com/v1/locations/search?lat=${lat}&lng=${ln}&distance=5000&access_token=${token}`;
        //fetch media for these locations
        const data = await fetch(search);
        const json = await data.json();
        console.log(search);
        console.log(json);
    };

    render() {
        if (this.props.token) {
            this.getMedias();
        }
        return (
            <div>
                <a href="https://api.instagram.com/oauth/authorize/?scope=public_content&client_id=3d3210b904e74f8a8c1eb8ec9d83a849&redirect_uri=http://127.0.0.1:3000/&response_type=token">
                    Auth
                </a>
                <p>Token: {this.props.token}</p>
                <p>Longitude: {this.props.longitude}</p>
                <p>latitude: {this.props.latitude}</p>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    //getMediaDetails: id => dispatch(getMediaDetails(id))
});

const mapStateToProps = state => ({
    longitude: state.longitude,
    latitude: state.latitude,
    token: state.token
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
