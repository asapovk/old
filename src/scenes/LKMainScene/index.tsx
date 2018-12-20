import React, { Fragment } from 'react';
import { Flexbox } from '../../';
import useStyles from '../../hooks/useTheme';
import useBrowser from '../../hooks/useBrowser';
import { ScrollView } from '../../ScrollView';
interface IProps {
    components: {
        header?: React.Component | any
        side?: React.Component | any
        sideBottom?: React.Component | any
        mainTop?: React.Component | any
        main?: React.Component | any
    },
    /**
     * Display side bar instead of 
     * mains (only for mobile resolution)
     */
    displaySideBar?: boolean
}

export default (props: IProps) => {
    const browser = useBrowser();

    return (
        <>
            <Flexbox style={{ height: "100%" }}>
                <ScrollView width={320} style={{ padding: "0 20px" }}>
                    {props.components.side}
                </ScrollView>
                <ScrollView>
                    {props.components.header}

                    {props.components.mainTop}
                    {props.components.main}
                </ScrollView>
            </Flexbox>
        </>
    );
}