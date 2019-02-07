/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, useEffect, useLayoutEffect } from 'react';
import createStyles from './styles';
import Types from './types';

export default (props: Types.Props) => {
    const { tabs, reverseContainer } = props;
    const styles = createStyles({ reverseContainer });

    useEffect(() => {
        removeHash();
        setSmoothAnimation();

        // isElementInViewport();
        const viewport = document.querySelector('[data-viewport]')
        viewport && viewport.addEventListener('scroll', onWindowScroll);
        return () => viewport && document.removeEventListener('scroll', onWindowScroll);
    }, []);

    function setSmoothAnimation() {
        let anchorlinks = document.querySelectorAll('a[href^="#"]');

        //@ts-ignore
        for (let item of anchorlinks) { // relitere 
            item.addEventListener('click', (e) => {
                let hashval = item.getAttribute('href');
                let target = document.querySelector(hashval);
                target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'nearest'
                });
                history.pushState(null, document.title, hashval);
                e.preventDefault();
            });
        }
    }

    function onWindowScroll(event) {
        let tabs = document.querySelectorAll('[data-tab-container]');
        if (tabs) {
            tabs.forEach(tab => {
                if (isElementInViewport(tab)) {
                    let hashval = tab.getAttribute('id');
                    history.pushState(null, document.title, `#${hashval}`);
                    event.preventDefault();
                }
            });
        }
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }

    function removeHash() {
        let scrollV: number, scrollH: number, loc: Location = window.location;

        if ("pushState" in history) {
            history.pushState("", document.title, loc.pathname + loc.search);
        } else {
            // Prevent scrolling by storing the page's current scroll offset
            scrollV = document.body.scrollTop;
            scrollH = document.body.scrollLeft;

            loc.hash = "";

            // Restore the scroll offset, should be flicker free
            document.body.scrollTop = scrollV;
            document.body.scrollLeft = scrollH;
        }
    }

    return (
        <div css={styles.container}>
            <div css={styles.content}>
                {tabs.map(tab => (
                    <div id={tab.key} data-tab-container key={`tabcnt-${tab.key}`} css={styles.tab}>{tab.content}</div>
                ))}
            </div>
            <div css={styles.menu}>
                {tabs.map(tab => (
                    <a href={`#${tab.key}`} key={`tab-${tab.key}`} css={styles.menuItem}>
                        {tab.title}
                    </a>
                ))}
            </div>
        </div>
    )
}