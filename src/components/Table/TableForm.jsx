export default Form =>
    class extends React.Component {

        constructor() {
            super()
            this.state = {
                invalid: []
            }
        }

        componentWillMount() {
            this.data = this.props.data;
        }

        formValid(id, isValid) {
            let items = this.state.invalid
            if (isValid) {
                items = this.state.invalid.filter(f => f !== id);
                this.setState({ invalid: items });
            } else if (!this.state.invalid.find(f => f === id)) {
                items = [...items, id];
                this.setState({ invalid: items });
            }
            this.save.disabled = items.length > 0 ? true : false
        }

        Column(props) {
            const width = props.width ? { flexBasis: props.width } : { flex: 1 };
            return (
                <div
                    className={'ui-table-content-body-row-column' + (props.className ? ' ' + props.className : null)}
                    children={props.children}
                    style={Object.assign(width, props.style)}
                />
            )
        }

        Subrow(props) {
            return (
                <div
                    className={'ui-table-content-body-row-subrow' + (props.className ? ' ' + props.className : null)}
                    children={props.children}
                    style={props.style}
                />
            )
        }

        render() {

            return (
                <div className='ui-table-content-body-row edited'>
                    <Form {...this.props} formValid={this.formValid} Column={this.Column} Subrow={this.Subrow} />
                    <div className='ui-table-content-body-row-actions'>
                        <div className='ui-table-content-body-row-actions-buttons-edit'>
                            {this.props.editActions.map((action, index) => (
                                <button
                                    key={action.key || index}
                                    className={action.className}
                                    onClick={_ => action.onClick(this.data)}
                                    children={action.label || "Label"}
                                    ref={ref => this[action.ref] = ref}
                                    disabled={this.state.disabled}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }