/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Dispatch, SetStateAction, useState } from 'react';
import { Transition } from 'react-transition-group';
import { Flexbox } from '..';
import TabsTypes from './types';
import createStyles from './styles';
import Menu from './components/Menu';
import Content from './components/Content';

export default (props: TabsTypes.Props) => {
    const [activeItemIndex, setActiveItemIndex] = useState(props.activeMenuItem || 0);

    return (
        <Flexbox column>
            <Menu items={props.menuItems} activeItemIndex={activeItemIndex} onItemClick={setActiveItemIndex} />
            {/* <Content menuItems={props.menuItems} active={activeItemIndex} /> */}
        </Flexbox>
    )
}