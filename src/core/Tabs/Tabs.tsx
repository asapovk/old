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
        setSmoothAnimation();

        const viewport = document.querySelector('[data-viewport]');

        viewport && viewport.addEventListener('scroll', onWindowScroll);
        return () => {
            viewport && document.removeEventListener('scroll', onWindowScroll);
        }
    }, []);

    function setSmoothAnimation() {
        const anchorlinks = document.querySelectorAll('div[data-tab]');

        anchorlinks.forEach(item => {
            item.addEventListener('click', (event) => {
                const tabId = item.getAttribute('data-tab');
                if (tabId) {
                    const target = document.querySelector(tabId);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth'
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
                    setCurrentId(id);
                }
            }
        }
    }

    return (
        <div css={styles.container}>
            <div css={styles.content}>
                {tabs.map(tab => (
                    <div
                        data-tab-container
                        id={tab.key}
                        key={`tabcnt-${tab.key}`}
                        children={tab.content}
                        css={styles.tab}
                    />
                ))}
            </div>
            <div css={styles.menu}>
                {tabs.map(tab => (
                    <div
                        data-tab={tab.key}
                        key={`tab-${tab.key}`}
                        children={(
                            <C1>{tab.title}</C1>
                        )}
                        css={styles.menuItem(tab.key == currentId)}
                    />
                ))}
            </div>
        </div>
    )
}