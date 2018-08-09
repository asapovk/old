import React from 'react';
// import Icon from '../Icon';
import { Button } from '../../Button';

export default props => (
    <div className='ui-table-content-body-row-propss'>
        {/* <Icon type='more' /> */}
        <div className='ui-table-content-body-row-propss-buttons'>{
            <Button
                label={props.label}
                onClick={props.onClick}
            />
        }</div>
    </div>
)