/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useRef, useState, useLayoutEffect } from 'react';
import NavBarItem from './NavBarItem';
import { Flexbox, Icon, Popup } from '..'
import { useBrowser } from '../../hooks';
import Types from './types';

export default (props: Types.NavBarProps) => {
    const browser = useBrowser();
    const { items, value, onChange, moreLabel, styles } = props;

    const [barCapacity, setBarCapacity] = useState<number | null>(null);
    const [moreVisible, setMoreVisible] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const moreRef = useRef<HTMLDivElement>(null);

    const valueIndex = items.findIndex(item => item.value === value);
    const visibleItems = barCapacity ? items.slice(0, barCapacity) : items;
    const moreItems = barCapacity ? items.slice(barCapacity) : [];

    useLayoutEffect(() => {
        setBarCapacity(getBarCapacity(containerRef, moreRef));
    }, [browser.width]);

    function createItems(items) {
        if (items.length > 0)
            return items.map(item =>
                <NavBarItem
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
            <div
                css={styles.item(barCapacity && valueIndex >= barCapacity, !barCapacity || moreItems.length > 0)}
                ref={moreRef}
                onClick={() => setMoreVisible(true)}
                children={moreLabel ? moreLabel : <Icon type='more' />}
            />
            <Popup
                triggerRef={moreRef}
                visible={moreVisible}
                onClose={() => setMoreVisible(false)}
                children={createItems(moreItems)}
            />
        </Flexbox>
    )
}

function getBarCapacity(containerRef, moreRef) {
    const barsChilds = containerRef.current!.childNodes;
    const containerWidth = containerRef.current!.offsetWidth - moreRef.current!.offsetWidth;
    let capacity = 0, itemsWidth = 0;

    barsChilds.forEach(node => {
        itemsWidth += node.offsetWidth
        if (itemsWidth < containerWidth) capacity++;
    })

    return capacity
}