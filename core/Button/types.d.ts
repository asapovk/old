import { CSSProperties } from 'react';
import { SpacingProps } from '../types';
declare namespace ButtonTypes {
    type ButtonColor = 'default' | 'highlight' | 'brand-red' | 'brand-purple' | 'red' | 'green' | 'orange' | 'blue' | 'grayscale';
    type ButtonDecoration = 'default' | 'none' | 'inverse' | 'outline' | 'blur';
    type ButtonSize = 'default' | 'small' | 'large';
    interface Props extends SpacingProps {
        label?: string;
        size?: ButtonSize;
        decoration?: ButtonDecoration;
        color?: ButtonColor;
        loading?: boolean;
        disabled?: boolean;
        onClick?: (MouseEvent?: any) => void;
        className?: string;
        style?: CSSProperties;
        children?: React.ReactNode;
    }
}
export default ButtonTypes;
