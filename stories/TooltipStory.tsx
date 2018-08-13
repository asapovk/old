import React from 'react';
import { Tooltip, Button } from '../src';

interface TooltipStory {
    tooltip: any
}

class TooltipStory extends React.Component {
    render() {
        return (
            <Tooltip ref={ref => this.tooltip = ref}>
                <Button onClick={() => this.tooltip.show('Hello')}>Call Tooltip</Button>
            </Tooltip>
        )

    }
}

export default TooltipStory