import CMS from 'netlify-cms';
import idWidget from 'netlify-cms-widget-simple-uuid';

console.log('idWidget', idWidget);

CMS.registerWidget('id', idWidget.IdControl, idWidget.IdPreview);