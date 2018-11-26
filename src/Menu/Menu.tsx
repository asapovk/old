import React, { useState, useEffect } from 'react';
import { Flexbox, Login } from '..';
import useStyles from '../hooks/useStyles';
import useBrowseWidth from '../hooks/useBrowseWidth';

interface IMenu {
    header?: any
    toolsRight?: any[]
    pin?: boolean
    style?: any
    profile?: any
    children?: any
}

export default (props: IMenu) => {

    const styles = useStyles();
    const windowSize = useBrowseWidth();

    const [active, setActive] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);

    const menuRef = React.createRef<HTMLDivElement>();

    const { header, style, children, toolsRight, profile } = props;

    let hamburgerClasses = 'ui-menu-navbar-hamburger';

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

    useEffect(() => {
        if (active) {
            setMenuHeight((menuRef.current!.childNodes[0] as HTMLDivElement).offsetHeight)
        } else {
            setMenuHeight(0);
        }
    }, [active]);


    if (active) {
        hamburgerClasses += " active";
    }

    return (
        <div>
            <Flexbox className='ui-menu' alignItems='center' justifyContent='space-between' style={{ ...styles.menu.main.menu, ...style }}>

                {(children && windowSize.width < 768) && (
                    <Flexbox justifyContent='center' alignItems='center' className='ui-menu-navbar'>
                        <Flexbox flexDirection='column' justifyContent='space-between' className={hamburgerClasses} onClick={() => setActive(!active)}>
                            <div className='ui-menu-navbar-hamburger-top' style={{ backgroundColor: styles.theme.highlight.hex }} ></div>
                            <div className='ui-menu-navbar-hamburger-middle' style={{ backgroundColor: styles.theme.highlight.hex }}></div>
                            <div className='ui-menu-navbar-hamburger-bottom' style={{ backgroundColor: styles.theme.highlight.hex }}></div>
                        </Flexbox>
                    </Flexbox>
                )}

                {header && (
                    <Flexbox alignItems='center' className={'ui-menu-header'}>
                        {!header.label ? header : (
                            <div className='ui-menu-header-title' onClick={header.onAction}>
                                {header.label}
                            </div>
                        )}
                    </Flexbox>
                )}

                {(children && windowSize.width > 768) && (
                    <Flexbox alignItems='center' justifyContent='center' className={'ui-menu-navbar'}>
                        {children}
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

            {(children && windowSize.width < 768) && (
                <div ref={menuRef} style={{ height: menuHeight }} className={`ui-menu-navbar-hamburger-content`}>
                    <Flexbox alignItems="center" flexDirection="column" style={{ position: "relative", top: active ? 0 : 110, opacity: active ? 1 : 0 }}>
                        <div>Основная информация</div>
                        <div style={{
                            background: styles.theme.highlight.hex,
                            borderRadius: styles.theme.radius.button,
                            color: styles.theme.textOnAccent.hex,
                        }}>Всякая ерундистика</div>
                        <div>Контакты</div>
                        <div>О бобрах</div>
                        <div>Связаться с зеленым кроликом</div>
                    </Flexbox>
                </div>
            )}
        </div>
    )
}