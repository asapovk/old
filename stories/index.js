import $ from './StoryRender';
import { storiesOf } from '@storybook/react';

require('../src/Styles/scss/main.scss');

storiesOf('Base', module)
    .add('Цвета', $('ColorStory'))
    .add('Типографика', $('TypographyStory'))

storiesOf('General', module)
    .add('Button', $('ButtonStory'))
    .add('Badge', $('BadgeStory'))
    .add('Chart', $('ChartStory'))
    .add('Checkbox', $('CheckboxStory'))
    .add('Card', $('CardStory'))
    .add('DatePicker', $('DatePickerStory'))
    .add('Finder', $('FinderStory'))
    .add('Flexbox', $('FlexboxStory'))
    .add('Select', $('SelectStory'))
    .add('Table', $('TableStory'))
    .add('Tabs', $('TabsStory'))
    .add('TextField', $('TextfieldStory'))
    .add('Title', $('TitleStory'))
    .add('Menu', $('MenuStory'))
    .add('Modal', $('ModalStory'))
    .add('Popup', $('PopupStory'))
    .add('Icon', $('IconStory'))
    .add('Spin', $('SpinStory'))
    .add('ScrollView', $('ScrollViewStory'))
    .add('Viewport', $('ViewportStory'))
    .add('Widget', $('WidgetStory'))
    .add('WidgetStat', $('WidgetStatStory'))
    .add('Stories', $('StoriesStory'))
    .add('Timeline', $('TimelineStory'))

storiesOf('Advanced', module)
    .add('Constructor', $('ConstructorStory'))
    .add('Login', $('LoginStory'))
    .add('Spinner', $('SpinnerStory'))
    .add('WidgetStat', $('WidgetStatStory'))
    .add('Buddy', $('BuddyStory'));

storiesOf('Scenes', module)
    .add('LKGuestScene', $('LKGuestSceneStory'))
    .add('LKMainScene', $('LKMainSceneStory'))

storiesOf("Utils", module)
    .add('alert', $('UtilsAlertStory'))
    .add('notification', $('UtilsNotificationStory'))
    .add('getTheme', $('UtilsGetThemeStory'))