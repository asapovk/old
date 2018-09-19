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
        <Icon type='more' style={{ color: props.theme.actionColor }} />
        <div className='ui-table-content-body-row-actions-buttons' style={{
            // TODO: gradient opacity
            background: `linear-gradient(90deg, ${props.theme.backgroundColor} 0%, ${props.theme.backgroundColor} 20%)`
        }}>{
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
                backgroundColor: theme.interface,
                actionColor: theme.highlight,
            }} />
        )}
    </Theme>
);