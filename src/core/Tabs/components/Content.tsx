/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { Transition } from 'react-transition-group';
import { Flexbox } from '../..';
import TabsTypes from '../types';

export default (props: { items: any[], activeItemIndex: number }) => {
    const { items, activeItemIndex } = props;
    const [prevIndex, setPrevIndex] = useState(activeItemIndex || 0);
    const duration = 500;

    const transitionStyles = {
        entering: {
            opacity: 0,
            position: 'relative',
            transform: `translateX(${prevIndex < activeItemIndex ? '1.5rem' : '-1.5rem'})`,
        },
        entered: {
            opacity: 1,
            position: 'relative',
            transform: 'translateX(0)',
        },
        exiting: {
            opacity: 0,
            position: 'absolute',
            transform: `translateX(${prevIndex > activeItemIndex ? '1.5rem' : '-1.5rem'})`,
        },
        exited: {
            opacity: 1,
            position: 'absolute',
            transform: 'translateX(0)'
        },
    };

    return (
        <Flexbox alignItems='center'>
            {items.map((_, index) => {
                const isActive = index === activeItemIndex;

                return (
                    <Transition
                        key={index}
                        timeout={{
                            enter: duration / 5,
                            exit: duration
                        }}
                        in={isActive}
                        onExit={() => setPrevIndex(index)}
                        unmountOnExit
                    >
                        {state => {
                            return (
                                <div css={css({
                                    transition: `all ${duration}ms ease-in-out`,
                                    opacity: 0,
                                    position: 'absolute',
                                    willChange: 'transform',
                                    fontSize: '10rem',
                                    padding: '10rem',
                                    ...transitionStyles[state]
                                })}
                                >
                                    {index}
                                </div>
                            )
                        }}
                    </Transition>
                )
            })}
        </Flexbox>
    )
}