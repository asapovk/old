/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { IPopup, TargetCoordinates } from './types';
import createStyles from './styles';

const initialTargetCoord = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};

export default (props: IPopup) => {
    const [visible, setVisible] = useState(false);
    const [targetCoord, setTargetCoord] = useState<TargetCoordinates>(initialTargetCoord);

    const popupRef = useRef<HTMLDivElement>(null);
    const popupHeight: number = popupRef.current && popupRef.current.offsetHeight || 0;

    const triggerRef = useRef<HTMLDivElement>(null);

    const styles = createStyles(visible, props.position, targetCoord, popupHeight);

    const handleClickOutside = (event: { target: any }) => {
        popupRef && !popupRef.current!.contains(event.target) && setVisible(false);
    }

    const { children, type, trigger } = props;

    useEffect(() => {
        const triggerElement = triggerRef && ReactDOM.findDOMNode(triggerRef.current!) as Element;
        const coords: TargetCoordinates = triggerElement && triggerElement.getBoundingClientRect();

        if (coords) {
            setTargetCoord({
                top: coords.top + document.documentElement!.scrollTop,
                bottom: coords.bottom + document.documentElement!.scrollTop,
                left: coords.left + document.documentElement!.scrollLeft,
                right: coords.right + document.documentElement!.scrollLeft,
            });
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');

    return (
        <div css={styles.wrapper}>
            <div onClick={() => setVisible(!visible)} ref={triggerRef} children={trigger} />
            {ReactDOM.createPortal(
                <div css={styles.popup} ref={popupRef} children={children} />,
                ViewportHTML ? ViewportHTML : document.body
            )}
        </div>
    )
}