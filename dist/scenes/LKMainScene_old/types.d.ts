declare namespace LKMainScene {
    interface Props {
        components: {
            menu?: React.Component | any;
            sidebar?: React.Component | any;
            mainTop?: React.Component | any;
            main?: React.Component | any;
            logo?: React.Component | any;
        };
        /**
         * Display side bar instead of
         * mains (only for mobile resolution)
         */
        displaySideBar?: boolean;
    }
}
export default LKMainScene;
