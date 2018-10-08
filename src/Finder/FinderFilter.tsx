import React from 'react';
import { Icon, Flexbox, Styles } from '../';

interface Props {
    placeholder?: string
    clearable?: boolean
    onChange: (value, level) => void
    level: number
}

class FinderFilter extends React.Component<Props> {

    input: HTMLInputElement

    onChange(event) {

        if (!event) {
            this.props.onChange("", this.props.level);
            this.input.value = "";
            return;
        }
        this.props.onChange(event.target.value, this.props.level);
    }

    render() {

        const { placeholder, clearable } = this.props;

        return (
            <Styles>
                {styles => (
                    <div className={`ui-finder-filter`} style={{
                        borderColor: styles.finder.filter.borderColor,
                    }}>
                        <Flexbox alignItems="center" className={`ui-finder-filter-input`} style={{
                            background: styles.finder.filter.inputBackground,
                            borderColor: styles.finder.filter.borderColor,
                        }}>
                            <Icon className={`ui-finder-filter-search-icon`} type="search" />
                            <input ref={(ref: HTMLInputElement) => this.input = ref} placeholder={placeholder} onChange={this.onChange.bind(this)} />
                            {clearable && (
                                <Flexbox className={`ui-finder-filter-clear`} alignItems="center" justifyContent="center" onClick={() => this.onChange(null)}>
                                    <Icon type='close' />
                                </Flexbox>
                            )}
                        </Flexbox>
                    </div>
                )}
            </Styles>
        )
    }
}


export default FinderFilter;