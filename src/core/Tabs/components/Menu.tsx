/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox } from '../..';
import createStyles from '../styles';
import TabsTypes from '../types';

export default (props: TabsTypes.MenuProps) => {
    const { items, activeItemIndex, onItemClick } = props;
    const { menu } = createStyles();

    return (
        <Flexbox alignItems='center' mb='2rem'>
            {items.map((item, index) => {
                const isActive = index === activeItemIndex;
                return (
                    <Flexbox
                        key={index}
                        css={menu.elementContainer}
                        onClick={() => {
                            item.onClick && item.onClick();
                            onItemClick(index);
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