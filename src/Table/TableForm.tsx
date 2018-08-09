import React, { Component } from 'react';
import { Button } from '../Button';
import Flexbox from 'react-flexbox';
import { ActionsButton } from './Table';

interface TableFormProps {
    row: any
    onCancel: () => void,
    target: {
        render: (row) => Component | Element | string | null;
        cancelLabel?: string
        actions?: ActionsButton[]
    }
}

class TableForm extends React.Component<TableFormProps> {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         invalidItems: new Set()
    //     }

    //     this.setData = this.setData.bind(this);
    //     this.setValid = this.setValid.bind(this);
    // }

    // static defaultProps = {
    //     data: {}
    // }

    // componentWillMount() {
    //     this.formData = Object.assign(this.props.data);
    // }

    // setData(field, value) {
    //     this.formData[field] = value;
    // }

    // setValid(id, isValid) {
    //     const items = this.state.invalidItems;
    //     isValid ? items.delete(id) : items.add(id);
    //     this.setState({ invalidItems: items });
    //     this.save.disabled = items.size > 0 ? true : false;
    // }

    // Column(props) {
    //     const width = props.width ? { flexBasis: props.width } : { flex: 1 };
    //     return (
    //         <div
    //             className={'ui-table-content-body-row-column' + (props.className ? ' ' + props.className : '')}
    //             children={props.children}
    //             style={Object.assign(width, props.style)}
    //         />
    //     )
    // }

    // Subrow(props) {
    //     return (
    //         <div
    //             className={'ui-table-content-body-row-column-subrow' + (props.className ? ' ' + props.className : '')}
    //             children={props.children}
    //             style={props.style}
    //         />
    //     )
    // }

    render() {
        return (
            <Flexbox className='ui-table-content-body-row edited'>
                {this.props.target.render(this.props.row)}
                <div className='ui-table-content-body-row-actions'>
                    {
                        Array.isArray(this.props.target.actions) && this.props.target.actions.map((action, index) => {
                            return (
                                <Button key={index} label={action.label} onClick={action.onClick && action.onClick.bind(this, this.props.row)} />
                            )
                        })
                    }
                    <Button label={this.props.target.cancelLabel || "Отмена"} onClick={this.props.onCancel} />
                </div>
            </Flexbox>
        )
    }
}

export default TableForm;