import React, { Component, Fragment, Children } from 'react';
import { Flexbox } from '../index';

interface Props {
    style?: any
    children: string
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
            <Flexbox className={classes} style={style}>
                {children}
                {(typeof onChange === "function") ? (
                    <Flexbox>
                        <div
                            onClick={() => this.setState({ on: true })}
                            className={`ui-title-action${state ? " ui-title-action-active" : ""}`}>{onLabel || "ВКЛ"}</div>
                        <div
                            onClick={() => this.setState({ on: !state })}
                            className={`ui-title-switch${!state ? " ui-title-switch-active" : ""}`}>
                            <span />
                        </div>
                        <div
                            onClick={() => this.setState({ on: false })}
                            className={`ui-title-action${!state ? " ui-title-action-active" : ""}`}>{offLabel || "ВЫКЛ"}</div>
                    </Flexbox>
                ) : null}
            </Flexbox>
        );
    }
}

export default Title;