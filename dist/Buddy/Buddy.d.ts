import React, { CSSProperties } from 'react';
<<<<<<< HEAD
export interface BuddyProps {
    style?: CSSProperties;
    size?: number;
    defaultFace?: "happy" | "sad" | "normal";
}
declare const _default: React.ForwardRefExoticComponent<BuddyProps & React.RefAttributes<{}>>;
=======
export interface Props {
    style?: CSSProperties;
    size?: number;
    face?: "happy" | "sad" | "normal";
    jumpy?: () => void;
}
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<{}>>;
>>>>>>> 87d9ac400b9139bcf9b00296d6e159294d9d4fc1
export default _default;
