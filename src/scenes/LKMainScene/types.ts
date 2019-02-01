declare namespace LKMainSceneNew {

    interface User {
        name?: string
        shortname: string
        onLogout: () => Promise<any>
    }
    interface Props {
        components: {
            menu?: React.Component | any
            sidebar?: React.Component | any
            mainTop?: React.Component | any
            main?: React.Component | any
            logo?: React.Component | any
        },
        user?: User
        /**
         * Display side bar instead of 
         * mains (only for mobile resolution)
         */
        displaySideBar?: boolean
    }
}

export default LKMainSceneNew