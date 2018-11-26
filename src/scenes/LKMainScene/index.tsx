import React from 'react';
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

    const st = {
        root: {
            height: browser.height,
            overflow: "hidden"
        },
        main: {
            overflow: "hidden"
        },
        side: {
            overflow: "scroll",
            background: styles.theme.background.hex,
            maxWidth: browser.resolutionMobileMinimum,
            borderRight: "1px solid",
            borderColor: styles.theme.pale.hex,
        },
        sideBottom: {
            overflow: "scroll",
        },
        mainRight: {
            overflow: "scroll",
            minWidth: browser.resolutionMobileMinimum,
        },
        mainTop: {
            minWidth: browser.resolutionMobileMinimum,
            overflow: "scroll",
        },
    }

    let needDisplaySideBar = Boolean(props.components.side);
    let needDisplayMain = Boolean(props.components.mainTop || props.components.main);

    if (!props.displaySideBar && browser.isMobile) {
        needDisplaySideBar = false;
    }
    if (props.displaySideBar && browser.isMobile) {
        needDisplaySideBar = true;
        needDisplayMain = false;
        delete st.side.maxWidth;
    }

    return (
        <Flexbox style={st.root} flexDirection="column">
            {props.components.header &&
                props.components.header
            }
            <Flexbox style={st.main} flex={1}>
                {needDisplaySideBar && (
                    <Flexbox flex={1} flexDirection="column" style={st.side}>
                        <div style={{
                            position: "absolute",
                            left: 0, right: 0, top: 0,
                            height: browser.resolutionMobileMinimum,
                            background: `linear-gradient(0deg, ${styles.theme.background.hex}, ${styles.theme.background2.hex} 20%)`
                        }} />
                        <Flexbox
                            flex={1}
                            flexDirection="column"
                            justifyContent="space-between"
                        >
                            <div children={props.components.side} />
                            {props.components.sideBottom && (
                                <Flexbox
                                    flexShrink={0}
                                    flexDirection="column"
                                    style={st.sideBottom}
                                    children={props.components.sideBottom}
                                />
                            )}
                        </Flexbox>
                    </Flexbox>
                )}
                {needDisplayMain && (
                    <Flexbox flex={1} flexDirection="column" style={st.mainRight}>
                        {props.components.mainTop && (
                            <Flexbox
                                flexShrink={0}
                                style={st.mainTop}
                                children={props.components.mainTop}
                            />
                        )}
                        {props.components.main}
                    </Flexbox>
                )}
            </Flexbox>
        </Flexbox>
    );
}