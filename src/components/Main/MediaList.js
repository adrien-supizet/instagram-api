import React from 'react';
import PropTypes from 'prop-types';

import Media from './Media';

const MediaList = ({ medias, toggleMedia }) => (
    <ul>
        {medias.map(media => (
            <Media key={media.id} {...media} onClick={() => toggleMedia(media.id)} />
        ))}
    </ul>
);

MediaList.propTypes = {
    medias: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
            //src
        }).isRequired
    ).isRequired
    //togglemedia: PropTypes.func.isRequired
};

export default MediaList;
