/** @jsx jsx */
import { jsx } from '@emotion/core';
import createStyles from './Styles';
import { CSSProperties, ReactElement, ReactDOM } from 'react';
import { Flexbox, Button } from '../';
import Waves from './animations/Waves';
import Circles from './animations/Circles';

export interface ICard {
    active?: boolean
    onClick?: () => void
    style?: CSSProperties
    children?: ReactElement<any>
    animation?: "waves" | "circles"
    className?: string
}

export default (props: ICard) => {

    const { style, children } = props;
    const styles = createStyles(props.active);

    return (
        <Flexbox
            flexDirection='column'
            onClick={() => props.onClick && props.onClick()}
            css={styles.main}
            style={style}
            flex={1}
            className={props.className}
        >
            {props.animation === "waves" && (
                <Waves active={props.active} />
            )}
            {props.animation === "circles" && (
                <Circles active={props.active} />
            )}
            {children}
        </Flexbox>
    );
}