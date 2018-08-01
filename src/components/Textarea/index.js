import './style.scss'

export default class Textarea extends React.Component {

    static defaultProps = {
        errorSet: _ => { },
        errorUnset: _ => { },
        onChange: value => { }
    }

    state = {
        classes: 'textarea',
        isValid: true
    }

    validate(value) {
        let isValid = true;
        if (Array.isArray(this.props.validate)) {
            this.props.validate.forEach(validate => {
                if (validate[0].test(value) == Boolean(validate[2])) {
                    this.setState({ classes: 'textarea error', isValid: false });
                    this.props.errorSet(validate[1]);
                    isValid = false;
                }
            });
            if (isValid) {
                if (!this.state.isValid) this.props.errorUnset();
                this.setState({ classes: 'textarea', isValid: true });
            }
        }   
        return isValid;
    }

    render() {

        const { label, value, defaultValue, singlerow, style } = this.props;

        return <div className={this.state.classes} style={style}>
            <div className='textarea-label'>{label}</div>
            <textarea
                defaultValue={defaultValue}
                value={value}
                onKeyDown={(event) => {
                    if (singlerow && event.keyCode === 13) {
                        event.preventDefault();
                    }
                }}
                onChange={(event) => {
                    if (this.validate(event.target.value)) {
                        this.props.onChange(event.target.value);
                    }
                }}
                onClick={(event) => { this.validate(event.target.value) }}
            />
        </div>
    }
}