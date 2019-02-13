/** @jsx jsx */
import { jsx } from '@emotion/core';
import createStyles from './styles';
import { forwardRef } from 'react';
import { Flexbox, Spin, Icon } from '..';
import Field from './Field';
import Types from './types';

export default forwardRef((props: Types.Props, ref) => {

    const styles = createStyles(props.multiline, props.size, props.disabled, props.decoration);

    const Label = () => props.label
        ? <span css={styles.label}>
            {props.label}
        </span>
        : null

    const TextFieldIcon = (props: Types.IconProps) =>
        props.type
            ? <Icon css={styles.icon(props.position)} type={props.type} />
            : null

    const Loading = () =>
        <Flexbox alignItems='center' justifyContent='center' css={styles.icon}>
            <Spin><Icon type='spin' /></Spin>
        </Flexbox>

    if (!(props.decoration === 'none')) return (
        <Flexbox css={styles.container} className={props.className} style={props.style} flexDirection='column'>
            <Label />
            <Flexbox css={styles.wrapper} onClick={props.onClick} alignItems='center'>
                <TextFieldIcon position='left' type={props.leftIcon} />
                <Field styles={styles} ref={ref} {...props} />
                {props.loading
                    ? <Loading />
                    : <TextFieldIcon position='right' type={props.rightIcon} />}
            </Flexbox>
        </Flexbox>
    )

    return <Field styles={styles} ref={ref} {...props} />
})