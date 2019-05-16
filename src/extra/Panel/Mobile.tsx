/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox } from '../../';
import PanelBarItem from './PanelBarItem';
import Types from './types';

export function MobileMenu(props: Types.MobileProps) {

    const { active, setActive, styles } = props;

    return (
        <Flexbox
            flexDirection='column'
            justifyContent='space-between'
            css={styles(active)}
            onClick={() => setActive(!active)}
            children={[
                <div key={1} />,
                <div key={2} />,
                <div key={3} />
            ]}
        />
    )
}

export function MobileMenuItems(props: Types.MobileItemsProps) {

    const { items, value, active, onChange, styles } = props;

    return (
        <Flexbox alignItems="center" flexDirection="column" css={styles.mobile(active)}>
            {items.map(item => (
                <PanelBarItem
                    css={styles.item(value === item.value, true)}
                    key={item.value}
                    text={item.text}
                    value={item.value}
                    onClick={(value) => onChange && onChange(value)}
                />
            ))}
        </Flexbox>
    )
}