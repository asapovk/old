/** @jsx jsx */
import { jsx } from '@emotion/core'
import useStyles from './useStyles';
import { useEffect, useLayoutEffect, ReactNode, useState, createRef } from 'react';

export interface IProps {
    scrollViewId: string
    horizontal?: boolean,
}

export default (props: IProps) => {
    const { horizontal, scrollViewId } = props;
    let manualScrollControl = false;
    let scrollView: HTMLDivElement;

    const thumb = createRef<HTMLDivElement>();

    const [thumbState, setThumb] = useState({
        offset: 0,
        size: 0,
    });

    const [hidden, setHidden] = useState(true);

    const styles = useStyles(horizontal, false, hidden);

    let timer;

    function onScroll(e?) {

        const scrollView = getScrollView();

        if (!scrollView) {
            return;
        }

        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, offsetHeight, offsetWidth, } = scrollView;

        let size, offset = 0;

        if (props.horizontal) {
            size = Math.pow(offsetWidth, 2) / scrollWidth;
            offset = (scrollLeft * size / scrollWidth) * (scrollWidth / offsetWidth);
        } else {
            size = Math.pow(offsetHeight, 2) / scrollHeight;
            offset = (scrollTop * size / scrollHeight) * (scrollHeight / offsetHeight);
        }

        setThumb({ offset, size });

        /**
         * Если null
         * значит первый вызов функции 
         * из useEffect, не выставляем setHidden
         */
        if (e !== null) {
            setHidden(false);

            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                setHidden(true);
            }, 2000);
        }
    }

    function enableManualScroll() {
        manualScrollControl = true;
    }

    function disableManualScroll() {
        manualScrollControl = false;
    }

    function onMouseMove(e) {
        const scrollView = getScrollView();

        if (!manualScrollControl || !scrollView) {
            return;
        }

        if (props.horizontal) {
            scrollView.scrollLeft += e.movementX * (scrollView.scrollWidth / scrollView.offsetWidth);
        } else {
            scrollView.scrollTop += e.movementY * (scrollView.scrollHeight / scrollView.offsetHeight);
        }

        onScroll();
    }

    function getScrollView() {
        return document.getElementById(scrollViewId) as HTMLDivElement || null;
    }
    useEffect(() => {
        let scrollView = getScrollView();

        scrollView && scrollView.addEventListener("scroll", onScroll);
        thumb.current && thumb.current.addEventListener("mousedown", enableManualScroll);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", disableManualScroll);

        onScroll(null);

        return () => {
            scrollView = getScrollView();
            scrollView && scrollView.removeEventListener("scroll", onScroll);
            thumb.current && thumb.current.removeEventListener("mousedown", enableManualScroll);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", disableManualScroll);
        }
    }, []);

    return (
        <div css={styles.scrollbar}>
            <div
                css={styles.thumb}
                style={{
                    height: props.horizontal ? undefined : thumbState.size,
                    width: !props.horizontal ? undefined : thumbState.size,
                    top: props.horizontal ? undefined : thumbState.offset,
                    left: !props.horizontal ? undefined : thumbState.offset,
                }}
                ref={thumb}
            />
        </div>
    );
}