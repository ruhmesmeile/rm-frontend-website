import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplate } from '../templates/PageTemplate';

const PagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <PageTemplate
        title={data.title}
        keyvisual={data.keyvisual}
        content={data.content}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PagePreview;