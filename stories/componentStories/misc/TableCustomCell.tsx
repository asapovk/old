import React from 'react';
import { Popup } from '../../../src';

interface TableCustomCellProps {
    value
    row
}

class TableCustomCell extends React.Component<TableCustomCellProps> {

    popup: any;

    render() {
        const PopupTriggerTSX = (
            <div
                style={{
                    textDecoration: 'underline',
                    textDecorationColor: 'rgb(30, 210, 255)',
                    cursor: 'pointer',
                    width: 'max-content'
                }}
                children={this.props.row}
            />
        )
        return (
            <div>
                <Popup trigger={PopupTriggerTSX}>
                    {'Hello ' + this.props.row}
                </Popup>
            </div>
        )
    }
}

export default TableCustomCell;