/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useReducer, Fragment } from 'react';
import { Flexbox, Icon, C2, D3, T1, HR } from '../index';
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
    const capacity = props.capacity || 5;

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
                        nameKey={props.nameKey}
                    />
                }
                {<ItemsGrid
                    items={state.items}
                    data={props.data}
                    grids={props.grids}
                    styles={styles}
                />}
                {state.showMenu &&
                    <Menu
                        data={props.data}
                        groups={props.groups}
                        onChoose={(i) => dispatch({ type: 'addItem', payload: i })}
                        styles={styles}
                        nameKey={props.nameKey}
                    />
                }
            </Flexbox>

            {state.items.length < capacity &&
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

const ItemsGrid = (props) => {
    return props.items.map((key, index) => (
        <Flexbox key={'li-' + index} css={props.styles.item} column>
            {props.grids.map((grid, gi) => (
                <Flexbox key={'li-gr-' + gi} column mb='2rem'>
                    <D3 ellipsis underline>
                        {grid.title
                            ? grid.title
                            : grid.titleKey
                            && props.data[key][grid.titleKey]
                        }
                    </D3>
                    {grid.rows.filter(row => props.data[key][row.dataKey]).map((row, ri) => (
                        <Flexbox key={'li-gr-row-' + ri} css={props.styles.grid}>
                            {(props.items.length < 4 || index === 0)
                                && row.name
                                && <T1
                                    color='lowlight'
                                    css={css({ flexShrink: 0 })}
                                    children={row.name}
                                />
                            }
                            <HR
                                dotted
                                color='light'
                                css={css({ margin: '0.35rem 0.5rem', flex: 1 })}
                            />
                            <T1>{props.data[key][row.dataKey]}</T1>
                        </Flexbox>
                    ))}
                </Flexbox>
            ))}
        </Flexbox>
    ))
}