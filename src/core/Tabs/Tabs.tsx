/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useEffect, useState } from 'react';
import createStyles from './styles';
import Types from './types';
import { Flexbox } from '..';
import { Icon } from '../Icon';

let manualSettedTabKey: string;
let timer: any;

export default (props: Types.Props) => {
    const { tabs, reverseContainer, noDataComponent, bp } = props;
    const styles = createStyles({ reverseContainer }, bp);
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
                    if (manualSettedTabKey) {
                        if (timer) {
                            clearTimeout(timer);
                        }
                        timer = setTimeout(() => { manualSettedTabKey = '' }, 100);
                    }
                    const rect = tab.getBoundingClientRect();
                    if (rect.height / 3 > -rect.top) {
                        active = true;
                        if (!manualSettedTabKey) {
                            setCurrentId(tab.getAttribute('data-content-id')!)
                        }
                    }
                }
            });
        }
    }

    if (!tabs || tabs.length <= 0) {
        return (
            <div css={styles.container}>
                {noDataComponent
                    ? noDataComponent
                    : <div css={styles.noDataContainer} children='Нет данных' />}
            </div>
        )
    }

    return (
        <div css={styles.container}>
            <div css={styles.content}>
                {tabs.map(tab => (
                    <div
                        data-content-id={tab.key}
                        key={`tabcnt-${tab.key}`}
                        children={tab.content}
                        css={styles.tab(tab.key == currentId)}
                    />
                ))}
            </div>
            <div css={styles.menu}>
                {tabs.map((tab, index) => (
                    <Flexbox
                        key={index}
                        onClick={() => {
                            manualSettedTabKey = tab.key;
                            setCurrentId(tab.key);
                        }}
                    >
                        <Flexbox
                            justifyContent='center'
                            alignItems='center'
                            css={css({ marginRight: '.75rem' })}
                            children={(
                                <Icon
                                    shape='oval'
                                    size='1.5rem'
                                    type={tab.icon}
                                    color={tab.key === currentId ? 'highlight' : 'light'}
                                />
                            )}
                        />
                        <div
                            data-tab={tab.key}
                            key={`tab-${tab.key}`}
                            children={tab.title}
                            css={styles.menuItem(tab.key == currentId)}
                        />
                    </Flexbox>
                ))}
            </div>
        </div>
    )
}