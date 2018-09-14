import React from 'react';
import { Popup, Button } from '../../src';

interface PopupStory {
    tooltip: any
}

class PopupStory extends React.Component {
    render() {
        return (
            <Popup trigger={<Button>Call Tooltip</Button>}>
                <a>Hello</a>
            </Popup>
        )

    }
}

export default PopupStory