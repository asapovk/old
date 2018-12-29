/** @jsx jsx */
import { jsx } from '@emotion/core'
import getStyles from './styles';
import { forwardRef, useState } from 'react';
import Types from './types';
import { Flexbox, Spin, Icon } from '..';

/*———————————————————————
* WRAPPER
———————————————————————*/
export default forwardRef((props: Types.Props, ref) => {

    const styles = getStyles(props.multiline, props.size, props.disabled, props.decoration);

    const Label = () => props.label
        ? <span css={styles.label}>
            {props.label}
        </span>
        : null

    const IconOrNot = (props: Types.IconOrNotProps) =>
        props.type
            ? <Icon css={styles.icon(props.position)} type={props.type} />
            : null

    const Loading = () =>
        <Flexbox alignItems='center' justifyContent='center' css={styles.icon}>
            <Spin><Icon type='spin' /></Spin>
        </Flexbox>

    if (!(props.decoration === 'none')) return (
        <Flexbox css={styles.container} style={props.style} flexDirection='column'>
            <Label />
            <Flexbox css={styles.wrapper} onClick={props.onClick} alignItems='center'>
                <IconOrNot position='left' type={props.leftIcon} />
                <Field styles={styles} ref={ref} {...props} />
                {props.loading
                    ? <Loading />
                    : <IconOrNot position='right' type={props.rightIcon} />}
            </Flexbox>
        </Flexbox>
    )

    else return <Field styles={styles} ref={ref} {...props} />
})


/*———————————————————————
* FIELD
———————————————————————*/
const Field = forwardRef((props: Types.FieldProps, ref) => {

    const [value, setValue] = useState(props.value);

    function onChange(event) {
        setValue(event.target.value);
        props.onChange && props.onChange(event);
    }

    return jsx(
        props.multiline ? 'textarea' : 'input',
        {
            onFocus: props.onFocus,
            onBlur: props.onBlur,
            defaultValue: props.defaultValue,
            value: value,
            onChange: onChange,
            disabled: props.disabled,
            placeholder: props.placeholder,
            css: props.styles.field,
            ref: ref,
            type: props.type,
            ...props.multiline
                ? props.singlerow && {
                    onKeyDown: (event) => {
                        if (event.keyCode === 13) {
                            event.preventDefault();
                        }
                    }
                }
                : { type: props.type }
        }
    )
})