import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../templates/Layout';

import TextpicIntextleft from '@rm-frontend/base/source/3-organisms/standard-content/typo3-standard-content/TextpicIntextleft';
import Teaserbox from '@rm-frontend/base/source/3-organisms/teaser-box/Teaserbox.jsx';
import Keyvisual from '@rm-frontend/visuals/source/2-molecules/keyvisual/keyvisual/Keyvisual.jsx';

function getComponent (element) {
    switch (element.type) {
        case 'teaser-box':
            return <Teaserbox key="teaser-box" data={element} />;
        case 'textpic-intextleft':
            return <TextpicIntextleft key="textpic-intextleft" data={element} />
        default:
            return `No component definition for type: ${element.type}`;
    }
};

const isKeyvisual = element => element.type === 'keyvisual';

export const PageTemplate = ({
    title,
    content,
}) => (
    <Layout>
        {content.find(isKeyvisual) &&
            <Keyvisual key="keyvisual" data={content.find(isKeyvisual)} />
        }

        <div class="l-header-only-wrap">
            <div class="l-main-wrap">
                <div class="l-container">
                    <header class="content-headline  content-headline--page_header">
                        <h1>{title}</h1>
                    </header>
                </div>
            </div>
        </div>

        {content.filter(element => !isKeyvisual(element)).map(element => getComponent(element))}
    </Layout>
);

PageTemplate.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array
};