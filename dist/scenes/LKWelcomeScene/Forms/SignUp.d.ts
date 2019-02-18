interface SignUpProps {
    onBack: () => void;
    onSignUp: (login: string, password: string, password2: string) => Promise<boolean | undefined>;
    onVerify: (login: string, password: string, code: string) => void;
    newPasswordsMinLength: number;
    pending: boolean;
    value: string;
}
declare const _default: (props: SignUpProps) => JSX.Element;
export default _default;
