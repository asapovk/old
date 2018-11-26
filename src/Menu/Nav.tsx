import React, { Dispatch, SetStateAction } from 'react';
import useStyles from '../hooks/useStyles';

interface INav {
    active?: boolean
    onClick?: Dispatch<SetStateAction<number>>
    label: any
    style?: React.CSSProperties
    itemKey: number
}

export default (props: INav) => {

    const styles = useStyles();
    const { active, onClick, label } = props;

    let classes = 'ui-menu-nav';
    if (active) classes += ' active';

    return (
        <div
            className={classes}
            onClick={() => onClick && onClick(props.itemKey)}
            style={{
                ...props.style,
                color: active ? styles.theme.textOnAccent.rgb : styles.menu.nav.textColor,
                background: active ? styles.menu.nav.textColorActive : 'transparent',
                borderRadius: styles.theme.radius.button
            }}
        >
            {label}
        </div>
    )
}
