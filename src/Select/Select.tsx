import React, { CSSProperties } from 'react';
import { Icon } from '../Icon';

interface SelectOption {
    text: string
    value: string
}

interface SelectProps {
    search?: boolean
    style?: CSSProperties
    label?: string
    disabled?: boolean
    placeholder?: string
    options?: SelectOption[]
    clearable?: boolean
    multiselect?: boolean
    defaultValue?: string | string[]
    dontClose?: boolean
    onChange?: (value: string | string[] | null) => void
}

class Select extends React.Component<SelectProps> {

    private
    holderRef = null as HTMLDivElement | null
    searchRef = null as HTMLInputElement | null
    state = {
        selectedValues: [] as string[],
        menuVisible: false as boolean,
        filteredValues: [] as string[],
        isFilterActive: false as boolean
    }

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentWillMount() {
        let defaultValue = Array.isArray(this.props.defaultValue) ? this.props.defaultValue : [this.props.defaultValue];
        defaultValue = defaultValue.filter(value => this.props.options && this.props.options.find(option => option.value === value))
        this.setState({
            selectedValues: defaultValue
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
        if (this.props.disabled) return;
        this.setState({
            menuVisible: this.state.menuVisible ?
                this.props.dontClose ? true : false
                : true
        });
    }

    onSelect(selectedValue: string) {
        let selectedValues = this.state.selectedValues;
        const isValueSelect = (selectedValues.find(value => value == selectedValue));

        if (!isValueSelect) {
            if (this.props.multiselect) {
                selectedValues.push(selectedValue)
                this.props.onChange && this.props.onChange(selectedValues);
            } else {
                selectedValues = [selectedValue];
                this.props.onChange && this.props.onChange(selectedValue);
            }
            this.setState({
                selectedValues: selectedValues,
                menuVisible: this.state.menuVisible ?
                    this.props.dontClose ? true : false
                    : true
            });
            if (this.searchRef) this.searchRef.value = '';
        }
    }

    onUnselect(unselectedValue: string) {
        let selectedValues = this.state.selectedValues
        const isValueSelect = (selectedValues.find(value => value == unselectedValue));

        if (isValueSelect) {
            selectedValues = selectedValues.filter(item => item != unselectedValue);
            this.props.onChange && this.props.multiselect && this.props.onChange(selectedValues);
            this.setState({ selectedValues: selectedValues });
        }
    }

    filterOptions(searchText: string) {
        const filteredOptions = this.props.options && searchText ?
            this.props.options.filter(option => option.text.toUpperCase().includes(searchText.toUpperCase())) : [];
        const filteredValues = filteredOptions.map(option => option.value)
        this.setState({ filteredValues: filteredValues, menuVisible: true, isFilterActive: searchText ? true : false });
    }

    searchKeyDown(event) {
        if (!event.target.value && this.props.multiselect) {
            if (event.keyCode == 8) {
                let selectedValues = this.state.selectedValues;
                selectedValues.pop();
                this.setState({ selectedValues: selectedValues });
                this.props.onChange && this.props.onChange(selectedValues);
            }
        }
    }

    render() {

        const { search, style, label, clearable, multiselect, onChange, placeholder, disabled, options } = this.props;
        const { selectedValues, filteredValues, menuVisible, isFilterActive } = this.state;

        let selectedItems: SelectOption[] = [];
        let availableItems: SelectOption[] = [];

        if (options) {
            selectedItems = selectedValues.map(value => {
                return options.find(option => option.value === value) as SelectOption;
            });

            if (multiselect) {
                availableItems = options.filter(option =>
                    !(isFilterActive && !filteredValues.find(value => option.value === value))
                    && !selectedValues.find(value => option.value === value)
                );
            }
            else {
                availableItems = options.filter(option =>
                    !(isFilterActive && !filteredValues.find(value => option.value === value))
                );
            }
        }

        const somethingSelected = (selectedItems.length > 0);

        const MenuItemsTSX = (
            availableItems.length > 0 ?
                availableItems.map((option, index) => (
                    <div
                        className={'ui-select-menu-item' +
                            ((!multiselect && selectedValues.find(value => option.value === value)) ? '-active' : '')
                        }
                        children={option.text}
                        onClick={() => this.onSelect(option.value)}
                        key={index}
                    />
                )) : <div className={'ui-select-menu-item-nofound'}>
                    {isFilterActive ? 'Не найдено' : 'Нет доступных значений'}
                </div>

        )

        const MultiSelectItemsTSX = (
            selectedItems.map(option => (
                <div className='ui-select-holder-value-option' key={option.text}>
                    <div
                        className='ui-select-holder-value-option-close'
                        onClick={(event) => {
                            if (disabled) return;
                            event.stopPropagation();
                            this.onUnselect(option.value);
                        }}>
                        <Icon type='close' />
                    </div>
                    <span>{option.text}</span>
                </div>
            ))
        )

        const SearchTSX = (
            <input
                disabled={disabled}
                className='ui-select-holder-value-input'
                placeholder={!somethingSelected ? placeholder : undefined}
                onChange={event => this.filterOptions(event.target.value)}
                onKeyDown={this.searchKeyDown.bind(this)}
                ref={ref => this.searchRef = ref}
                style={!multiselect ? { position: 'absolute' } : undefined}
            />
        )

        const HolderTSX = (
            somethingSelected ?
                multiselect ? MultiSelectItemsTSX : !isFilterActive && <div className='ui-select-holder-value-text'>{selectedItems[0].text}</div>
                : (!search && placeholder) && <div className='ui-select-holder-value-placeholder'>{placeholder}</div>
        )

        const ClearButtonTSX = (
            <span
                className='ui-select-holder-clear'
                onClick={(event) => {
                    if (disabled) {
                        return;
                    }
                    event.stopPropagation();
                    this.setState({ selectedValues: [] })
                    onChange && onChange(multiselect ? [] : null);
                }}>
                <Icon type='close' />
            </span>
        )

        return (
            <div className='ui-select' style={style}>
                <div className='ui-select-label'>
                    {label}
                </div>
                <div className={'ui-select-holder' + (menuVisible ? ' active' : '') + (disabled ? ' disabled' : '')} onClick={() => this.toggleMenu()} ref={ref => this.holderRef = ref}>
                    <div className='ui-select-holder-value'>
                        {HolderTSX}
                        {search && SearchTSX}
                    </div>
                    {(clearable && somethingSelected) && ClearButtonTSX}
                    <span className='ui-select-holder-down'>
                        <Icon type={menuVisible ? 'up' : 'down'} />
                    </span>
                    <div className={'ui-select-menu' + (menuVisible ? ' visible' : '')}>{MenuItemsTSX}</div>
                </div>
            </div>
        )
    }
}


export default Select;