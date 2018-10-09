import $ from './StoryRender';
import { storiesOf } from '@storybook/react';
import '../src/Styles/scss/main.scss';

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
    .add('Widget', $('WidgetStory'))
    .add('WidgetStat', $('WidgetStatStory'))
    .add('Modal', $('ModalStory'))

storiesOf('Вспопомогательные компоненты')
    .add('Login', $('LoginStory'))
    .add('Icon', $('IconStory'))
    .add('Spinner', $('SpinnerStory'))
    .add('Spin', $('SpinStory'))
    .add('Flexbox', $('FlexboxStory'));

storiesOf("Утилиты")
    .add('alert', $('UtilsAlertStory'))
    .add('notification', $('UtilsNotificationStory'))
    .add('getTheme', $('UtilsGetThemeStory'))
