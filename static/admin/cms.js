import CMS from 'netlify-cms-app';
import idWidget from 'netlify-cms-widget-simple-uuid';

import PagePreview from './preview-templates/PagePreview';

CMS.registerWidget('id', idWidget.IdControl, idWidget.IdPreview);

CMS.registerPreviewStyle('../css/base.css');
CMS.registerPreviewStyle('../css/base.inline.css');
CMS.registerPreviewStyle('../css/download.css');
CMS.registerPreviewStyle('../css/download.inline.css');
CMS.registerPreviewStyle('../css/gallery.css');
CMS.registerPreviewStyle('../css/gallery.inline.css');
CMS.registerPreviewStyle('../css/news.css');
CMS.registerPreviewStyle('../css/news.inline.css');
CMS.registerPreviewStyle('../css/visuals.css');
CMS.registerPreviewStyle('../css/visuals.inline.css');

CMS.registerPreviewTemplate('pages', PagePreview);

CMS.init();