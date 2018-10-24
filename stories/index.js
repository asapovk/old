import $ from './StoryRender';
import { storiesOf } from '@storybook/react';
import '../src/Styles/scss/main.scss';

storiesOf('Базовые элементы')
    .add('Цвета', $('ColorStory'))
    .add('Типографика', $('TypographyStory'))

storiesOf('Основные компоненты')
    .add('Viewport', $('ViewportStory'))
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
    .add('WidgetStat', $('WidgetStatStory'))
    .add('Flexbox', $('FlexboxStory'))
    .add('Buddy', $('BuddyStory'));

storiesOf("Утилиты")
    .add('alert', $('UtilsAlertStory'))
    .add('notification', $('UtilsNotificationStory'))
    .add('getTheme', $('UtilsGetThemeStory'))
