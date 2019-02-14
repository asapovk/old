/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import types from './types';
import Plastic from './Plastic';
import { Flexbox } from '..';
import { useState } from 'react';

export default (props: types.PlasticStackProps) => {

    const [mouseOver, setMouseOver] = useState(0);
    const [current, setCurrent] = useState(0);
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
