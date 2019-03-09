/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import types from './types';
import Plastic from './Plastic';
import { Flexbox } from '..';
import { useState } from 'react';

export default (props: types.PlasticStackProps) => {
    let defaultValue = 0;
    if (typeof props.defaultValue === 'number') {
        defaultValue = props.defaultValue;
    }
    const [current, setCurrent] = useState(defaultValue);
    const styles = createStyles({
        stackCount: props.cards.length,
        stackDirection: props.direction
    });

    return (
        <Flexbox css={styles.stack} flexDirection='row' >
            {
                props.cards.map((card, index) => (
                    <Plastic
                        {...card}
                        key={index}
                        active={current === index}
                        onClick={() => {
                            setCurrent(index);
                            props.onChange && props.onChange(index);
                        }}
                        __stackPosition={index + 1}
                        __stackOffset={props.offset}
                        __stackDirection={props.direction}
                    />
                ))
            }
        </Flexbox>
    )
}
