import React from 'react';
import { Tooltip } from '../../../src';

interface TableCustomCellProps {
    value
    row
}

class TableCustomCell extends React.Component<TableCustomCellProps> {

    tooltip: any;

    render() {

        return (
            <div>
                <Tooltip ref={ref => this.tooltip = ref}>
                    <div
                        onClick={event => {
                            event.stopPropagation();
                            this.tooltip.show('Hello ' + this.props.row)
                        }}
                        style={{ textDecoration: 'underline', textDecorationColor: 'rgb(30, 210, 255)', cursor: 'pointer', width: 'max-content' }}
                    >
                        {this.props.row}
                    </div>
                </Tooltip>
            </div>
        )
    }
}

export default TableCustomCell;