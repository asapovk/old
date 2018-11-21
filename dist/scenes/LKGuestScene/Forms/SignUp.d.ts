interface SignUpProps {
    onBack: () => void;
    onSubmit: (login: string, password: string, password2: string) => void;
    newPasswordsMinLength: number;
    pending: boolean;
}
declare const _default: (props: SignUpProps) => JSX.Element;
export default _default;
