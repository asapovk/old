import React, { Fragment } from 'react';
import { Flexbox } from '../../';
import useStyles from '../../hooks/useStyles';
import useBrowser from '../../hooks/useBrowser';
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
    const styles = useStyles();
    const st: any = styles.scenes.lkmain;

    let needDisplaySideBar = Boolean(props.components.side);
    let needDisplayMain = Boolean(props.components.mainTop || props.components.main);

    if (!props.displaySideBar && browser.isMobile) {
        needDisplaySideBar = false;
    }
    if (props.displaySideBar && browser.isMobile) {
        needDisplaySideBar = true;
        needDisplayMain = false;
    }

    return (
        <Flexbox style={{ ...st.root, height: browser.height }} flexDirection="column">
            {props.components.header &&
                props.components.header
            }
            <Flexbox style={st.main} flex={1}>
                {needDisplaySideBar && (
                    <>
                        <div
                            className="ui-scenes-lkmain-side"
                            style={{ marginTop: browser.isDesktop ? '-64px' : 0 }}
                            children={(
                                <Fragment>
                                    <Flexbox
                                        flex={1}
                                        flexDirection="column"
                                        justifyContent="space-between"
                                        children={(
                                            <Fragment>
                                                <div children={props.components.side} />
                                                {props.components.sideBottom && (
                                                    <div
                                                        style={st.sideBottom}
                                                        children={props.components.sideBottom}
                                                    />
                                                )}
                                            </Fragment>
                                        )}
                                    />
                                </Fragment>
                            )} />
                        <div
                            style={{ ...st.sideBackground, marginTop: browser.isDesktop ? '-64px' : 0 }}
                            className="ui-scenes-lkmain-side-background"
                        />
                    </>

                )}
                {needDisplayMain && (
                    <div
                        style={st.mainRight}
                        className="ui-scenes-lkmain-main"
                        children={(
                            <>
                                {props.components.mainTop && (
                                    <div
                                        style={{
                                            ...st.mainTop,
                                            backgroundColor: styles.theme.background2.hex
                                        }}
                                        className='ui-scenes-lkmain-main-top'
                                        children={
                                            <div className='ui-scenes-lkmain-main-top-content' children={props.components.mainTop} />
                                        }
                                    />
                                )}

                                <div className='ui-scenes-lkmain-main-layout' children={props.components.main} />
                            </>
                        )} />
                )}
            </Flexbox>
        </Flexbox>
    );
}