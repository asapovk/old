/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Flexbox } from '..';
import Content from './components/Content';
import Menu from './components/Menu';
import TabsTypes from './types';

export default (props: TabsTypes.Props) => {
    const { activeMenuItem, menuItems, withoutRouter, children } = props;
    const [activeItemIndex, setActiveItemIndex] = useState(activeMenuItem || 0);

    return (
        <Flexbox column flex={1}>
            <Menu items={menuItems} activeItemIndex={activeItemIndex} onItemClick={setActiveItemIndex} />
            {withoutRouter
                ? { children }
                : (<Content items={menuItems} activeItemIndex={activeItemIndex} />)}
        </Flexbox>
    )
}