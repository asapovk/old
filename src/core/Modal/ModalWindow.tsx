/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import ModalTypes from './types';
import { Fragment, forwardRef } from 'react';
import ModalHeader from './ModalHeader';

export default forwardRef((props: ModalTypes.ModalWindowProps, ref: any) => {
    const styles = createStyles({
        visible: props.visible,
        center: true,
    })

    return (
        <Fragment>
            <div ref={ref} css={styles.window}>
                <ModalHeader
                    onClosePressed={props.onClosePressed}
                    title={props.title}
                    subtitle={props.subtitle}
                    hideHeader={props.hideHeader}
                />
                {props.children}
            </div>
        </Fragment>
    )
})