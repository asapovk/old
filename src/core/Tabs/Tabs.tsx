/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox } from '..';
import createStyles from './styles';
import types from './types';
import Burger from './Burger';
import { useState, Fragment, useLayoutEffect } from 'react';

export default (props: types.Props) => {
    const { activeItem, items, className, onClick } = props;
    const [burgerActive, setBurgerActive] = useState(false);
    const { container, menus, menu, burgerButton, burgerTitle } = createStyles({
        alignMobile: props.alignMobile || 'flex-end',
        burgerActive
    });

    useLayoutEffect(() => {

    }, []);

    return (
        <Flexbox css={container} className={className} flex={1}>
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
                                if (burgerActive) {
                                    setBurgerActive(false);
                                }
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