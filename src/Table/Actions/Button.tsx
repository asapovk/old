import React from 'react';
// import Icon from '../Icon';
import { Button } from '../../Button';

export default props => (
    <Button
        label={props.label}
        onClick={props.onClick}
    />
)
// export default props => (
//     <div className='ui-table-content-body-row-actions-buttons'>
//         {/* <Icon type='more' /> */}
//         <Button
//             label={props.label}
//             onClick={props.onClick}
//         />
//     </div>
// )