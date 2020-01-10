import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../templates/Layout'
import Keyvisual from '../templates/Keyvisual'

function getComponent (element) {
    console.log(element.type);
    switch (element.type) {
        case 'keyvisual':
            return <Keyvisual data={element} />;
        default:
            return `No component definition for type: ${element.type}`;
    }
};

export const PageTemplate = ({
    title,
    keyvisual,
    content,
}) => (
    <Layout>
        <div><h1>{title}</h1></div>
        <Keyvisual data={keyvisual} />
        {content.map(element => getComponent(element))}
    </Layout>
);

PageTemplate.propTypes = {
    title: PropTypes.string,
    keyvisual: PropTypes.object,
    content: PropTypes.array
};