import React from 'react';
interface IProps {
    components: {
        header?: React.Component | any;
        side?: React.Component | any;
        sideBottom?: React.Component | any;
        mainTop?: React.Component | any;
        main?: React.Component | any;
    };
    /**
     * Display side bar instead of
     * mains (only for mobile resolution)
     */
    displaySideBar?: boolean;
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
