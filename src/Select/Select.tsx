import React, { Component, CSSProperties } from 'react';
import { Styles, Icon } from '..';
import SelectMenuItem from './SelectMenuItem'

interface SelectOption {
    text: string
    value: any
}

export interface SelectProps {
    search?: boolean
    style?: CSSProperties
    label?: string
    disabled?: boolean
    placeholder?: string
    options?: SelectOption[]
    clearable?: boolean
    multiselect?: boolean
    defaultValue?: any
    dontClose?: boolean
    onChange?: (value: any) => void
    children?: any
}
class Select extends Component<SelectProps> {

    private
    holderRef = null as HTMLDivElement | null
    searchRef = null as HTMLInputElement | null
    state = {
        selectedValues: [] as any[],
        menuVisible: false as boolean,
        filteredValues: [] as any[],
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
            menuVisible: this.state.menuVisible
                ? this.props.dontClose
                    ? true
                    : false
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

        const MenuItemsTSX = (style) => (
            availableItems.length > 0 ?
                availableItems.map((option, index) => (
                    <SelectMenuItem
                        children={option.text}
                        onClick={() => this.onSelect(option.value)}
                        key={index}
                        theme={style.SelectMenuItem}
                        active={!multiselect && selectedValues.find(value => option.value === value)}
                    />
                )) : <div className={'ui-select-menu-item-nofound'}>
                    {isFilterActive ? 'Не найдено' : 'Нет доступных значений'}
                </div>
        )

        const MultiSelectItemsTSX = (style) => (
            selectedItems.map(option => (
                <div className='ui-select-holder-value-option' key={option.text} style={{
                    background: style.background,
                    borderColor: style.borderColor,
                    color: style.textColor
                }}>
                    <div
                        className='ui-select-holder-value-option-close'
                        style={{
                            borderColor: style.borderColor,
                            color: style.textColor,
                        }}
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

        const SearchTSX = (style) => (
            <input
                disabled={disabled}
                className='ui-select-holder-value-input'
                placeholder={!somethingSelected ? placeholder : undefined}
                onChange={event => this.filterOptions(event.target.value)}
                onKeyDown={this.searchKeyDown.bind(this)}
                ref={ref => this.searchRef = ref}
                style={{ position: !multiselect ? 'absolute' : "relative", color: style.textColor, }}
            />
        )

        const HolderTSX = (style) => (
            somethingSelected
                ? multiselect
                    ? MultiSelectItemsTSX(style)
                    : !isFilterActive && <div className='ui-select-holder-value-text'>{selectedItems[0].text}</div>
                : (!search && placeholder) && <div className='ui-select-holder-value-placeholder'>{placeholder}</div>
        )

        const ClearButtonTSX = (style) => (
            <span
                style={{ color: style.labelColor }}
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
        );

        return (
            <Styles>
                {styles => (
                    <div className={'ui-select' + (disabled ? ' disabled' : '')} style={{
                        ...style
                    }}>
                        <div className='ui-select-label' style={{ color: styles.select.labelColor }}>
                            {label}
                        </div>
                        <div
                            className={'ui-select-holder' + (menuVisible ? ' active' : '')}
                            onClick={() => this.toggleMenu()}
                            ref={ref => this.holderRef = ref}
                            style={{
                                background: styles.select.background,
                                borderColor: styles.select.borderColor,
                                borderRadius: styles.theme.radius.default
                            }}
                            key={'search'}
                        >
                            <div className='ui-select-holder-value' style={{ color: styles.select.textColor }}>
                                {HolderTSX(styles.select)}
                                {search && SearchTSX(styles.select)}
                            </div>
                            {(clearable && somethingSelected) && <ClearButtonTSX style={styles.select} />}
                            <span className='ui-select-holder-down' style={{ color: styles.select.labelColor }}>
                                <Icon type={menuVisible ? 'up' : 'down'} />
                            </span>
                            <div className={'ui-select-menu' + (menuVisible ? ' visible' : '')} style={{ borderColor: styles.select.borderColor, background: styles.select.background }}>{MenuItemsTSX(styles.select)}</div>
                        </div>
                    </div>
                )}
            </Styles>

        )
    }
}

export default Select;
