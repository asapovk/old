/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox } from '..';
import createStyles from './styles';
import types from './types';
import Burger from './Burger';
import { useState, Fragment } from 'react';

export default (props: types.Props) => {
    const { activeItem, items, className, onClick } = props;
    const [burgerActive, setBurgerActive] = useState(false);
    const { container, menus, menu, burgerButton, burgerTitle } = createStyles({
        ...props,
        burgerActive
    });

    return (
        <Flexbox css={container} className={className}>
            <Burger
                onClick={() => setBurgerActive(!burgerActive)}
                styleButton={burgerButton}
                styleTitle={burgerTitle}
                currentMenu={items[activeItem]}
                alignMobile={props.alignMobile}
            />
            <Flexbox css={menus}>
                {items.map((item, index) => {
                    const isActive = index === activeItem;
                    return (
                        <Flexbox
                            key={item.path}
                            css={menu.item({ isActive })}
                            onClick={() => {
                                onClick && onClick(item, index, item.path);
                            }}
                            children={(
                                <Flexbox
                                    css={menu.text({ isActive })}
                                    children={item.title}
                                />
                            )}
                        />
                    )
                })}
            </Flexbox>
        </Flexbox>
    )
}