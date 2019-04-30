/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox } from '..';
import createStyles from './styles';
import TabsTypes from './types';

export default (props: TabsTypes.Props) => {
    const { activeItem, items, className, onClick } = props;
    const { menu } = createStyles();

    return (
        <Flexbox className={className} alignItems='center'>
            {items.map((item, index) => {
                const isActive = index === activeItem;
                return (
                    <Flexbox
                        key={item.path}
                        css={menu.elementContainer}
                        onClick={() => {
                            onClick && onClick(item, index, item.path);
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