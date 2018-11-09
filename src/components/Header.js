import React, { PureComponent } from 'react';
import { headerText } from '../res/TextContent';

export default class Header extends PureComponent {
  componentDidMount() {}
  render() {
    return (
      <header {...this.props}>
        <h1>{headerText.title}</h1>
      </header>
    );
  }
}
