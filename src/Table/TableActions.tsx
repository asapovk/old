import React from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Styles } from '../';


export interface Props {
    actions: any[]
    data: any
    children?: any
}

const TableActions = props => (
    <Styles>
        {styles => (
            <div className='ui-table-content-body-row-actions'>
                <Icon type='more' style={{ color: styles.table.actions.actionColor }} />
                <div className='ui-table-content-body-row-actions-buttons' style={{
                    // TODO: gradient opacity
                    background: `linear-gradient(90deg, ${styles.table.actions.backgroundColor} 0%, ${styles.table.actions.backgroundColor} 20%)`
                }}>{
                        props.actions.map((action, index) => (
                            <Button decoration='none' key={index} className={action.className} onClick={event => {
                                event.stopPropagation();
                                action.onAction(props.data);
                            }}>{action.label}</Button>
                        ))
                    }</div>
            </div>
        )}
    </Styles>
)

export default TableActions;