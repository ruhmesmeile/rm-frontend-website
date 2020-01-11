import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';

const md = new MarkdownIt();

const Keyvisual = ({ data }) => (
    <div class="keyvisual">
        <div class={"keyvisual__item " + (data.small ? 'keyvisual__item--small' : '')}>
            <div class="keyvisual__image">
                <picture>
                    <source media="(min-width: 950px)" data-srcset={data['image-desktop']} />
                    <source media="(min-width: 600px)" data-srcset={data['image-mobile']} />
                    <source data-srcset={data['image-tablet']} />
                    <img src={data['image-desktop']} alt="" data-object-fit="" />
                </picture>
            </div>
            
            {data.box === true &&
                <div class={"visual-content keyvisual__content " + data['box-alignment'] }>
                    <div class={"keyvisual__box " + data['box-style']} style={{backgroundColor: data['bg-color']}}>
                        <p class="keyvisual__topic">{data.headline}</p>
                        <div class="keyvisual__text">
                            <p>{parse(md.render(data.text))}</p>
                        </div>
                        <div class="keyvisual__link">
                            <a href={data['link-target']} class={"button " + data['link-variant']}>{data['link-text']}</a>
                        </div>
                    </div>
                </div>
            }
        </div>  
    </div>
);

Keyvisual.propTypes = {
    data: PropTypes.shape({
        small: PropTypes.bool,
        'image-desktop': PropTypes.string,
        'image-mobile': PropTypes.string,
        'image-tablet': PropTypes.string,
        box: PropTypes.bool,
        'box-alignment': PropTypes.string,
        'box-style': PropTypes.string,
        'bg-color': PropTypes.string,
        headline: PropTypes.string,
        text: PropTypes.string,
        'link-target': PropTypes.string,
        'link-variant': PropTypes.string,
        'link-text': PropTypes.string
    })
};

export default Keyvisual;