import React from 'react';
import { Popup, Theme } from '../../../src';

interface TableCustomCellProps {
    value
    row
}

class TableCustomCell extends React.Component<TableCustomCellProps> {

    popup: any;

    render() {
        const PopupTriggerTSX = (
            <Theme>
                {theme => (
                    <div
                        style={{
                            textDecoration: 'underline',
                            textDecorationColor: theme.highlight.rgb,
                            cursor: 'pointer',
                            width: 'max-content'
                        }}
                        children={this.props.row}
                    />
                )}
            </Theme>
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