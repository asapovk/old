/** @jsx jsx */
import { jsx } from '@emotion/core'
import useStyles from './useStyles';
import { ReactNode, createRef, CSSProperties } from 'react';
import ScrollBar from './ScrollBar';

export interface IProps {
    children?: ReactNode
    horizontal?: boolean
    style?: CSSProperties
    customCss?: any
    width?: number
    height?: number
}

//@ts-ignore
const isWebkit = !!window.webkitURL;

export default (props: IProps) => {

    const { children, horizontal, style, width, height, customCss } = props;
    console.log(customCss);
    const scrollView = createRef<HTMLDivElement>();
    const styles = useStyles(horizontal, isWebkit, false, width, height, customCss);

    /**
     * FF returns null as reference
     * so we dont use it here
     */
    const id = "SV-" + Math.trunc(Math.random() * 10000000);

    return (
        <div css={styles.root}>
            <div
                id={id}
                css={styles.scrollview}
                ref={scrollView}
                children={children}
                style={{ ...style }}
            />
            <ScrollBar scrollViewId={id} horizontal={horizontal} />
        </div>
    );
}