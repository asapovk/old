import React, { CSSProperties } from 'react';
import { Icon, Flexbox } from '../';

interface FinderNavProps {
    label: string
    badge?: number
    filter?: boolean
    filterPlaceholder?: string
    setMenu?: (filter, level, filterPlaceholder, updateChildren, index) => void
    level?: number
    index?: number
    style?: CSSProperties
}

class FinderNav extends React.Component<FinderNavProps> {

    expand() {
        if (this.props.setMenu && typeof this.props.level != 'undefined') {
            this.props.setMenu(
                this.props.filter ? true : false,
                this.props.level,
                this.props.filterPlaceholder,
                this.getChildren.bind(this),
                this.props.index
            );
        }
    }

    getChildren() {
        return this.props.children;
    }

    render() {
        const { label, badge, style } = this.props;

        const active = false;
        return (
            <Flexbox style={style} alignItems="center" className={`ui-finder-nav${active ? " ui-finder-nav-active" : ""}`} onClick={() => this.expand()}>
                <Flexbox className='ui-finder-nav-label' flex={1} children={label} />
                {badge ? <Flexbox className="ui-finder-nav-badge">{badge}</Flexbox> : null}
                <Flexbox className='ui-finder-nav-icon'>
                    <Icon type='right' />
                </Flexbox>
            </Flexbox>
        )

    }
}

export default FinderNav;