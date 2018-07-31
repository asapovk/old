export default Form =>
    class extends React.Component {

        constructor() {
            super()
            this.state = {
                invalidItems: new Set()
            }
            this.setData = this.setData.bind(this);
            this.setValid = this.setValid.bind(this);
        }

        static defaultProps = {
            data: []
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

        render() {

            return (
                <div className='ui-table-content-body-row edited'>
                    <Form {...this.props} setData={this.setData} setValid={this.setValid} Column={this.Column} Subrow={this.Subrow} />
                    <div className='ui-table-content-body-row-actions'>
                        <div className='ui-table-content-body-row-actions-buttons-edit'>
                            {this.props.Actions.map((action, index) => (
                                <button
                                    key={action.key || index}
                                    className={action.className}
                                    onClick={_ => action.onClick(this.formData)}
                                    children={action.label || "Label"}
                                    ref={ref => this[action.ref] = ref}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }