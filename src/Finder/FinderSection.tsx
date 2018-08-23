import React from 'react';
import { Icon } from '../';

interface FinderSectionProps {
    label?: string;
}

class FinderSection extends React.Component<FinderSectionProps> {

    state = {
        expand: false as boolean
    }

    render() {

        const { label, children } = this.props;

        return (
            <div className='ui-finder-section'>
                <div className='ui-finder-section-label' onClick={() => this.setState({ expand: this.state.expand ? false : true })}>
                    {label}
                    <span><Icon type={this.state.expand ? 'up' : 'down'} /></span>
                </div>
                <div className='ui-finder-section-children'>{this.state.expand && children}</div>
            </div>
        )

    }
}

export default FinderSection;