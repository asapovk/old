/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import ModalTypes from './types';
import { forwardRef } from 'react';

export default forwardRef((props: ModalTypes.ModalOverlayProps, ref: any) => {
    const styles = createStyles({
        visible: props.visible,
        center: props.center,
        fullSize: props.fullSize
    })

    return (
        <div
            ref={ref}
            css={styles.overlay}
            children={props.children}
        />
    )
});