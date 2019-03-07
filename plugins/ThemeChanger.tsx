import React from 'react';
import { IPluginProps } from 'showcase-ui/types'

function SimplePlugin(props: IPluginProps) {
    ThemeSwitch.contextType = props.context;
    props.panel({
        tool: () => <ThemeSwitch />
    })
}

class ThemeSwitch extends React.Component {

    state = {
        theme: 'blackCurrant' as string
    }

    componentWillMount() {
        const theme = localStorage.getItem('UItheme');
        if (theme) {
            this.setState({
                theme: theme
            })
        }
    }

    changeTheme(theme) {
        this.setState({
            theme: theme
        })
        this.context.changeTheme(theme)
    }

    render() {

        const selectStyle: any = {
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "4px",
            appearance: "none",
            WebkitAppearance: "none",
            padding: 10,
            fontSize: 12,
            textTransform: "uppercase",
            fontWeight: 600,
            outline: "none",
        }
        return (
            <select
                style={selectStyle}
                onChange={(event) => { this.changeTheme(event.target.value) }}
                value={this.state.theme}
            >
                <option value="blackCurrant">Черная смородина</option>
                <option value="whiteCurrant">Белая смородина</option>
                <option value="abrTheme">АБР</option>
                <option value="gazpromTheme">Газпром</option>
            </select>
        )
    }
}

export default SimplePlugin;