import { Dispatch, SetStateAction } from 'react';
export declare type ViewType = 'Login' | 'Main';
export interface ViewProps {
    setView: Dispatch<SetStateAction<ViewType>>;
}
declare const _default: () => JSX.Element;
export default _default;
