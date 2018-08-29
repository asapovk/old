import React from 'react';
import { Icon } from '../Icon';

interface SelectProps {
    search?: boolean
    style?: any
    label?: string
    disabled?: boolean
    placeholder?: string
    options?: {
        text: string
        value: string
    }[]
    clearable?: boolean
    multiselect?: boolean
    defaultValue?: any
    onChange?: (value) => void
}

interface Select {
    holderRef: any
    menuVisible: any
    inputRef: any
    state: {
        options: any
        menuVisible: any
        selected: undefined | any[]
    }
}

class Select extends React.Component<SelectProps> {

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.state = {
            options: [],
            selected: undefined,
            menuVisible: false
        }
    }

    componentWillMount() {
        let selected

        if (Array.isArray(this.props.defaultValue)) {
            if (!this.props.multiselect) {
                selected = this.props.options
                    && this.props.options.find(option => option.value == this.props.defaultValue[0])
                    && [this.props.options.find(option => option.value == this.props.defaultValue[0])];

            } else {
                selected = this.props.options && this.props.options.filter(option =>
                    option.value == this.props.defaultValue.find(value => value == option.value)
                );
            }
        } else {
            selected = this.props.options
                && this.props.options.find(option => option.value == this.props.defaultValue)
                && [this.props.options.find(option => option.value == this.props.defaultValue)];
        }

        this.setState({
            selected: selected,
            options: this.props.options
        });

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
        this.setState({
            menuVisible: this.state.menuVisible ? false : true
        });
    }

    onSelect(option) {
        if (this.props.disabled) {
            return;
        }
        let selected = this.state.selected ? this.state.selected : [];
        const isAlreadySelect = (selected.find(select => select == option));

        if (!isAlreadySelect) {
            if (this.props.multiselect) {
                selected.push(option)
                this.props.onChange && this.props.onChange(selected.map(select => select.value));
            } else {
                selected = [option];
                this.props.onChange && this.props.onChange(option.value);
                if (this.inputRef) this.inputRef.value = option.text;
            }
            this.setState({
                selected: selected,
                menuVisible: this.state.menuVisible ? false : true
            });
        }
    }

    onUnselect(option) {
        const selected = this.state.selected &&
            this.state.selected.filter(select => select != option).length > 0 ?
            this.state.selected.filter(select => select != option) : undefined;
        this.setState({ selected: selected });
        this.props.onChange && this.props.onChange(selected && selected.map(select => select.value));
    }

    filterOptions(value) {
        const filteredOptions = this.props.options ? this.props.options.filter(option => option.text.includes(value)) : [];
        this.setState({ options: filteredOptions, menuVisible: filteredOptions.length > 0 ? true : false });
    }

    render() {

        const { search, style, label, clearable, multiselect, onChange, placeholder, disabled } = this.props;
        const { options, selected, menuVisible } = this.state;

        const PlaceholderTSX = (
            <div className='ui-select-holder-value-placeholder'>{placeholder}</div>
        )

        const ValueTSX = (
            search ?
                <input
                    disabled={disabled}
                    className='ui-select-holder-value-input'
                    defaultValue={multiselect ? '' : selected && selected[0].text}
                    onChange={event => this.filterOptions(event.target.value)}
                    ref={ref => this.inputRef = ref}
                /> : !multiselect && selected && selected[0].text
        )

        const StateIconTSX = (
            <span className='ui-select-holder-down'>
                <Icon type={menuVisible ? 'up' : 'down'} />
            </span>
        )

        const ClearButtonTSX = (
            <span
                className='ui-select-holder-clear'
                onClick={(event) => {
                    if (disabled) {
                        return;
                    }
                    event.stopPropagation();
                    this.setState({ selected: undefined })
                    onChange && onChange([]);
                }}>
                <Icon type='close' />
            </span>
        )

        const unselected = !(multiselect && selected && options) ? options :
            options.filter(option => selected.findIndex(select => select == option) < 0);

        const MenuTSX = (
            unselected && unselected.map((option, index) => (
                <div
                    className={'ui-select-menu-item'}
                    children={option.text}
                    onClick={() => this.onSelect(unselected[index])}
                    key={option.key ? option.key : option.text}
                />
            ))
        )

        const MultiSelectTSX = (
            multiselect && selected && selected.map(option => (
                <div className='ui-select-holder-value-option' key={option.text}>
                    <div
                        className='ui-select-holder-value-option-close'
                        onClick={(event) => {
                            event.stopPropagation();
                            this.onUnselect(option);
                        }}>
                        <Icon type='close' />
                    </div>
                    <span>{option.text}</span>
                </div>
            ))
        )

        return (
            <div className='ui-select' style={style}>
                <div className='ui-select-label'>
                    {label}
                </div>
                <div className={'ui-select-holder' + (menuVisible ? ' active' : '') + (disabled ? ' disabled' : '')} onClick={() => this.toggleMenu()} ref={ref => this.holderRef = ref}>
                    <div className='ui-select-holder-value'>
                        {MultiSelectTSX}
                        {placeholder && !selected ? PlaceholderTSX : ValueTSX}
                    </div>
                    {clearable && ClearButtonTSX} {StateIconTSX}
                    <div className={'ui-select-menu' + (menuVisible ? ' visible' : '')}>{MenuTSX}</div>
                </div>
            </div>
        )
    }
}


export default Select;