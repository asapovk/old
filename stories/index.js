import $ from './StoryRender';
import { storiesOf } from '@storybook/react';
import '../src/scss/main.scss';

storiesOf('Основные компоненты')
    .add('Viewport', $('ViewportStory'))
    .add('Typography', $('TypographyStory'))
    .add('Button', $('ButtonStory'))
    .add('TextField', $('TextfieldStory'))
    .add('Select', $('SelectStory'))
    .add('DatePicker', $('DatePickerStory'))
    .add('Table', $('TableStory'))
    .add('Menu', $('MenuStory'))
    .add('Chart', $('ChartStory'))
    .add('Finder', $('FinderStory'))
    .add('Popup', $('PopupStory'))
    .add('Title', $('TitleStory'))
    .add('Checkbox', $('CheckboxStory'))
    .add('Icon', $('IconStory'))
    .add('Spinner', $('SpinnerStory'))
    .add('Spin', $('SpinStory'))
    .add('Widget', $('WidgetStory'))
    .add('WidgetStat', $('WidgetStatStory'))
    .add('Modal', $('ModalStory'))
    .add('Flexbox', $('FlexboxStory'));

storiesOf('Другое')
    .add('Login', $('LoginStory'));

storiesOf("utils")
    .add('alert', $('UtilsAlertStory'))
    .add('notification', $('UtilsNotificationStory'))
    .add('getTheme', $('UtilsGetThemeStory'))
