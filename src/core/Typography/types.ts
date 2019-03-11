import typography from "../../styles/typography";

/**
 * @deprecated Для юнитов используйте props unit
 */
type units = 'rub' | 'volume' | 'power'

declare namespace TypographyTypes {

    interface Props extends HeadersProps, TextProps, CoreProps {
        type: string
        size?: number
        tag: string
    }

    interface CoreProps extends PM {
        children?: string | number | null
        className?: string
        disabled?: boolean
        onClick?: (event) => void
        format?: boolean | 'currency' | units
        unit?: 'rub' | 'volume' | 'power'
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent' | 'lowlight' | 'light'
        quotes?: boolean
        ellipsis?: boolean
        background?: 'text' | 'highlight' | 'pale' | 'textOnAccent' | 'lowlight'
        toFixed?: number
        align?: 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'start' | 'end' | 'match-parent' | 'inherit' | 'initial' | 'unset'
    }

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

    interface HRProps extends PM {
        dotted?: boolean
        bold?: boolean
        className?: string
        color?: 'text' | 'highlight' | 'pale' | 'textOnAccent' | 'lowlight' | 'light'
    }

    type Menu = {
        text: string
        value: string
    }[]

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