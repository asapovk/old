import typography from "../../styles/typography";

declare namespace TypographyTypes {
    interface Props extends HeadersProps, TextProps, CoreProps {
        type: string
        size?: number
        tag: string
    }

    type Menu = {
        text: string
        value: string
    }[]

    interface HeadersProps extends CoreProps {
        underline?: boolean
        action?: React.ReactElement<any>
        menu?: Menu
        value?: string
        onChange?: (value) => void
    }
    interface TextProps extends CoreProps {
        bold?: boolean
        link?: boolean
    }
    interface DecoratorProps extends Props {
        theme: any
        typography: any
    }
    interface CoreProps extends PM {
        children?: string | number | null
        className?: string
        onClick?: (event) => void
        format?: boolean | 'rub' | 'volume' | 'power'
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent' | 'lowlight'
        quotes?: boolean
        ellipsis?: boolean
        background?: 'text' | 'highlight' | 'pale' | 'textOnAccent' | 'lowlight'
        toFixed?: number
    }
    interface HRProps extends PM {
        dotted?: boolean
        bold?: boolean
        className?: string
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent'
    }
    interface PM {
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
}

export default TypographyTypes