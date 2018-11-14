import React, { Component } from 'react';
import { Viewport, Select, Flexbox, Checkbox, Styles } from '../src';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "abrTheme",
            row: false
        }
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
                <Flexbox p={'3rem'} style={{ zIndex: '99999' }} alignItems="center">
                    <Select
                        label={"Тема оформления"}
                        options={[
                            { text: "Черная смородина (blackCurrant)", value: "blackCurrant" },
                            { text: "Белая смородина (blackCurrant)", value: "whiteCurrant" },
                            { text: "АБР (abrTheme)", value: "abrTheme" },
                            { text: "Газпром (gazpromTheme)", value: "gazpromTheme" }
                        ]}
                        defaultValue={this.state.theme}
                        onChange={theme => this.setState({ theme })}
                        style={{ marginRight: '2rem' }}
                    />
                    <Checkbox
                        label='Строки'
                        onChange={(value) => this.setState({ row: value })}
                        style={{ paddingTop: 12 }}
                    />
                </Flexbox>
                {this.props.children}
                <Styles>
                    {styles =>
                        this.state.row
                            ? <div
                                style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: -1 }}
                                children={linesTSX(styles.theme.pale.rgba(0.2))}
                            />
                            : null
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
