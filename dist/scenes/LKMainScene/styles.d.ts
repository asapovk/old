declare const _default: () => {
    theme: import("../../styles").ThemeInterface;
    container: (isMobile: boolean, showSideBar: boolean) => false | import("@emotion/utils").SerializedStyles;
    mask: (display: boolean) => import("@emotion/utils").SerializedStyles;
    main: {
        container: (displaySidebar: boolean) => import("@emotion/utils").SerializedStyles;
        holder: import("@emotion/utils").SerializedStyles;
        menu: import("@emotion/utils").SerializedStyles;
        back: (needDisplay: boolean) => import("@emotion/utils").SerializedStyles;
    };
    sidebar: {
        container: (isMobile: any, display: any) => import("@emotion/utils").SerializedStyles;
        background: import("@emotion/utils").SerializedStyles;
        user: {
            container: import("@emotion/utils").SerializedStyles;
            avatar: {
                container: import("@emotion/utils").SerializedStyles;
                picture: (image: any) => import("@emotion/utils").SerializedStyles;
                shortname: import("@emotion/utils").SerializedStyles;
                hover: import("@emotion/utils").SerializedStyles;
                input: import("@emotion/utils").SerializedStyles;
            };
            name: import("@emotion/utils").SerializedStyles;
        };
        content: import("@emotion/utils").SerializedStyles;
        logo: import("@emotion/utils").SerializedStyles;
    };
};
export default _default;
