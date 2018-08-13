import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';

export default props => (
    <div className='ui-table-content-body-row-actions'>
        <Icon type='more' />
        <div className='ui-table-content-body-row-actions-buttons'>{
            props.actions.map((action, index) => (
                <Button decoration='none' key={index} className={action.className} onClick={event => {
                    event.stopPropagation();
                    action.onAction(props.data);
                }}>{action.label}</Button>
            ))
        }</div>
    </div>
)