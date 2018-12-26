import React from 'react';
import { Flexbox, Popup, Button, Viewport } from '../../../src';


interface PopupStory {
    tooltip: any
}

class PopupStory extends React.Component {
    render() {
        return (
            
                <Flexbox alignContent="center" justifyContent="center">
                    <Popup trigger={<Button label='Call Tooltip'></Button>}>
                        <a>Hello</a>
                    </Popup>
                </Flexbox>
            
        )

    }
}

export default PopupStory