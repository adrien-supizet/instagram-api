import React, { PureComponent } from 'react';
import { headerText } from '../res/TextContent';
const instaLogo = require('../res/img/instagram-logo.png');
const reactLogo = require('../res/img/react-logo.png');

export default class Header extends PureComponent {
    componentDidMount() {}
    render() {
        return (
            <header style={styles.header} {...this.props}>
                <div>
                    <h1 style={styles.title}>{headerText.title}</h1>
                    <h2 style={styles.subtitle}>{headerText.subtitle}</h2>
                </div>
                <div>
                    <LogoWrapper linkRef={'https://reactjs.org/'} src={reactLogo} />
                    <LogoWrapper linkRef="https://www.instagram.com/developer/" src={instaLogo} />
                </div>
            </header>
        );
    }
}

type propsType = { linkRef: string, src: string };

const LogoWrapper = ({ linkRef, ...props }: propsType) => (
    <a href={linkRef} target="blank">
        <img alt=" " style={styles.logo} {...props} />
    </a>
);

const styles = {
    header: {
        backgroundColor: '#282c34',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        padding: '0 50px 0 50px',
        minHeight: 75
    },
    logo: { height: 50, width: 50, paddingRight: 10 },
    title: { fontSize: 'calc(15px + 2vmin)', display: 'inline', paddingRight: 15 },
    subtitle: { fontSize: 'calc(5px + 2vmin)', display: 'inline', color: '#AAAAAA' }
};
