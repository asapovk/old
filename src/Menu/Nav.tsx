import React from 'react';
import useStyles from '../hooks/useStyles';

interface INav {
    active?: boolean
    onClick?: (menuKey: number) => void
    label: any
    style?: React.CSSProperties
    menuKey: number
}

export default (props: INav) => {

    const styles = useStyles();
    const { active, onClick, label } = props;

    let classes = 'ui-menu-nav';
    if (active) classes += ' active';

    return (
        <div
            className={classes}
            onClick={() => onClick && onClick(props.menuKey)}
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
