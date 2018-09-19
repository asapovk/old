import React from 'react';

import { storiesOf } from '@storybook/react';
import '../src/scss/main.scss';

import {
    TextField,
    Viewport,
    Button,
    Icon,
    Login,
    Select,
    Checkbox,
    Spinner,
    Spin,
    Modal,
    Flexbox
} from '../src';

import SampleStory from './componentStories/_SampleStory';
import PopupStory from './componentStories/PopupStory';
import FinderStory from './componentStories/FinderStory';
import FlexboxStory from './componentStories/FlexboxStory';
import TableStory from './componentStories/TableStory';
import SelectStory from './componentStories/SelectStory';
import WidgetStory from './componentStories/WidgetStory';
import TitleStory from './componentStories/TitleStory';
import ChartStory from './componentStories/ChartStory';
import WidgetStatStory from './componentStories/WidgetStatStory';
import { MenuStory, loginUser } from './componentStories/MenuStory';

const flexCentered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

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
                            {text: "Черная смородина", value: "blackCurrant"}, 
                            {text: "Белая смородина", value: "whiteCurrant"}
                        ]} 
                        defaultValue={this.state.theme} 
                        onChange={theme => this.setState({theme})}
                    />
                </Flexbox>
                {this.props.children}
            </Viewport>
        )
    }
}

storiesOf('💥 Core', module)
    .add('Viewport', () => (
        <View>there's nothing to see.</View>
    ))
    .add('Button', () => (
        <View>
            <Flexbox>
                <Flexbox p={10}>
                    <Button>Simple button</Button>
                </Flexbox>
                <Flexbox p={10}>
                    <Button decoration="none">Decoration none</Button>
                </Flexbox>
                <Flexbox p={10}>
                    <Button loading>Loading button</Button>
                </Flexbox>
            </Flexbox>
        </View>
    ))
    .add('TextField', () => (
        <View>
            <div style={{ width: '626px', display: 'flex', flexDirection: 'column', height: '500px' }}>
                <TextField label='Just input' style={{ flexBasis: '90px', flexGrow: '0' }} type='password' />
                <TextField multiline={true} label='Textarea' style={{ paddingBottom: '40px' }} />
                <TextField multiline={true} singlerow={true} label='Singlerow textarea' />
            </div>
        </View>
    ))
    .add('Select', () => (
        <View>
            <SelectStory />
        </View>
    ))
    .add('Table', () => (
        <View>
            <TableStory />
        </View>
    ))
    .add('Menu', () => (
        <View>
            <MenuStory />
        </View>
    ))
    .add('Chart', () => (
        <View>
            <ChartStory />
        </View>
    ))
    .add('Finder', () => (
        <View>
            <FinderStory />
        </View>
    ))
    .add('Popup', () => (
        <View>
            <PopupStory />
        </View>
    ))
    .add('Title', () => (
        <View>
            <TitleStory />
        </View>
    ))
    .add('Checkbox', () => (
        <View>
            <Checkbox label='Check me' style={{ paddingRight: '40px' }} />
            <Checkbox label='Check me' radio={true} />
        </View>
    ))
    .add('Icon', () => (
        <View>
            <style children='.desc{font-size: 12px; color: #5c6173; padding-top: 10px} .cont{display: flex; align-items: center; flex-direction: column}' />
            <div className='cont'><Icon type='add' /><span className='desc'>Add</span></div>
            <div className='cont'><Icon type='more' /><span className='desc'>more</span></div>
            <div className='cont'><Icon type='close' /><span className='desc'>close</span></div>
            <div className='cont'><Icon type='left' /><span className='desc'>left</span></div>
            <div className='cont'><Icon type='right' /><span className='desc'>right</span></div>
            <div className='cont'><Icon type='down' /><span className='desc'>down</span></div>
            <div className='cont'><Icon type='up' /><span className='desc'>up</span></div>
            <div className='cont'><Icon type='check' /><span className='desc'>check</span></div>
            <div className='cont'><Icon type='search' /><span className='desc'>search</span></div>
            <div className='cont'><Icon type='sync' /><span className='desc'>sync</span></div>
            <div className='cont'><Icon type='settings' /><span className='desc'>settings</span></div>
        </View>
    ))
    .add('Spinner', () => (
        <View>
            <Spinner spinning />
        </View>
    ))
    .add('Spin', () => (
        <View>
            <Spin>
                <Icon type='sync' style={{ fontSize: 32 }} />
            </Spin>
        </View>
    ))
    .add('Widget', () => (
        <View>
            <WidgetStory />
        </View>
    ))
    .add('WidgetStat', () => (
        <View>
            <WidgetStatStory />
        </View>
    ))
    .add('Modal', () => (
        <View>
            <Modal title="Модальное окно" subtitle={"Нажмите close"} ref={ref => window.modal = ref}>
                <Flexbox justifyContent="center">
                    <Button onClick={() => window.modal.close()}>Close</Button>
                </Flexbox>
            </Modal>
            <Button onClick={() => window.modal.open()}>Open</Button>
        </View>
    ))
    .add('Flexbox', () => (
        <View>
            <FlexboxStory />
        </View>
    ));

storiesOf('🔪 Misc', module)
    .add('Login', () => (
        <View>
            <Login
                name={loginUser.first_name}
                login={loginUser.login}
                fullname={loginUser.first_name + ' ' + loginUser.last_name}
                role={loginUser.desc_role}
            />
        </View>
    ));