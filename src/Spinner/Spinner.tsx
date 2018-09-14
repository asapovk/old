import React, { Component } from 'react';

interface Props {
    spinning?: boolean,
    center?: boolean,
    dark?: boolean,
}

class Spinner extends Component<Props> {
    render() {
        if (!this.props.spinning) {
            return this.props.children || null;
        }
        const spin = (
            <div className={`ui-spinner${this.props.dark ? " dark" : ""}`}>
                {Array(12).fill("").map((e, i) => <div key={i} />)}
            </div>
        );

        if (this.props.center) {
            return (
                <div style={{ zIndex: 999999, position: "fixed", top: 0, bottom: 0, left: 0, right: 0 }}>
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            marginLeft: -32,
                            marginTop: -32,
                        }}
                        children={spin}
                    />
                </div>
            )
        }
        return spin
    }
}

export default Spinner