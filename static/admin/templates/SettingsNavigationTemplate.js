import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../templates/Sidebar';
import NavSidebar from '../templates/NavSidebar';

export const SettingsNavigationTemplate = ({
  links,
}) => (
    <div class="page-wrap">
        <button type="button" class="nav-toggle nav-sidebar-toggle" id="toggle-sidebar" aria-controls="sidebar" aria-expanded="false" data-component="base.sidebar-toggle">
            <span class="nav-toggle__label">Navigation öffnen/schließen</span>
            <div class="nav-toggle__icon">
                <div class="nav-toggle__icon__middle"></div>
            </div>
        </button>
        
        <Sidebar>
            <NavSidebar links={links} />
        </Sidebar>
    </div>
);

SettingsNavigationTemplate.propTypes = {
    links: PropTypes.array
};