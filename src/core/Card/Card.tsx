/** @jsx jsx */
import { jsx } from '@emotion/core';
import useStyles from './useStyles';
import React, { CSSProperties, ReactElement } from 'react';
import { Flexbox, Button } from '../';
import Waves from './animations/Waves';
import Circles from './animations/Circles';

export interface ICard {
    active?: boolean
    onClick?: () => void
    style?: CSSProperties
    children?: ReactElement<any>
    animation?: "waves" | "circles"
}

export default (props: ICard) => {

    const { style, children } = props;
    const styles = useStyles(props.active);
    return (
        <Flexbox
            flexDirection='column'
            onClick={() => props.onClick && props.onClick()}

            css={{ ...styles.main, ...style }}
            flex={1}
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