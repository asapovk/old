/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox } from '..';
import createStyles from './styles';
import TabsTypes from './types';

export default (props: TabsTypes.Props) => {
    const { activeItem, items, className } = props;
    const { menu } = createStyles();

    return (
        <Flexbox className={className} alignItems='center' mb='2rem'>
            {items.map((item, index) => {
                const isActive = index === activeItem;
                return (
                    <Flexbox
                        key={index}
                        css={menu.elementContainer}
                        onClick={() => {
                            item.onClick && item.onClick();
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