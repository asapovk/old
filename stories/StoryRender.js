import React, { Component } from 'react';
import { Viewport, Select, Flexbox, Styles } from '../src';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = { theme: "blackCurrant" }
    }
    render() {
        const linesTSX = (color) => {
            let lines = [];
            for (let i = 0; i < 180; i++) {
                lines.push(<p style={{ background: color, marginTop: i === 0 ? 0 : '1rem' }}>&nbsp;</p>)
            }
            return lines;
        }
        return (
            <Viewport theme={this.state.theme} style={{ zIndex: -2 }}>
                <Flexbox p={'3rem'} style={{ zIndex: '99999' }}>
                    <Select
                        label={"Тема оформления"}
                        options={[
                            { text: "Черная смородина", value: "blackCurrant" },
                            { text: "Белая смородина", value: "whiteCurrant" }
                        ]}
                        defaultValue={this.state.theme}
                        onChange={theme => this.setState({ theme })}
                    />
                </Flexbox>
                {this.props.children}
                <Styles>
                    {styles =>
                        <div
                            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: -1 }}
                            children={linesTSX(styles.theme.pale.rgba(0.2))}
                        />
                    }
                </Styles>
            </Viewport>
        )
    }
}
export default (Name) => () => {
    const C = require('./include/' + Name).default;
    return <View><C /></View>
}
