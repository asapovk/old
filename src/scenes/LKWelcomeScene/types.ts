import { IconTypes } from '../../core/types';

declare namespace WelcomeSceneTypes {

    export interface Props {
        title?: string
        logo?: any
        styles?: any
        story?: any
        form?: React.ReactNode
        actions?: Actions[]
        hideActions?: boolean
    }

    export interface Actions {
        title: string
        icon: IconTypes.Type
        onAction?: () => void
    }

}

export default WelcomeSceneTypes
