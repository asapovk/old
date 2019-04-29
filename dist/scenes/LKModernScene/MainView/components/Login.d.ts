export interface LoginProps {
    name?: string;
    shortname?: string;
    avatar?: string;
    onLogout?: () => void;
    onAvatarChange?: (file: File) => void;
}
declare const _default: (props: LoginProps) => JSX.Element;
export default _default;
