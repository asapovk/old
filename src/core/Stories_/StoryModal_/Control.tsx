import React from 'react';
import { Flexbox, Icon } from '../..';
import useBrowser from '../../../hooks/useBrowser';

export default ({ onPrev, onNext }) => {

    const browser = useBrowser();

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <Flexbox justifyContent='space-between' flex={1} style={{ height: '100%' }}>
                <div style={{ marginLeft: !browser.isMobile ? '-2.5rem' : '0', width: '2.5rem' }}>
                    <Flexbox
                        style={{ height: '100%' }}
                        justifyContent='center'
                        alignItems='center'
                        onClick={() => onPrev()}
                        children={<Icon type="left" />}
                    />
                </div>
                <div style={{ marginRight: !browser.isMobile ? '-2.5rem' : '0', width: '2.5rem' }}>
                    <Flexbox
                        style={{ height: '100%' }}
                        justifyContent='center'
                        alignItems='center'
                        onClick={() => onNext()}
                        children={<Icon type="right" />}
                    />
                </div>
            </Flexbox>
        </div >
    )
}