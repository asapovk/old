import React, { CSSProperties, ReactElement } from 'react';
import { Flexbox, Button } from '../';
import useStyles from '../hooks/useStyles';
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

    const styles = useStyles();

    let classes = 'ui-card';
    if (props.active) classes += ' active';

    const { style } = props;

    return (
        <Flexbox
            flexDirection='column'
            onClick={() => props.onClick && props.onClick()}
            className={classes}
            style={{ ...styles.card.main(props.active), ...style }}
            flex={1}
        >
            {props.animation === "waves" && (
                <Waves color={styles.card.main(props.active).color!} active={props.active} />
            )}
            {props.animation === "circles" && (
                <Circles color={styles.card.main(props.active).color!} active={props.active} />
            )}
        </Flexbox>
    );
}