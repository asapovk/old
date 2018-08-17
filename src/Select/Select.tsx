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
    multiselect?: boolean
    defaultValue?: any
    onChange?: (options) => void
}

interface Select {
    holderRef: any
    menuVisible: any
    inputRef: any
    state: {
        options: any
        menuVisible: any
        selected: any
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
        const selected = this.props.options && this.props.defaultValue && this.props.options.find(option => option.value == this.props.defaultValue);
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
        let selected = this.state.selected ? this.state.selected : [];
        const isAlreadySelect = (selected.find(select => select == option));

        if (!isAlreadySelect) {
            this.props.multiselect ? selected.push(option) : selected = [option];
            this.setState({
                selected: selected,
                menuVisible: this.state.menuVisible ? false : true
            });
        }
    }

    onUnselect(option) {
        this.setState({ selected: this.state.selected.filter(select => select != option) })
    }

    filterOptions(value) {
        const filteredOptions = this.props.options ? this.props.options.filter(option => option.text.includes(value)) : [];
        this.setState({ options: filteredOptions, menuVisible: filteredOptions.length > 0 ? true : false });
    }

    render() {

        const { search, style, label, clearable, multiselect } = this.props;
        const { options, selected, menuVisible } = this.state;

        const unselected = selected ? options && options.filter(option => selected.findIndex(select => select == option) < 0) : options;


        const MultiSelectTSX = (
            multiselect && selected && selected.map(option => (
                <div onClick={(event) => {
                    event.stopPropagation();
                    this.onUnselect(option);
                }}>
                    <Icon type='close' />
                    {option.text}
                </div>
            ))
        )

        const SearchBarTSX = (
            <input
                className='ui-select-holder-value-input'
                defaultValue={multiselect ? '' : selected && selected[0].text}
                onChange={event => this.filterOptions(event.target.value)}
                ref={ref => this.inputRef = ref}
            />
        )

        const ClearButtonTSX = (
            <span
                className='ui-select-holder-clear'
                onClick={(event) => {
                    event.stopPropagation();
                    this.setState({ selected: undefined })
                }}>
                <Icon type='close' />
            </span>
        )

        const StateIconTSX = (
            <span className='ui-select-holder-down'>
                <Icon type={menuVisible ? 'up' : 'down'} />
            </span>
        )

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

        return (
            <div className='ui-select' style={style}>
                <div className='ui-select-label'>
                    {label}
                </div>
                <div className={'ui-select-holder' + (menuVisible ? ' active' : '')} onClick={() => this.toggleMenu()} ref={ref => this.holderRef = ref}>
                    <div className='ui-select-holder-value'>
                        {MultiSelectTSX}
                        {search ? SearchBarTSX : !multiselect && selected && selected[0].text}
                    </div>
                    {clearable && ClearButtonTSX} {StateIconTSX}
                    <div className={'ui-select-menu' + (menuVisible ? ' visible' : '')}>{MenuTSX}</div>
                </div>
            </div>
        )
    }
}


export default Select;