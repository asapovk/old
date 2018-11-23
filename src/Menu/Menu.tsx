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

let contentHeight;

export default (props: IMenu) => {

    const styles = useStyles();
    const windowSize = useBrowseWidth();

    const [active, setActive] = useState(false);
    const [menuHeigth, setMenuHeight] = useState(0);

    const hamburgerContent = React.createRef<HTMLDivElement>();

    const { header, style, children, toolsRight, profile } = props;

    let hamburgerClasses = 'ui-menu-navbar-hamburger';
    if (active) hamburgerClasses += ' active';

    console.log(hamburgerContent);

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

            </Flexbox >
            <div ref={hamburgerContent} className={`ui-menu-navbar-hamburger-content`}>
                <div>123</div>
                <div>123123</div>
            </div>
        </div>
    )
}