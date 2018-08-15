import React, { Component } from 'react';
import { Button } from '../Button';

interface TableFormHOCProps {
    data: any
    columns: any
    Form: any
}

interface TableFormHOC {
    formData: any
    state: {
        invalidItems: any
    }
    save: any
}

class TableFormHOC extends React.Component<TableFormHOCProps> {

    constructor(props) {
        super(props);

        this.state = {
            invalidItems: new Set()
        }

        this.setData = this.setData.bind(this);
        this.setValid = this.setValid.bind(this);
    }

    componentWillMount() {
        this.formData = Object.assign(this.props.data);
    }

    setData(field, value) {
        this.formData[field] = value;
    }

    setValid(id, isValid) {
        const items = this.state.invalidItems;
        isValid ? items.delete(id) : items.add(id);
        this.setState({ invalidItems: items });
        this.save.disabled = items.size > 0 ? true : false;
    }

    Column(props) {
        const width = props.width ? { flexBasis: props.width } : { flex: 1 };
        return (
            <div
                className={'ui-table-content-body-row-column' + (props.className ? ' ' + props.className : '')}
                children={props.children}
                style={Object.assign(width, props.style)}
            />
        )
    }

    Subrow(props) {
        return (
            <div
                className={'ui-table-content-body-row-column-subrow' + (props.className ? ' ' + props.className : '')}
                children={props.children}
                style={props.style}
            />
        )
    }

    Actions(props) {
        return (
            <div
                className={'ui-table-content-body-row-actions' + (props.className ? ' ' + props.className : '')}
                children={props.children}
                style={props.style}
            />
        )
    }

    render() {

        const { Form, data, columns } = this.props;

        return (
            <div className='ui-table-content-body-row edited'>
                <Form data={data} columns={columns} formData={this.formData} setData={this.setData} setValid={this.setValid} Column={this.Column} Subrow={this.Subrow} Actions={this.Actions} />
            </div>
        )
    }
}

export default (Form, columns, row) => <TableFormHOC data={row} columns={columns} Form={Form} />