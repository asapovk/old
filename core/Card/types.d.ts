import { CSSProperties, ReactElement } from 'react';
declare namespace CardTypes {
    interface Props {
        active?: boolean;
        onClick?: () => void;
        style?: CSSProperties;
        children?: ReactElement<any>;
        animation?: "waves" | "circles";
        className?: string;
    }
}
export default CardTypes;
