import React, { CSSProperties } from 'react';
export interface BuddyProps {
    style?: CSSProperties;
    size?: number;
    defaultFace?: "happy" | "sad" | "normal";
}
declare const _default: React.ForwardRefExoticComponent<BuddyProps & React.RefAttributes<{}>>;
export default _default;
