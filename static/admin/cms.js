import CMS from 'netlify-cms';
import idWidget from 'netlify-cms-widget-simple-uuid';

CMS.registerWidget('id', idWidget.IdControl, idWidget.IdPreview);