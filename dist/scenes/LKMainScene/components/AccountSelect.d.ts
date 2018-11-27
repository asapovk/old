interface IAccount {
    label: string;
    value: string | number;
}
interface IProps {
    values: IAccount[];
    value?: string | number;
    onChange?: (value: string | number) => void;
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
