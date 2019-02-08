/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useBrowser } from '../../hooks'
import ReactDOM from 'react-dom';
import Types from './types';
import createStyles from './styles';

const initialTargetCoord = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};

export default (props: Types.Props) => {
    const { children, type, trigger } = props;
    const [visible, setVisible] = useState(false);
    const [targetCoord, setTargetCoord] = useState<Types.TargetCoordinates>(initialTargetCoord);

    const popupRef = useRef<HTMLDivElement>(null);
    const triggerRef = props.triggerRef ? props.triggerRef : useRef<HTMLDivElement>(null);
    const ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');

    const browser = useBrowser();
    const styles = createStyles(visible, props.position, targetCoord, popupRef);

    const Portal = ReactDOM.createPortal(
        <div css={styles.popup} ref={popupRef} children={children} />,
        ViewportHTML ? ViewportHTML : document.body
    );

    useLayoutEffect(() => {
        const coord = triggerRef.current! && triggerRef.current!.getBoundingClientRect();

        coord && setTargetCoord({
            top: coord.top + document.documentElement!.scrollTop,
            bottom: coord.bottom + document.documentElement!.scrollTop,
            left: coord.left + document.documentElement!.scrollLeft,
            right: coord.right + document.documentElement!.scrollLeft,
        });
    }, [browser.width]);

    useEffect(() => {
        if (typeof props.visible != 'undefined') setVisible(props.visible);
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [props.visible]);

    function handleClickOutside(event: { target: any }) {
        if (!visible) return;

        if (popupRef && !popupRef.current!.contains(event.target)) {
            setVisible(false);
            props.onClose && props.onClose();
        }
    }

    if (props.triggerRef) return Portal

    return (
        <div
            onClick={() => setVisible(!visible)}
            ref={triggerRef}
            children={[React.cloneElement(trigger, { key: '1' }), Portal]}
            css={styles.wrapper}
        />
    )
}