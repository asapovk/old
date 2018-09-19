import React from 'react';
import { Icon, Flexbox } from '../';
import Theme from '../Themes';

interface Props {
    placeholder?: string
    clearable?: boolean
    onChange: (value, level) => void
    level: number
}
export interface ThemedProps {
    theme
}
class FinderFilter extends React.Component<Props & ThemedProps> {

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

        const { placeholder, clearable, theme } = this.props;

        return (
            <div className={`ui-finder-filter`} style={{
                borderColor: theme.borderColor,
            }}>
                <Flexbox alignItems="center" className={`ui-finder-filter-input`} style={{
                    background: theme.inputBackground,
                    borderColor: theme.borderColor,
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
        )

    }
}


export default (props: Props) => (
    <Theme>
        {theme => (
            <FinderFilter {...props} theme={{
                backgroundColor: theme.background,
                inputBackground: theme.interface,
                borderColor: theme.pale
            }} />
        )}
    </Theme>
);
