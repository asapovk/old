import React from 'react';
import { Icon } from '../';

interface FinderNavProps {
    label: string
    filter?: boolean
    render: (children, filter, level) => void
    level: number
}

class FinderNav extends React.Component<FinderNavProps> {

    expand(children) {
        this.props.render(children, this.props.filter ? true : false, this.props.level + 1)
    }

    render() {

        const { label, children } = this.props;

        return (
            <div className='ui-finder-nav' onClick={() => this.expand(children)}>
                <div className='ui-finder-nav-label'>{label}</div>
                <span><Icon type='right' /></span>
            </div>
        )

    }
}

export default FinderNav;