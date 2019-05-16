import TextFieldTypes from '../../core/TextField/types';
declare type IRublesField = Pick<TextFieldTypes.Props, Exclude<keyof TextFieldTypes.Props, 'value'>> & {
    value: number;
};
declare const _default: (props: IRublesField) => JSX.Element;
export default _default;
