interface SignInProps {
    allowSignUp: boolean;
    onSignUp: () => void;
    onSubmit: (login: string, password: string) => void;
    pending: boolean;
}
declare const _default: (props: SignInProps) => JSX.Element;
export default _default;
