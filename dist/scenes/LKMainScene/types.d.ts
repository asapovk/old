declare namespace LKMainSceneNew {
    interface User {
        name?: string;
        shortname?: string;
        avatar?: string;
        onLogout?: () => Promise<any>;
        onAvatarChange?: () => void;
    }
    interface Props {
        components: {
            menu?: React.Component | any;
            sidebar?: React.Component | any;
            mainTop?: React.Component | any;
            main?: React.Component | any;
            logo?: React.Component | any;
        };
        user?: User;
        /**
         * Back navigation button
         */
        back?: boolean;
        onBack?: () => void;
        /**
         * Sidebar control
         */
        showSidebar?: boolean;
        onSidebar?: (state: boolean) => void;
        preparing?: boolean;
        pending?: boolean;
    }
}
export default LKMainSceneNew;
