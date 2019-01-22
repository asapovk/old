declare namespace TypographyTypes {
    interface Props extends HeadersProps, TextProps, CoreProps {
        type: string;
        size?: number;
        tag: string;
    }
    interface HeadersProps extends CoreProps {
        underline?: boolean;
        action?: any;
    }
    interface TextProps extends CoreProps {
        bold?: boolean;
        link?: boolean;
    }
    interface CoreProps {
        children?: any;
        className?: string;
        onClick?: (event: any) => void;
        format?: boolean | 'rub' | 'volume';
    }
}
export default TypographyTypes;
