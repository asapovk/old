import TabsTypes from './types';
declare const _default: (props: TabsTypes.StyleProps) => {
    container: import("@emotion/utils").SerializedStyles;
    menus: import("@emotion/utils").SerializedStyles;
    burgerContainer: {
        [x: string]: import("@emotion/utils").SerializedStyles;
    };
    burgerButton: {
        [x: string]: import("@emotion/utils").SerializedStyles;
    };
    burgerTitle: {
        [x: string]: import("@emotion/utils").SerializedStyles | {
            display: string;
        };
    };
    menu: {
        item: (props: {
            isActive: boolean;
        }) => import("@emotion/utils").SerializedStyles;
        text: (props: {
            isActive: boolean;
        }) => import("@emotion/utils").SerializedStyles;
    };
};
export default _default;
