/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useEffect } from 'react';
import { Icon } from '../../';
import Types from './types';
import createStyles from './styles';

export default (props: Types.CheckboxProps) => {
    const [checked, setChecked] = useState(props.checked || props.defaultValue || false);
    const { style, label, uppercase, radio, className } = props;

    const styles = createStyles(checked, radio, uppercase);

    useEffect(() => {
        if (typeof props.checked !== "undefined") {
            setChecked(props.checked);
        }
    }, [props.checked]);

    function onClick() {
        props.onChange && props.onChange(!checked);

        if (typeof props.checked === "undefined") {
            setChecked(!checked);
        }
    }

    return (
        <div css={styles.container} onClick={onClick} style={style} className={className}>
            <div css={styles.input}>
                {checked && (
                    radio
                        ? <span css={styles.circle} />
                        : <Icon type='check' />
                )}
            </div>
            <div css={styles.label} children={label} />
        </div>
    )
}