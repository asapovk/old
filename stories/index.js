import React from 'react';

import { storiesOf } from '@storybook/react';
import '../src/scss/main.scss';

import {
    TextField,
    Viewport,
    Button,
    Icon,
    Login,
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
import WidgetStatStory from './componentStories/WidgetStatStory';
import { MenuStory, loginUser } from './componentStories/MenuStory';

const flexCentered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

storiesOf('💥 Core', module)
    .add('Viewport', () => (
        <SampleStory />
    ))
    .add('Button', () => (
        <Viewport style={flexCentered} theme='telegramDark'>
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
        </Viewport>
    ))
    .add('TextField', () => (
        <Viewport style={flexCentered}>
            <div style={{ width: '626px', display: 'flex', flexDirection: 'column', height: '500px' }}>
                <TextField label='Just input' style={{ flexBasis: '90px', flexGrow: '0' }} type='password' />
                <TextField multiline={true} label='Textarea' style={{ paddingBottom: '40px' }} />
                <TextField multiline={true} singlerow={true} label='Singlerow textarea' />
            </div>
        </Viewport>
    ))
    .add('Select', () => (
        <SelectStory />
    ))
    .add('Table', () => (
        <TableStory />
    ))
    .add('Menu', () => (
        <MenuStory />
    ))
    .add('Finder', () => (
        <Viewport style={flexCentered}>
            <FinderStory />
        </Viewport>
    ))
    .add('Popup', () => (
        <Viewport style={flexCentered}>
            <PopupStory />
        </Viewport>
    ))
    .add('Title', () => (
        <TitleStory />
    ))
    .add('Checkbox', () => (
        <Viewport style={flexCentered}>
            <Checkbox label='Check me' style={{ paddingRight: '40px' }} />
            <Checkbox label='Check me' radio={true} />
        </Viewport>
    ))
    .add('Icon', () => (
        <Viewport style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row', fontSize: 24, justifyContent: 'space-between', padding: '80px' }}>
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
        </Viewport >
    ))
    .add('Spinner', () => (
        <Viewport style={flexCentered}>
            <Spinner spinning />
        </Viewport>
    ))
    .add('Spin', () => (
        <Viewport style={flexCentered}>
            <Spin>
                <Icon type='sync' style={{ fontSize: 32 }} />
            </Spin>
        </Viewport>
    ))
    .add('Widget', () => (
        <WidgetStory />
    ))
    .add('WidgetStat', () => (
        <WidgetStatStory />
    ))
    .add('Modal', () => (
        <Viewport style={flexCentered}>
            <Modal title="Модальное окно" subtitle={"Нажмите close"} ref={ref => window.modal = ref}>
                <Flexbox justifyContent="center">
                    <Button onClick={() => window.modal.close()}>Close</Button>
                </Flexbox>
            </Modal>
            <Button onClick={() => window.modal.open()}>Open</Button>
        </Viewport>
    ))
    .add('Flexbox', () => (
        <FlexboxStory />
    ));

storiesOf('🔪 Misc', module)
    .add('Login', () => (
        <Viewport style={flexCentered}>
            <Login
                name={loginUser.first_name}
                login={loginUser.login}
                fullname={loginUser.first_name + ' ' + loginUser.last_name}
                role={loginUser.desc_role}
            />
        </Viewport>
    ));