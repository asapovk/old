export { default as TextFieldTypes } from './TextField/types'
export { default as IconTypes } from './Icon/types'
export { default as FlexboxTypes } from './Flexbox/types'
export { default as PopupTypes } from './Popup/types'
export { default as MenuTypes } from './Menu/types'
export { default as SimpleTableTypes } from './SimpleTable/types';
export { default as GridTypes } from './Grid/types';
export { default as CheckboxTypes } from './Checkbox/types'
export { default as DatePickerTypes } from './DatePicker/types'
export { default as TypographyTypes } from './Typography/types'
export { default as StickyTabsTypes } from './StickyTabs/types';
export { default as LeafletTypes } from './Leaflet/types';

export type SizeTypes = 'extra-large' | 'large' | 'small' | 'default';
export type DecorationTypes = 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale';

export type SpacingProps = {
    p?: number | string
    pr?: number | string
    pl?: number | string
    pt?: number | string
    pb?: number | string
    m?: number | string
    mr?: number | string
    ml?: number | string
    mt?: number | string
    mb?: number | string
}