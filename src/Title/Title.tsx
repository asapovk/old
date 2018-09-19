import React, { Component, Fragment, Children } from 'react';
import { Flexbox } from '../index';
import Theme from '../Themes';

interface Props {
    style?: any
    children?: any
    defaultValue?: boolean
    value?: boolean
    onLabel?: string
    offLabel?: string
    onChange?: (state: boolean) => void
}
export interface ThemedProps {
    theme
}
class Title extends Component<Props & ThemedProps> {
    state = {
        on: false
    }
    onChange(on) {
        this.setState({ on });
        if (this.props.onChange) {
            this.props.onChange(on);
        }
    }
    componentWillMount() {
        if (this.props.defaultValue) {
            this.setState({ on: true });
        }
    }
    render() {
        const { children, style, onChange, value, onLabel, offLabel, theme } = this.props;
        let classes = 'ui-title';

        const state = (typeof value !== "undefined") ? value : this.state.on;

        return (
            <Flexbox className={classes} style={style}>
                {children}
                {(typeof onChange === "function") ? (
                    <Flexbox>
                        <div
                            onClick={() => this.onChange(true)}
                            style={{ color: theme.highlightColor }}
                            className={`ui-title-action${state ? " ui-title-action-active" : ""}`}>{onLabel || "ВКЛ"}</div>
                        <div
                            onClick={() => this.onChange(!state)}
                            style={{ borderColor: theme.highlightColor }}
                            className={`ui-title-switch${!state ? " ui-title-switch-active" : ""}`}
                            children={<span style={{ background: theme.highlightColor }} />}
                        />
                        <div
                            onClick={() => this.onChange(false)}
                            style={{ color: theme.highlightColor }}
                            className={`ui-title-action${!state ? " ui-title-action-active" : ""}`}>{offLabel || "ВЫКЛ"}</div>
                    </Flexbox>
                ) : null}
            </Flexbox>
        );
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <Title {...props} theme={{
                textColor: theme.text,
                highlightColor: theme.highlight
            }} />
        )}
    </Theme>
);