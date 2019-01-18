declare namespace TypographyTypes {
    interface Props extends HeadersProps {
        type: string
        size?: number,
        tag: string
    }
    interface HeadersProps extends TextProps {
        underline?: boolean,
        action?: any
    }
    interface TextProps {
        children?: any,
        className?: string,
        onClick?: (event) => void,
        bold?: boolean
    }
}

export default TypographyTypes