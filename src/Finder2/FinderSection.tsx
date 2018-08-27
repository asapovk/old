import React from 'react';
import { Icon } from '../Icon';
import { Flexbox } from '../Flexbox';

interface FinderSectionProps {
    label?: boolean
    badge?: number
}

class FinderSection extends React.Component<FinderSectionProps> {
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

export default FinderSection;