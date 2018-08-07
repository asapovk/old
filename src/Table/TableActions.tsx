import React from 'react';
import Icon from '../Icon';

export default props => (
    <div className='ui-table-content-body-row-actions'>
        <Icon type='more' />
        <div className='ui-table-content-body-row-actions-buttons'>{
            props.rowActions.map((action, index) => (
                <button key={action.key || index} className={action.className} onClick={event => {
                    event.stopPropagation();
                    action.onClick(props.data);
                }}>{action.label}</button>
            ))
        }</div>
    </div>
)