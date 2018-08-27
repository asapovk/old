import React from 'react';
import { Icon, Flexbox } from '../';
import { isNull } from 'util';

interface FinderFilterProps {
    placeholder?: string;
    clearable?: boolean,
    onChange: (value) => void;
}

class FinderFilter extends React.Component<FinderFilterProps> {

    input: HTMLInputElement

    onChange(event) {
        if (isNull(event)) {
            this.props.onChange("");
            this.input.value = "";
            return;
        }
        this.props.onChange(event.target.value);
    }

    render() {

        const { placeholder, clearable } = this.props;

        return (
            <div className={`ui-finder2-filter`}>
                <Flexbox alignItems="center" className={`ui-finder2-filter-input`}>
                    <Icon className={`ui-finder2-filter-search-icon`} type="search" />
                    <input ref={(ref: HTMLInputElement) => this.input = ref} placeholder={placeholder} onChange={this.onChange.bind(this)} />
                    {clearable && (
                        <Flexbox className={`ui-finder2-filter-clear`} alignItems="center" justifyContent="center" onClick={() => this.onChange(null)}>
                            <Icon type='close' />
                        </Flexbox>
                    )}
                </Flexbox>
            </div>
        )

    }
}

export default FinderFilter;