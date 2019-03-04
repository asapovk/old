import Types from './types';
declare global {
    interface String {
        hashCode: () => number;
    }
}
declare const _default: (props: Types.Props) => JSX.Element;
export default _default;
