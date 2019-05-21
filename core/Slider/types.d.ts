import { CSSProperties } from 'react';
declare namespace CardTypes {
    interface Props {
        min?: number;
        max?: number;
        defaultValue?: number;
        value?: number;
        onChange?: (value: number) => void;
        style?: CSSProperties;
        className?: string;
    }
}
export default CardTypes;
