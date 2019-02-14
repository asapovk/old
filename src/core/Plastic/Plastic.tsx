/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import types from './types';
import Visa from './svg/visa';
import Mc from './svg/mc';
import Mir from './svg/mir';

export default (props: types.PlasticProps) => {
    const style = createStyles({
        isActive: props.active,
        cardColor: props.color,
        cardBackground: props.background,
        stackOffset: props.__stackOffset,
        stackPosition: props.__stackPosition,
        stackDirection: props.__stackDirection,
    })
    let pan = props.pan;
    if (pan.length > 4) {
        pan = pan.slice(pan.length - 4, pan.length);
    }
    pan = `•••• ${pan}`;
    return (
        <div css={style.card} onClick={props.onClick}>
            <span css={style.type}>
                {props.type === 'VISA' && <Visa />}
                {props.type === 'MASTERCARD' && <Mc />}
                {props.type === 'MAESTRO' && <Mc />}
                {props.type === 'MIR' && <Mir />}
            </span>
            <span css={style.pan}>{pan}</span>
        </div>
    );
}
