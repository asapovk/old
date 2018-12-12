import React, { CSSProperties } from 'react';
export interface Props {
    style?: CSSProperties;
    size?: number;
    face?: "happy" | "sad" | "normal";
    jumpy?: () => void;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<{}>>;
export default _default;
