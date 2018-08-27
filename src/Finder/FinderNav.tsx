import React from 'react';
import { Icon } from '../';

interface FinderNavProps {
    label: string
    filter?: boolean
    filterPlaceholder?: string
    render?: (children, filter, level, filterPlaceholder, updateChildren, update) => void
    level?: number
}

class FinderNav extends React.Component<FinderNavProps> {

    constructor(props) {
        super(props);
        this.updateChildren = this.updateChildren.bind(this);
    }

    expand(children, update) {
        this.props.render &&
            typeof this.props.level != 'undefined' &&
            this.props.render(children, this.props.filter ? true : false, this.props.level + 1, this.props.filterPlaceholder, this.updateChildren, update);
        console.log(this.props.children);
    }

    updateChildren() {
        this.expand(this.props.children, true);
    }

    render() {
        const { label, children } = this.props;

        return (
            <div className='ui-finder-nav' onClick={() => this.expand(children, false)}>
                <div className='ui-finder-nav-label'>{label}<span><Icon type='right' /></span></div>
            </div>
        )

    }
}

export default FinderNav;