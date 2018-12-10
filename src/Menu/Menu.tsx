import React, { useState, CSSProperties, useRef } from 'react';
import { Flexbox, Login } from '..';
import useStyles from '../hooks/useStyles';
import useBrowser from '../hooks/useBrowser';
import { MobileMenu, MobileMenuItems } from './Mobile';
import { ILogin } from '../Login/Login';
import NavBar from './NavBar';

import SmoLogo from '../../src/logos/smorodina';
import AbrLogo from '../../src/logos/abr';
import MrgLogo from '../../src/logos/mrg';

interface IMenuItem {
    label: string
}

export interface IMenuItems {
    list: IMenuItem[]
    active: number
    onClick: (menuItemKey: number) => void
}

interface IMenu {
    header?: any
    items: IMenuItems
    toolsRight?: any[]
    pin?: boolean
    style?: CSSProperties
    profile?: ILogin
}

export default (props: IMenu) => {

    const styles = useStyles();
    const windowSize = useBrowser();
    let navBar = useRef<HTMLDivElement>(null);

    const [mobileActive, setMobileActive] = useState(false);

    const { header, style, toolsRight, profile, items } = props;

    let logo;

    if (!header) {
        logo = <SmoLogo style={{ width: "8rem" }} color={styles.theme.text.hex} />;

        if (styles.theme.name === "gazpromTheme") {
            logo = <MrgLogo style={{ width: "5.5rem" }} />;
        }
        if (styles.theme.name === "abrTheme") {
            logo = <AbrLogo style={{ width: "10rem" }} />;
        }
        if (styles.theme.name === "whiteCurrant") {
            logo = <SmoLogo style={{ width: "8rem" }} />;
        }
    }

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
            <Flexbox
                className='ui-menu'
                alignItems='center'
                justifyContent='space-between'
                style={{
                    ...styles.menu.main.menu,
                    ...style,
                    marginLeft: windowSize.isDesktop ? '321px' : 0
                }}
            >

                {!windowSize.isDesktop && <MobileMenu active={mobileActive} setActive={setMobileActive} />}

                {!windowSize.isDesktop && (
                    <Flexbox alignItems='center' justifyContent='center' className={'ui-menu-header'}>
                        {logo ? logo : (
                            <div className='ui-menu-header-title' onClick={header.onAction}>
                                {header.label}
                            </div>
                        )}
                    </Flexbox>
                )}

                {windowSize.isDesktop && (
                    <NavBar items={items} containerWidth={navBar.current && navBar.current.offsetWidth} />
                )}

                <Flexbox alignItems='center' justifyContent='flex-end' className={'ui-menu-toolsbar'}>
                    {toolsRight && windowSize.isDesktop && (
                        <Flexbox className={'ui-menu-toolsbar-tools'}>
                            {toolsRight.map((tool, index) => React.cloneElement(tool, { key: index }))}
                        </Flexbox>
                    )}

                    {profile && (
                        <Flexbox className={'ui-menu-toolsbar-profile'}>
                            <Login {...profile} />
                        </Flexbox>
                    )}
                </Flexbox>
            </Flexbox>

            {!windowSize.isDesktop && <MobileMenuItems active={mobileActive} items={props.items} tools={toolsRight} />}
        </div>
    )
}