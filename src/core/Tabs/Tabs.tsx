/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Flexbox } from '..';
import TabsTypes from './types';
import createStyles from './styles';

export default (props: TabsTypes.Props) => {
    const { activeItem, items, className } = props;
    const [activeItemIndex, setActiveItemIndex] = useState(activeItem || 0);
    const { menu } = createStyles();

    return (
        <Flexbox className={className} alignItems='center' mb='2rem'>
            {items.map((item, index) => {
                const isActive = index === activeItemIndex;
                return (
                    <Flexbox
                        key={index}
                        css={menu.elementContainer}
                        onClick={() => {
                            item.onClick && item.onClick();
                            setActiveItemIndex(index);
                        }}
                        children={(
                            <Flexbox
                                css={menu.itemContent({ isActive })}
                                children={item.title}
                            />
                        )}
                    />
                )
            })}
        </Flexbox>
    )
}