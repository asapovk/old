import React from 'react';
import { Icon } from '../';

interface FinderNavProps {
    label: string
    filter?: boolean
    filterPlaceholder?: string
    render?: (children, filter, level, filterPlaceholder) => void
    level?: number
}

class FinderNav extends React.Component<FinderNavProps> {

    expand(children) {
        this.props.render &&
            typeof this.props.level != 'undefined' &&
            this.props.render(children, this.props.filter ? true : false, this.props.level + 1, this.props.filterPlaceholder);
    }

    render() {

        const { label, children } = this.props;

        return (
            <div className='ui-finder-nav' onClick={() => this.expand(children)}>
                <div className='ui-finder-nav-label'>{label}<span><Icon type='right' /></span></div>
            </div>
        )

    }
}

export default FinderNav;