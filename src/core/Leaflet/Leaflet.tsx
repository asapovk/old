/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useReducer, useImperativeHandle, useLayoutEffect, forwardRef } from 'react';
import { Flexbox } from '../index';
import createStyles from './styles';
import Types from './types';
import Menu from './Menu';
import { useBrowser } from '../../hooks'
import Items from './Items';
import { RightBar, LeftBar } from './Bars';

const reducer = (state: Types.State, action: Types.Action) => {
    switch (action.type) {
        case 'openMenu':
            state.choose = true
            return { ...state }
        case 'addItem':
            state.opened.push(action.payload);
            state.choose = false;
            return { ...state }
        case 'setItem':
            state.opened = [action.payload];
            return { ...state }
        case 'back':
            state.choose
                ? state.choose = false
                : state.opened.pop();
            return { ...state }
        case 'close':
            state.choose = false;
            state.opened = state.opened.slice(0, 1);
            return { ...state }
        case 'exit':
            state.choose = false;
            state.opened = [];
            return { ...state }
        default:
            return state;
    }
}

export default forwardRef((props: Types.Props, ref) => {

    if (!props.data) {
        return <div>{props.noData || 'Нет данных'}</div>
    }

    const browser = useBrowser();
    const styles = createStyles(browser.isMobile);

    const capacity = browser.isDesktop
        ? (props.capacity && props.capacity[0]) || 5
        : (props.capacity && props.capacity[1]) || 1

    const initialState = {
        opened: browser.isMobile ? [] : [0],
        choose: false
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useLayoutEffect(() => {
        if (browser.isMobile) {
            dispatch({ type: 'exit' });
        } else if (!state.opened.length) {
            dispatch({ type: 'setItem', payload: 0 })
        }
    }, [browser]);

    useImperativeHandle(ref, () => ({
        exit: () => {
            dispatch({ type: 'exit' });
        }
    }));

    return (
        <Flexbox css={styles.container} className={props.className}>

            {/* Left bar user compare something */}
            {state.opened.length > 1
                && !browser.isMobile
                && <LeftBar
                    styles={styles}
                    onBack={() => dispatch({ type: 'back' })}
                    onClose={() => dispatch({ type: 'close' })}
                />
            }

            {/* Menu shows on mobile if nothing opened. 
            On other screens shows right if opened only one item
            and left in compare mode after choose action  */}
            <Flexbox flex={1} css={styles.items}>
                {(browser.isMobile
                    ? !state.opened.length
                    : (state.opened.length === 1 && !state.choose)
                )
                    && <Menu
                        {...props}
                        onChoose={(i) => dispatch({ type: 'setItem', payload: i })}
                        active={state.opened[0]}
                        styles={styles}
                        isMobile={browser.isMobile}
                    />
                }
                {props.items &&
                    <Items
                        opened={state.opened}
                        data={props.data}
                        items={props.items}
                        styles={styles}
                        breakpoints={props.breakpoints}
                    />}
                {state.choose &&
                    <Menu
                        {...props}
                        onChoose={(i) => dispatch({ type: 'addItem', payload: i })}
                        styles={styles}
                        isMobile={browser.isMobile}
                    />
                }
            </Flexbox>

            {/* Right bar to compare action if not exceeded */}
            {state.opened.length < capacity
                && !browser.isMobile
                && props.data.length > 1
                && <RightBar
                    styles={styles}
                    onAdd={() => dispatch({ type: 'openMenu' })}
                />
            }

        </Flexbox>
    );
})