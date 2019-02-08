/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import createStyles from './styles';
import Types from './types';
import { C1 } from '../..';

export default (props: Types.Props) => {
    const { tabs, reverseContainer } = props;
    const styles = createStyles({ reverseContainer });
    const [currentId, setCurrentId] = useState('');

    useEffect(() => {
        // isElementInViewport();
        const viewport = document.querySelector('[data-viewport]')
        viewport && viewport.addEventListener('scroll', onWindowScroll);

        removeHash();
        setSmoothAnimation();

        return () => viewport && document.removeEventListener('scroll', onWindowScroll);
    }, []);

    function setSmoothAnimation() {
        const anchorlinks = document.querySelectorAll('div[data-href]');

        anchorlinks.forEach(item => {
            item.addEventListener('click', (event) => {
                const hashval = item.getAttribute('data-href');
                if (hashval) {
                    const target = document.querySelector(hashval);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'

                        });
                        event.preventDefault();
                    }
                }
            });
        })

    }

    function onWindowScroll() {
        let tabs = document.querySelectorAll('[data-tab-container]');
        if (tabs) {
            let active: any;
            tabs.forEach(tab => {
                const rect = tab.getBoundingClientRect();
                if (!active && rect.height / 3 > -rect.top) {
                    active = tab;
                }
            });
            if (active) {
                const id = active.getAttribute('id');
                if (document.location.hash !== `${id}`) {
                    // history.pushState(null, document.title, `#${id}`);
                    setCurrentId(id);
                }
            }
        }
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
                    <div data-href={`#${tab.key}`} key={`tab-${tab.key}`} css={styles.menuItem(location.hash === `#${tab.key}`)} >
                        <C1 bold={tab.key == currentId}>{tab.title}</C1>
                    </div>
                ))}
            </div>
        </div>
    )
}