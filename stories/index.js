import React from 'react';
import StoryRender from './StoryRender';
import { storiesOf } from '@storybook/react';
import '../src/scss/main.scss';

storiesOf('💥 Core', module)
    .add('Viewport', StoryRender('ViewportStory'))
    .add('Button', StoryRender('ButtonStory'))
    .add('TextField', StoryRender('TextfieldStory'))
    .add('Select', StoryRender('SelectStory'))
    .add('Table', StoryRender('TableStory'))
    .add('Menu', StoryRender('MenuStory'))
    .add('Chart', StoryRender('ChartStory'))
    .add('Finder', StoryRender('FinderStory'))
    .add('Popup', StoryRender('PopupStory'))
    .add('Title', StoryRender('TitleStory'))
    .add('Checkbox', StoryRender('CheckboxStory'))
    .add('Icon', StoryRender('IconStory'))
    .add('Spinner', StoryRender('SpinnerStory'))
    .add('Spin', StoryRender('SpinStory'))
    .add('Widget', StoryRender('WidgetStory'))
    .add('WidgetStat', StoryRender('WidgetStatStory'))
    .add('Modal', StoryRender('ModalStory'))
    .add('Flexbox', StoryRender('FlexboxStory'));

storiesOf('🔪 Misc', module)
    .add('Login', StoryRender('LoginStory'));