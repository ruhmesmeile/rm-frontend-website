import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../templates/Layout';

import Teaserbox from '@rm-frontend/base/source/3-organisms/teaser-box/Teaserbox.jsx';
import Keyvisual from '@rm-frontend/visuals/source/2-molecules/keyvisual/keyvisual/Keyvisual.jsx';

function getComponent (element) {
    switch (element.type) {
        case 'teaser-box':
            return <Teaserbox key="teaser-box" data={element} />;
        case 'keyvisual':
            return <Keyvisual key="keyvisual" data={element} />;
        default:
            return `No component definition for type: ${element.type}`;
    }
};

export const PageTemplate = ({
    title,
    content,
}) => (
    <Layout>
        <h1>{title}</h1>

        {content.map(element => getComponent(element))}
    </Layout>
);

PageTemplate.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array
};