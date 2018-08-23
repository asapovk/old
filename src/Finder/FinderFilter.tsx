import React from 'react';
import { Icon } from '../';


interface FinderFilterProps {
    placeholder?: string;
    clearable?: boolean
}

class FinderFilter extends React.Component<FinderFilterProps> {

    render() {

        const { placeholder, clearable } = this.props;

        return (
            <div className='ui-finder-filter'>
                <div className='ui-finder-filter-input'>
                    <input placeholder={placeholder} />
                    {clearable && <span><Icon type='close' /></span>}
                </div>
            </div>
        )

    }
}

export default FinderFilter;