import React from 'react';
import useStyles from '../hooks/useStyles';

interface INav {
    active?: boolean
    onClick?: () => void
    children?: any
}

export default (props: INav) => {

    const styles = useStyles();
    const { active, onClick, children } = props;

    let classes = 'ui-menu-nav';
    if (active) classes += ' active';

    return (
        <div
            className={classes}
            onClick={onClick}
            style={{
                color: active ? styles.theme.textOnAccent.rgb : styles.menu.nav.textColor,
                background: active ? styles.menu.nav.textColorActive : 'transparent',
                borderRadius: styles.theme.radius.button
            }}
        >
            {children}
        </div>
    )
}
