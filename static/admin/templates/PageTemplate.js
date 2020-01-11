import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../templates/Layout';
import Keyvisual from '../templates/Keyvisual';

function getComponent (element) {
    switch (element.type) {
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