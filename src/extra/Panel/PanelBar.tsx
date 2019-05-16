/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useRef } from 'react';
import PanelBarItem from './PanelBarItem';
import { Flexbox } from '../../'
import Types from './types';

export default (props: Types.PanelBarProps) => {
    const { items, value, onChange, styles } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const visibleItems = items;


    function createItems(items) {
        if (items.length > 0)
            return items.map(item =>
                <PanelBarItem
                    css={styles.item(value === item.value, true)}
                    key={item.value}
                    text={item.text}
                    value={item.value}
                    onClick={(value) => onChange && onChange(value)}
                />)
        else return null
    }

    return (
        <Flexbox ref={containerRef} css={styles.holder}>
            {createItems(visibleItems)}
        </Flexbox>
    )
}