import React from "react";
import { Popup, Styles } from "../../../src";

interface TableCustomCellProps {
  value;
  row;
}

class TableCustomCell extends React.Component<TableCustomCellProps> {
  popup: any;

  render() {
    const PopupTriggerTSX = (
      <Styles>
        {styles => (
          <div
            style={{
              textDecoration: "underline",
              textDecorationColor: styles.theme.highlight.rgb,
              cursor: "pointer",
              width: "max-content"
            }}
            children={this.props.row}
          />
        )}
      </Styles>
    );
    return (
      <div>
        <Popup content={"Hello " + this.props.row}>{PopupTriggerTSX}</Popup>
      </div>
    );
  }
}

export default TableCustomCell;
