import { CSSProperties } from 'react';
import { ClassNames } from '@emotion/core';

declare namespace MenuTypes {

    type Items = {
        text: string
        value: string
    }[]

    interface Props extends ItemsProps {
        title?: string
        tools?: React.ReactElement<any>[]
        pin?: boolean
        style?: CSSProperties
        logo?: React.ReactElement<any>
        value?: string
        onChange?: (value: string) => void
        moreLabel?: string
    }

    interface MobileProps {
        active: boolean
        setActive: (active: boolean) => void,
        styles: any
    }

    interface ItemsProps {
        items: Items
        value?: string
        moreLabel?: string
        onChange?: (value: string) => void
        active?: boolean
        styles?: any
    }

    interface ItemProps {
        onClick?: (value: string) => void
        text: any
        value: string
        className?: string
    }
}

export default MenuTypes