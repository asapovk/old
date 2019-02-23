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
        const buttons = document.querySelectorAll('div[data-tab]');

        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const buttonId = button.getAttribute('data-tab');
                if (buttonId) {
                    const target = document.querySelector(`[data-content-id=${buttonId}]`);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                        event.preventDefault();
                    }
                }
            });
        })
    }

    function onWindowScroll() {
        let tabs = document.querySelectorAll('[data-content-id]');
        if (tabs) {
            let active: boolean = false;

            tabs.forEach(tab => {
                if (!active) {
                    const rect = tab.getBoundingClientRect();
                    if (rect.height / 3 > -rect.top) {
                        active = true;
                        setCurrentId(
                            tab.getAttribute('data-content-id')!
                        )
                    }
                }
            });
        }
    }

    return (
        <div css={styles.container}>
            <div css={styles.content}>
                {tabs.map(tab => (
                    <div
                        data-content-id={tab.key}
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
                            <C1 bold={tab.key == currentId}>{tab.title}</C1>
                        )}
                        css={styles.menuItem(tab.key == currentId)}
                    />
                ))}
            </div>
        </div>
    )
}