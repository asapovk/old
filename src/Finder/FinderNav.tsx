import React, { CSSProperties } from 'react';
import { Icon, Flexbox, Styles } from '../';

interface Props {
    label: string
    badge?: string | number
    filter?: boolean
    filterPlaceholder?: string
    setFinderMenu?: (level, index, filter, filterPlaceholder) => void
    finderLevel?: number
    finderIndex?: number,
    active?: boolean
}

class FinderNav extends React.Component<Props> {

    static componentName = "FinderNav";

    expand() {
        if (this.props.setFinderMenu && typeof this.props.finderLevel != 'undefined') {
            this.props.setFinderMenu(
                this.props.finderLevel + 1,
                this.props.finderIndex,
                this.props.filter ? true : false,
                this.props.filterPlaceholder,
            );
        }
    }

    render() {
        const { label, badge, active } = this.props;

        return (
            <Styles>
                {styles => (
                    <Flexbox alignItems="center" className={`ui-finder-nav${active ? " ui-finder-nav-active" : ""}`} onClick={() => this.expand()}>
                        <Flexbox className='ui-finder-nav-label' flex={1} children={label} />
                        {badge ? <Flexbox className="ui-finder-nav-badge" style={{ color: styles.finder.nav.badgeColor }}>{badge}</Flexbox> : null}
                        <Flexbox className='ui-finder-nav-icon'>
                            <Icon type='right' />
                        </Flexbox>
                    </Flexbox>
                )}
            </Styles>
        )
    }
}

export default FinderNav;