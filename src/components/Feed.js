import React, { Component } from 'react';

export default class Header extends Component {
  componentDidMount() {}
  render() {
    return <div style={styles}>{'test'}</div>;
  }
}

const styles = {
  fontWeight: 'bold',
  fontFamily: 'Montserrat-Regular',
  color: 'black'
};
