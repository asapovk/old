import React, { Fragment } from 'react';
import { Icon, Flexbox } from '../';

interface FinderSectionProps {
    label?: string;
}

class FinderSection extends React.Component<FinderSectionProps> {

    state = {
        expand: false as boolean
    }

    render() {

        const { label, children } = this.props;
        let active = false;
        return (
            <Fragment>
                <Flexbox alignItems="center" className={`ui-finder-section${active ? " ui-finder-section-active" : ""}`} onClick={() => this.setState({ expand: this.state.expand ? false : true })}>
                    <Flexbox className='ui-finder-section-label' flex={1} children={label} />
                    <Flexbox className='ui-finder-section-icon'>
                        <Icon Icon type={this.state.expand ? 'up' : 'down'} />
                    </Flexbox>
                </Flexbox>
                <div className='ui-finder-section-children'>{this.state.expand && children}</div>
            </Fragment>
        )
    }
}

export default FinderSection;