/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import { useEffect, useLayoutEffect, ReactNode, useState, createRef } from 'react';

export interface IProps {
    scrollViewId: string
    horizontal?: boolean,
}

export default (props: IProps) => {
    const { horizontal, scrollViewId } = props;
    let manualScrollControl = false;
    let mouseOverScroll = false;

    const scrollThumb = createRef<HTMLDivElement>();
    const scrollBar = createRef<HTMLDivElement>();

    const [scrollThumbState, setScrollThumbState] = useState({
        offset: 0,
        size: 0,
    });

    const [hidden, setHidden] = useState(true);

    const styles = createStyles(horizontal, false, hidden);

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

        setScrollThumbState({ offset, size });

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
                if (!mouseOverScroll) {
                    setHidden(true);
                }
            }, 2000);
        }
    }

    function enableManualScroll() {
        manualScrollControl = true;
    }

    function disableManualScroll() {
        manualScrollControl = false;
    }

    function mouseEnterScrollBar() {
        mouseOverScroll = true;
    }
    function mouseLeaveScrollBar() {
        mouseOverScroll = false;
        onScroll();
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
        scrollThumb.current && scrollThumb.current.addEventListener("mousedown", enableManualScroll);
        scrollBar.current && scrollBar.current.addEventListener("mouseenter", mouseEnterScrollBar);
        scrollBar.current && scrollBar.current.addEventListener("mouseleave", mouseLeaveScrollBar);

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", disableManualScroll);

        onScroll(null);

        return () => {
            scrollView = getScrollView();
            scrollView && scrollView.removeEventListener("scroll", onScroll);
            scrollThumb.current && scrollThumb.current.removeEventListener("mousedown", enableManualScroll);
            scrollBar.current && scrollBar.current.removeEventListener("mouseenter", mouseEnterScrollBar);
            scrollBar.current && scrollBar.current.removeEventListener("mouseleave", mouseLeaveScrollBar);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", disableManualScroll);
        }
    }, [scrollViewId]);

    return (
        <div css={styles.scrollbar} ref={scrollBar}>
            <div
                css={styles.thumb}
                style={{
                    height: props.horizontal ? undefined : scrollThumbState.size,
                    width: !props.horizontal ? undefined : scrollThumbState.size,
                    top: props.horizontal ? undefined : scrollThumbState.offset,
                    left: !props.horizontal ? undefined : scrollThumbState.offset,
                }}
                ref={scrollThumb}
            />
        </div>
    );
}