declare namespace TypographyTypes {
    interface Props extends HeadersProps, TextProps, CoreProps {
        type: string
        size?: number
        tag: string
    }
    interface HeadersProps extends CoreProps {
        underline?: boolean
        action?: any
    }
    interface TextProps extends CoreProps {
        bold?: boolean
        link?: boolean
    }
    interface CoreProps {
        children?: any
        className?: string
        onClick?: (event) => void
        format?: boolean | 'rub' | 'volume'
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent'
        p?: number | string
        pr?: number | string
        pl?: number | string
        pt?: number | string
        pb?: number | string
        m?: number | string
        mr?: number | string
        ml?: number | string
        mt?: number | string
        mb?: number | string
    }
    interface HRProps {
        dotted?: boolean
        bold?: boolean
        className?: string
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent'
    }
}

export default TypographyTypes