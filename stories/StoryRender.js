import React from 'react';

import { Viewport, Select, Flexbox } from '../src';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: "blackCurrant" }
    }
    render() {
        return (
            <Viewport theme={this.state.theme}>
                <Flexbox p={40}>
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
            </Viewport>
        )
    }
}
export default (Name) => () => {
    const C = require('./componentStories/' + Name).default;
    return <View><C /></View>
}
