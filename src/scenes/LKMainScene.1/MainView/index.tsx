import React, { useEffect } from 'react';
import { Flexbox } from '../../..';

import useBrowser from '../../../hooks/useBrowser';
import SideMenu from './SideMenu';
import { useMainContext } from '..';

export default () => {

    const windowSize = useBrowser();
    const ctx = useMainContext();
    const { currentSubMenuItem } = ctx;

    const st = {
        menu: {
            width: windowSize.width > 640 ? '320px' : '100%',
            // '-webkit-box-sizing': 'border-box',
            // '-moz-box-sizing': 'border-box',
            boxShadow: 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.5), 6px 0 6px 0 rgba(0, 0, 0, 0.14)',
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
            height: '100%'
        }
    }

    return (
        <Flexbox style={{ height: '100%' }}>
            <div style={st.menu}>
                <SideMenu />
            </div>
            {windowSize.width > 640 && (
                <div>
                    {currentSubMenuItem.component}
                </div>
            )}
        </Flexbox>
    )
}