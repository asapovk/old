import React, { useEffect, useState, useRef } from 'react';
import { Flexbox } from '..';
import useStyles from '../hooks/useStyles';
import { ColorCorrector } from '../Styles/utilities';
import Nav from './Nav';
import { IMenuItems } from './Menu';

interface IMobileMenu {
    active: boolean
    setActive: (active: boolean) => void
}

interface IMobileMenuItems {
    active: boolean
    items: IMenuItems
    tools?: any[]
}

export function MobileMenu(props: IMobileMenu) {

    const styles = useStyles();
    const { active, setActive } = props;

    let hamburgerClasses = 'ui-menu-navbar-hamburger';
    if (active) {
        hamburgerClasses += " active";
    }

    return (
        <Flexbox justifyContent='center' alignItems='center' className='ui-menu-navbar'>
            <Flexbox flexDirection='column' justifyContent='space-between' className={hamburgerClasses} onClick={() => setActive(!active)}>
                <div className='ui-menu-navbar-hamburger-top' style={{ backgroundColor: styles.theme.highlight.hex }} ></div>
                <div className='ui-menu-navbar-hamburger-middle' style={{ backgroundColor: styles.theme.highlight.hex }}></div>
                <div className='ui-menu-navbar-hamburger-bottom' style={{ backgroundColor: styles.theme.highlight.hex }}></div>
            </Flexbox>
        </Flexbox>
    )
}

export function MobileMenuItems(props: IMobileMenuItems) {

    const styles = useStyles();
    const menuRef = useRef<HTMLDivElement>(null);
    const [menuHeight, setMenuHeight] = useState(0);

    const { items, active, tools } = props;

    useEffect(() => {
        if (active) {
            setMenuHeight((menuRef.current!.childNodes[0] as HTMLDivElement).offsetHeight)
        } else {
            setMenuHeight(0);
        }
    }, [active]);

    return (
        <div ref={menuRef} style={{ height: menuHeight, background: ColorCorrector.darker(styles.theme.background.hex, 3) }} className={`ui-menu-navbar-hamburger-content`}>
            <Flexbox alignItems="center" flexDirection="column" style={{ position: "relative", top: active ? 0 : 110, opacity: active ? 1 : 0 }}>

                {tools && (
                    <Flexbox justifyContent='space-around' alignItems='center' style={{ marginBottom: '1rem' }}>
                        {tools.map((tool, index) => React.cloneElement(tool, { key: index, style: { marginRight: index != tools.length - 1 ? 10 : 0 } }))}
                    </Flexbox>
                )}

                {items.list.map((navItem, index) => (
                    <Nav
                        style={{ marginBottom: (index === items.list.length - 1) ? 0 : '1rem' }}
                        key={index}
                        menuKey={index}
                        label={navItem.label}
                        active={index === items.active}
                        onClick={items.onClick}
                    />
                ))}
            </Flexbox>
        </div>
    )
}