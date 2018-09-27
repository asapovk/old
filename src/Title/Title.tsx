import React, { Component } from 'react';
import { Flexbox, Theme } from '../index';

interface Props {
    style?: any
    children?: any
    defaultValue?: boolean
    value?: boolean
    onLabel?: string
    offLabel?: string
    onChange?: (state: boolean) => void
}
class Title extends Component<Props> {
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
        const { children, style, onChange, value, onLabel, offLabel } = this.props;

        let classes = 'ui-title';
        const state = (typeof value !== "undefined") ? value : this.state.on;

        return (
            <Theme>
                {styles => (
                    <Flexbox className={classes} style={style}>
                        {children}
                        {(typeof onChange === "function") ? (
                            <Flexbox>
                                <div
                                    onClick={() => this.onChange(true)}
                                    style={styles.title.active}
                                    className={`ui-title-action${state ? " ui-title-action-active" : ""}`}>{onLabel || "ВКЛ"}</div>
                                <div
                                    onClick={() => this.onChange(!state)}
                                    style={{ borderColor: styles.theme.highlight.rgb }}
                                    className={`ui-title-switch${!state ? " ui-title-switch-active" : ""}`}
                                    children={<span style={{ background: styles.theme.highlight.rgb }} />}
                                />
                                <div
                                    onClick={() => this.onChange(false)}
                                    style={styles.title.active}
                                    className={`ui-title-action${!state ? " ui-title-action-active" : ""}`}
                                    children={offLabel || "ВЫКЛ"}
                                />
                            </Flexbox>
                        ) : null}
                    </Flexbox>
                )}
            </Theme>
        );
    }
}

export default Title;