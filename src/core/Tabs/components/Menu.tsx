/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Dispatch, SetStateAction } from 'react';
import { Flexbox } from '../..';
import createStyles from '../styles';
import TabsTypes from '../types';


export default (props: TabsTypes.MenuProps) => {
    const { items, activeItemIndex, onItemClick } = props;
    const { menu } = createStyles();

    return (
        <Flexbox alignItems='center'>
            {items.map((item, index) => {
                const isActive = index === activeItemIndex;

                return (
                    <Flexbox
                        key={index}
                        css={menu.elementContainer}
                        onClick={() => onItemClick(index)}
                    >
                        <Flexbox
                            css={menu.itemContent({ isActive })}
                            children={item.title}
                        />
                    </Flexbox>
                )
            })}
        </Flexbox>
    )
}