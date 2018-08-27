import React from 'react';
import { Icon } from '../Icon';
import { Flexbox } from '../Flexbox';

interface FinderGroupProps {
    label?: string
}

class FinderGroup extends React.Component<FinderGroupProps> {
    render() {
        /**
         * Интерфейс специально неописан
         * системные пропсы
         */
        //@ts-ignore
        const { active, onClick, label } = this.props;
        return (
            <Flexbox alignItems="center" className={`ui-finder-group${active ? " ui-finder-group-active" : ""}`} onClick={onClick}>
                <Flexbox className='ui-finder-group-label' flex={1} children={label} />
                <Flexbox className='ui-finder-group-icon'>
                    <Icon type='right' />
                </Flexbox>
            </Flexbox>
        )
    }
}

export default FinderGroup;