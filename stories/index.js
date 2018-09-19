import React from 'react';

import { storiesOf } from '@storybook/react';
import '../src/scss/main.scss';

import { Viewport, Select, Flexbox } from '../src';

import ViewportStory from './componentStories/ViewportStory';
import ButtonStory from './componentStories/ButtonStory';
import TextfieldStory from './componentStories/TextfieldStory';
import CheckboxStory from './componentStories/CheckboxStory';
import SpinStory from './componentStories/SpinStory';
import IconStory from './componentStories/IconStory';
import PopupStory from './componentStories/PopupStory';
import FinderStory from './componentStories/FinderStory';
import FlexboxStory from './componentStories/FlexboxStory';
import TableStory from './componentStories/TableStory';
import SpinnerStory from './componentStories/SpinnerStory';
import SelectStory from './componentStories/SelectStory';
import WidgetStory from './componentStories/WidgetStory';
import TitleStory from './componentStories/TitleStory';
import ChartStory from './componentStories/ChartStory';
import WidgetStatStory from './componentStories/WidgetStatStory';
import LoginStory from './componentStories/LoginStory';
import ModalStory from './componentStories/ModalStory';
import { MenuStory } from './componentStories/MenuStory';

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "blackCurrant"
        }
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
View.render = (Component) => () => <View><Component /></View>

storiesOf('💥 Core', module)
    .add('Viewport', View.render(ViewportStory))
    .add('Button', View.render(ButtonStory))
    .add('TextField', View.render(TextfieldStory))
    .add('Select', View.render(SelectStory))
    .add('Table', View.render(TableStory))
    .add('Menu', View.render(MenuStory))
    .add('Chart', View.render(ChartStory))
    .add('Finder', View.render(FinderStory))
    .add('Popup', View.render(PopupStory))
    .add('Title', View.render(TitleStory))
    .add('Checkbox', View.render(CheckboxStory))
    .add('Icon', View.render(IconStory))
    .add('Spinner', View.render(SpinnerStory))
    .add('Spin', View.render(SpinStory))
    .add('Widget', View.render(WidgetStory))
    .add('WidgetStat', View.render(WidgetStatStory))
    .add('Modal', View.render(ModalStory))
    .add('Flexbox', View.render(FlexboxStory));

storiesOf('🔪 Misc', module)
    .add('Login', View.render(LoginStory));