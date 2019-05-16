import { CSSProperties } from 'react';

declare namespace PanelTypes {

    type Item = {
        text: string
        value: string
    }

    interface ItemsProps {
        items: Item[]
        value?: string
        onChange?: (value: string) => void
    }

    interface Props extends ItemsProps {
        title?: string
        tools?: React.ReactNode
        style?: CSSProperties
        logo?: React.ReactElement<any>
        value?: string
        onChange?: (value: string) => void
        moreLabel?: string
        forElka?: boolean
    }

    interface MobileProps {
        active: boolean
        setActive: (active: boolean) => void
        styles: any
    }

    interface PanelBarProps extends ItemsProps {
        moreLabel?: string
        styles: any
    }

    interface MobileItemsProps extends ItemsProps {
        active?: boolean
        styles: any
    }

    interface PanelBarItemProps extends Item {
        onClick?: (value: string) => void
        className?: string
    }
}

export default PanelTypes