/** @jsx jsx */
import { jsx } from '@emotion/core'
import useStyles from './useStyles';
import { ReactNode, createRef } from 'react';
import ScrollBar from './ScrollBar';

export interface IProps {
    children?: ReactNode,
    horizontal?: boolean,
}

//@ts-ignore
const isWebkit = !!window.webkitURL;

export default (props: IProps) => {

    const { children, horizontal } = props;
    const scrollView = createRef<HTMLDivElement>();
    const styles = useStyles(horizontal, isWebkit);

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
            />
            <ScrollBar scrollViewId={id} horizontal={horizontal} />
        </div>
    );
}