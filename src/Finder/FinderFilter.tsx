import React from 'react';
import { Icon } from '../';


interface FinderFilterProps {
    placeholder?: string;
    clearable?: boolean,
    filterChange?: (value, level) => void;
    level?: number
}

class FinderFilter extends React.Component<FinderFilterProps> {

    onChange(value) {
        typeof this.props.level != 'undefined' &&
            this.props.filterChange &&
            this.props.filterChange(value, this.props.level);
    }

    render() {

        const { placeholder, clearable, filterChange, level } = this.props;

        return (
            <div className='ui-finder-filter'>
                <div className='ui-finder-filter-input'>
                    <input placeholder={placeholder} onChange={event => this.onChange(event.target.value)} />
                    {clearable && <span><Icon type='close' /></span>}
                </div>
            </div>
        )

    }
}

export default FinderFilter;