import React from 'react';
import { Flexbox, Popup, Button, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

interface PopupStory {
    tooltip: any
}

class PopupStory extends React.Component {
    render() {
        return (
            <Viewport>
                <Flexbox alignContent="center" justifyContent="center">
                    <Popup trigger={<Button label='Call Tooltip'></Button>}>
                        <a>Hello</a>
                    </Popup>
                </Flexbox>
            </Viewport>
        )

    }
}

export default PopupStory