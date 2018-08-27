import React from 'react';
import { Icon } from '../Icon';
import { Flexbox } from '../Flexbox';

interface FinderNavProps {
    label?: string
    badge?: number
    filter?: boolean
    filterPlaceholder?: string
}

class FinderNav extends React.Component<FinderNavProps> {
    render() {
        /**
         * Интерфейс специально неописан
         * системные пропсы
         */
        //@ts-ignore
        const { active, onClick, label, badge } = this.props;

        return (
            <Flexbox alignItems="center" className={`ui-finder-section${active ? " ui-finder-section-active" : ""}`} onClick={onClick}>
                <Flexbox className='ui-finder-section-label' flex={1} children={label} />
                {badge ? <Flexbox className="ui-finder-section-badge">{badge}</Flexbox> : null}
                <Flexbox className='ui-finder-section-icon'>
                    <Icon type='right' />
                </Flexbox>
            </Flexbox>
        )
    }
}

export default FinderNav;