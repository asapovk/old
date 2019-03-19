/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useReducer } from 'react';
import { Flexbox, Icon, C2 } from '../index';
import createStyles from './styles';
import Types from './types';
import Menu from './Menu';

const reducer = (state: Types.State, action: Types.Action) => {
    switch (action.type) {
        case 'openMenu':
            state.showMenu = true
            return { ...state }
        case 'addItem':
            state.items.push(action.payload);
            state.showMenu = false;
            return { ...state }
        case 'setItem':
            state.items = [action.payload];
            return { ...state }
        case 'back':
            state.showMenu
                ? state.showMenu = false
                : state.items.pop();
            return { ...state }
        case 'close':
            state.items = state.items.slice(0, 1);
            return { ...state }
        default:
            return state;
    }
}

export default (props: Types.Props) => {

    const initialState = {
        items: [0],
        showMenu: false
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const styles = createStyles();

    if (!props.data) {
        return <div>{props.noData || 'Нет данных'}</div>
    }

    return (
        <Flexbox css={styles.container} className={props.className}>

            {state.items.length > 1 &&
                <LeftBar
                    styles={styles}
                    onBack={() => dispatch({ type: 'back' })}
                    onClose={() => dispatch({ type: 'close' })}
                />
            }

            <Flexbox flex={1} css={styles.items}>
                {(state.items.length === 1 && !state.showMenu)
                    && <Menu
                        data={props.data}
                        groups={props.groups}
                        onChoose={(i) => dispatch({ type: 'setItem', payload: i })}
                        active={state.items[0]}
                        styles={styles}
                    />}
                {state.items.map(index => (
                    <div
                        key={'li-' + index}
                        children={props.data[index].render}
                        css={styles.item}
                    />
                ))}
                {state.showMenu &&
                    <Menu
                        data={props.data}
                        groups={props.groups}
                        onChoose={(i) => dispatch({ type: 'addItem', payload: i })}
                        styles={styles}
                    />
                }
            </Flexbox>

            {state.items.length < 3 &&
                <RightBar
                    styles={styles}
                    onAdd={() => dispatch({ type: 'openMenu' })}
                />
            }

        </Flexbox>
    );
}

const LeftBar = (props) => {
    return (
        <Flexbox css={props.styles.leftBar} column>
            <Icon
                type='arrow-left'
                shape='oval'
                background='#fff'
                color='highlight'
                onClick={() => props.onBack()}
                size='1.25rem'
            />
            <Icon
                type='close'
                shape='oval'
                background='#fff'
                color='highlight'
                size='1.25rem'
                onClick={() => props.onClose()}
            />
        </Flexbox>
    )
}

const RightBar = (props) => {
    return (
        <Flexbox css={props.styles.rightBar} column>
            <Flexbox alignItems='center' column onClick={() => props.onAdd()}>
                <Icon
                    type='add'
                    size='2rem'
                    shape='oval'
                    background='#fff'
                    color='lowlight'
                />
                <C2
                    color='lowlight'
                    pt='1rem'
                    align='center'
                    children='Добавить к сравнению'
                />
            </Flexbox>
        </Flexbox>
    )
}