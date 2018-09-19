import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import Theme from '../Themes';


export interface Props {
    actions: any[]
    data: any
    children?: any
}

export interface ThemedProps {
    theme
}

const TableActions = props => (
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

export default (props: Props) => (
    <Theme>
        {theme => (
            <TableActions {...props} theme={{

            }} />
        )}
    </Theme>
);