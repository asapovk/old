import { CSSProperties } from 'react';
interface CardAction {
    label: string;
    onAction: () => void;
}
interface Info {
    value: string;
    description: string;
}
interface CardProps {
    active?: boolean;
    action?: CardAction;
    title: string;
    subtitle?: string;
    info: Info;
    style?: CSSProperties;
}
declare const _default: (props: CardProps) => JSX.Element;
export default _default;
