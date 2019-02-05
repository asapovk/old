declare namespace TypographyTypes {
    interface Props extends HeadersProps, TextProps, CoreProps {
        type: string;
        size?: number;
        tag: string;
    }
    interface HeadersProps extends CoreProps {
        underline?: boolean;
        action?: React.ReactElement<any>;
        menu?: {
            text: string;
            value: string;
        }[];
        value?: string;
        onChange?: (value: any) => void;
    }
    interface TextProps extends CoreProps {
        bold?: boolean;
        link?: boolean;
    }
    interface DecoratorProps extends Props {
        theme: any;
        typography: any;
    }
    interface CoreProps {
        children?: string;
        className?: string;
        onClick?: (event: any) => void;
        format?: boolean | 'rub' | 'volume';
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent' | 'lowlight';
        p?: number | string;
        pr?: number | string;
        pl?: number | string;
        pt?: number | string;
        pb?: number | string;
        m?: number | string;
        mr?: number | string;
        ml?: number | string;
        mt?: number | string;
        mb?: number | string;
    }
    interface HRProps {
        dotted?: boolean;
        bold?: boolean;
        className?: string;
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent';
    }
}
export default TypographyTypes;
