import React, { useRef, useState, useLayoutEffect } from 'react';
import NavBarItem from './NavBarItem';
import useBrowser from '../hooks/useBrowser';
import useStyles from '../hooks/useTheme';

const PW: number[] = [];
export default (props) => {
    const browser = useBrowser();
    const styles = useStyles();
    const { items } = props;

    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);
    const [sliceIndex, setSliceIndex] = useState<number>(items.list.length);

    /** Высчитываем необходимую ширину для перерендера */
    const calculateItemsWidth = () => {
        /**
         * Задаем дефолтный отстут - чтобы не сближать к другим элементам меню
         * далее высчитываем необходимое место для элементов меню
         */
        const nodes = containerRef.current!.childNodes;
        let width = 32;
        nodes.forEach((node: HTMLDivElement) => width += node.offsetWidth);

        if (containerWidth) {
            // Если ширина контейнера меньше чем ширина всех элементов
            if (containerWidth <= width) {
                const lastNodeWidth = (containerRef.current!.childNodes[sliceIndex - 1] as HTMLDivElement).offsetWidth
                PW.push(lastNodeWidth);

                setSliceIndex(sliceIndex - 1);
            } else {
                if ((containerWidth > width + PW[PW.length - 1]) && (sliceIndex < items.list.length)) {
                    PW.pop();
                    setSliceIndex(sliceIndex + 1);
                }
            }
        }
    }

    let onContainerWidthChange = (cw) => {
        if (containerWidth !== cw) {
            setContainerWidth(cw);
        }
    }

    useLayoutEffect(() => {
        onContainerWidthChange(containerRef.current!.offsetWidth);
        calculateItemsWidth();
    }, [containerWidth, sliceIndex, browser.width]);

    return (
        <div
            ref={containerRef}
            className={'ui-menu-navbar'}
            style={{ width: '100%' }}
        >
            {items.list.map((navItem, index) => (
                <NavBarItem
                    key={index}
                    menuKey={index}
                    label={navItem.label}
                    active={index === items.active}
                    onClick={items.onClick}
                    hidden={index >= sliceIndex}
                />
            ))}
            {sliceIndex < items.list.length && (
                <div className='ui-menu-nav-ext' style={{
                    color: items.active >= sliceIndex ? styles.theme.textOnAccent.rgb : styles.menu.nav.textColor,
                    background: items.active >= sliceIndex ? styles.menu.nav.textColorActive : 'transparent',
                    borderRadius: styles.theme.radius.button
                }}>
                    <div>Еще</div>
                    <div className='ui-menu-nav-ext-dropdown' style={{
                        backgroundColor: styles.theme.background.hex,
                        borderRadius: styles.theme.radius.default
                    }}>
                        {items.list.filter((_, index) => index >= sliceIndex)
                            .map((navItem, index) => (
                                <NavBarItem
                                    key={index + sliceIndex}
                                    menuKey={index + sliceIndex}
                                    label={navItem.label}
                                    active={index + sliceIndex === items.active}
                                    onClick={items.onClick}
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    )
}