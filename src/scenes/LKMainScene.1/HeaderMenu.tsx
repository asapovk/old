import React from 'react';
import { Flexbox, Button } from '../../'
import useStyles from '../../hooks/useStyles'
import { IMenuItem, useMainContext } from '.';

export default () => {
    const styles = useStyles();
    const ctx = useMainContext();

    const { menuItems, currentMenuItem, setCurrentMenu } = ctx;

    return (
        <Flexbox flex={1} alignItems='center' justifyContent='center'>
            {menuItems.map((item) => {
                return (
                    <Button
                        key={item.key}
                        style={{
                            backgroundColor: item.key === currentMenuItem.key ? styles.theme.highlight.rgb : '#fff',
                            padding: '5px'
                        }}
                        onClick={() => setCurrentMenu(item)}
                    >
                        {item.title}
                    </Button>
                )
            })}
        </Flexbox>
    )
}