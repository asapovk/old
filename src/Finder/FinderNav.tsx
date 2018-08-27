import React from 'react';
import { Icon } from '../';

interface FinderNavProps {
    label: string
    filter?: boolean
    filterPlaceholder?: string
    render?: (filter, level, filterPlaceholder, updateChildren) => void
    level?: number
}

class FinderNav extends React.Component<FinderNavProps> {

    constructor(props) {
        super(props);
        this.getChildren = this.getChildren.bind(this);
    }

    expand() {
        this.props.render &&
            typeof this.props.level != 'undefined' &&
            this.props.render(
                this.props.filter ? true : false, this.props.level + 1,
                this.props.filterPlaceholder,
                this.getChildren
            );
    }

    getChildren() {
        return this.props.children;
    }

    render() {
        const { label } = this.props;

        return (
            <div className='ui-finder-nav' onClick={() => this.expand()}>
                <div className='ui-finder-nav-label'>{label}<span><Icon type='right' /></span></div>
            </div>
        )

    }
}

export default FinderNav;