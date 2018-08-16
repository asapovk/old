import React from 'react';
import { Icon } from '../Icon';

interface SelectProps {
    search?: any
    style?: any
    label?: any
    placeholder?: any
    options?: {
        text: string
        value: string
    }[]
    clearable?: boolean
    defaultValue?: any
    onChange?: (options) => void
}

interface Select {
    holderRef: any
    menuVisible: any
    inputRef: any
    state: {
        options: any
        chosen: any
        menuVisible: any
    }
}

class Select extends React.Component<SelectProps> {

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.state = {
            options: [],
            chosen: 0,
            menuVisible: false
        }
    }

    static defaultProps = {
        placeholder: 'Выберите значение'
    }

    componentWillMount() {
        const defaultIndex = this.props.options ? this.props.options.findIndex(option => option.value === this.props.defaultValue) : -1;
        this.setState({ chosen: defaultIndex, options: this.props.options });
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.holderRef && !this.holderRef.contains(event.target)) {
            this.setState({ menuVisible: false })
        }
    }

    toggleMenu() {
        this.setState({ menuVisible: this.state.menuVisible ? false : true });
    }

    filterOptions(value) {
        const filteredOptions = this.props.options ? this.props.options.filter(option => option.text.includes(value)) : [];
        this.setState({ options: filteredOptions, menuVisible: filteredOptions.length > 0 ? true : false });
    }

    render() {

        const { search, style, label, onChange, clearable } = this.props;
        const { options, chosen, menuVisible } = this.state;

        const ListJSX = (
            options && options.map((option, index) => (
                <div
                    className={'ui-select-menu-item' + (this.state.chosen == index ? ' sel-chosen' : '')}
                    children={option.text}
                    onClick={event => {
                        this.setState({ chosen: index });
                        this.toggleMenu();
                        onChange && onChange(options[index].value);
                        if (this.inputRef) {
                            this.inputRef.value = options[index].text;
                        }
                    }}
                    key={option.key ? option.key : option.text}
                />
            ))
        )

        const SearchJSX = (
            <input
                className='ui-select-holder-value-input'
                defaultValue={chosen != -1 ? options[chosen].text : ''}
                onChange={event => this.filterOptions(event.target.value)}
                ref={ref => this.inputRef = ref}
            />
        )

        const clearToolTSX = <span className='ui-select-holder-clear' onClick={(event) => { event.stopPropagation(); this.setState({ chosen: -1 }) }}><Icon type='close' /></span>
        const downIconTSX = <span className='ui-select-holder-down'><Icon type={menuVisible ? 'up' : 'down'} /></span>

        return (
            <div className='ui-select' style={style}>
                <div className='ui-select-label'>
                    {label}
                </div>
                <div className={'ui-select-holder' + (menuVisible ? ' active' : '')} onClick={() => this.toggleMenu()} ref={ref => this.holderRef = ref}>
                    <div className='ui-select-holder-value'>
                        {search ? SearchJSX : options[chosen].text}
                    </div>
                    {clearable && clearToolTSX}
                    {downIconTSX}
                    <div className={'ui-select-menu' + (menuVisible ? ' visible' : '')}>
                        {ListJSX}
                    </div>
                </div>
            </div>
        )
    }
}


export default Select;