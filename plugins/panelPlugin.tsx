import React from 'react';
import { IPluginProps } from 'showcase-ui/types'

function PanelPlugin(props: IPluginProps) {
    props.panel({
        item: {
            name: 'Plugin',
            render: () => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ width: '280px', marginRight: '32px' }}>Nothing there. Just plugin body</h1>
                    <video autoPlay loop src="http://kinopoisk.ru/public/videos/errors/desktop/404/3.mp4" height="180px" webkit-playsinline playsinline style={{ borderRadius: '8px' }}></video>
                </div>
            )
        }
    })
}

export default PanelPlugin;