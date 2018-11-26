import React, { useState, useEffect, useRef } from 'react';
import { Flexbox, Login } from '..';
import Nav from './Nav';
import useStyles from '../hooks/useStyles';
import useBrowseWidth from '../hooks/useBrowseWidth';
import { MobileMenuItems, MobileMenu } from './Mobile';

interface IListItem {
    label: string
}

export interface IMenuItem {
    list: IListItem[]
    active: number
    onClick: (menuItemKey: number) => void
}

interface IMenu {
    header?: any
    items: IMenuItem
    toolsRight?: any[]
    pin?: boolean
    style?: any
    profile?: any
}

export default (props: IMenu) => {

    const styles = useStyles();
    const windowSize = useBrowseWidth();

    const [mobileActive, setMobileActive] = useState(false);

    const { header, style, toolsRight, profile, items } = props;

    // const animate = (from: number, to: number, onFrame: (value: number) => void, delay: number = 250, idAnimation?: string, fps: number = 60) => {
    //     let value = from;
    //     let total = from;
    //     if (from < to) {
    //         total = to;
    //     }
    //     if (!idAnimation) {
    //         idAnimation = (Math.random() * 10000000).toString(16);
    //     }

    //     if (window['abrr_ui_animation_frames'] === undefined) {
    //         window['abrr_ui_animation_frames'] = {};
    //     }

    //     const runAnimation = () => {
    //         window['abrr_ui_animation_frames'][idAnimation] = requestAnimationFrame(loop);
    //     }
    //     const removeAnimation = (cancel: boolean = false) => {
    //         if (cancel) {
    //             cancelAnimationFrame(window['abrr_ui_animation_frames'][idAnimation]);
    //         }
    //         delete window['abrr_ui_animation_frames'][idAnimation];
    //     }

    //     const loop = () => {
    //         if ((from < to && value < to) || (from > to && value > to)) {
    //             if (from < to) {
    //                 value += Math.round(total / (delay / fps));
    //             } else {
    //                 value -= Math.round(total / (delay / fps));
    //             }
    //             onFrame(value);
    //             if (window['abrr_ui_animation_frames'][idAnimation]) {
    //                 runAnimation();
    //             }
    //         } else {
    //             removeAnimation(false);
    //         }
    //     };
    //     if (window['abrr_ui_animation_frames'][idAnimation]) {
    //         removeAnimation(true);
    //     }
    //     setTimeout(runAnimation, 1);
    // }

    return (
        <div>
            <Flexbox className='ui-menu' alignItems='center' justifyContent='space-between' style={{ ...styles.menu.main.menu, ...style }}>

                {(windowSize.width < 768) && <MobileMenu active={mobileActive} setActive={setMobileActive} />}

                {header && (
                    <Flexbox alignItems='center' flex={windowSize.width < 768 ? 1 : 0} justifyContent='flex-start' className={'ui-menu-header'}>
                        {!header.label ? header : (
                            <div className='ui-menu-header-title' onClick={header.onAction}>
                                {header.label}
                            </div>
                        )}
                    </Flexbox>
                )}

                {(windowSize.width >= 768) && (
                    <Flexbox alignItems='center' justifyContent='center' className={'ui-menu-navbar'}>
                        {items.list.map((navItem, index) => (
                            <Nav
                                key={index}
                                menuKey={index}
                                label={navItem.label}
                                active={index === items.active}
                                onClick={items.onClick}
                            />
                        ))}
                    </Flexbox>
                )}

                {toolsRight && (
                    <Flexbox alignItems='center' justifyContent='flex-end' className={'ui-menu-toolsbar'}>
                        {toolsRight.map((tool, index) => React.cloneElement(tool, { key: index }))}
                    </Flexbox>
                )}

                {profile && (
                    <Flexbox alignItems='center' justifyContent='flex-end' className={'ui-menu-profile'}>
                        <Login {...profile} />
                    </Flexbox>
                )}

            </Flexbox>

            {(windowSize.width < 768) && <MobileMenuItems active={mobileActive} items={props.items} />}
        </div>
    )
}