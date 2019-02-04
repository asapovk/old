/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Flexbox, HR, D1 } from '../../../../src';

export const Section = (props) => {
    return (
        <div css={css({ width: '100%' })}>
            {props.header && <D1 underline={true} action={props.headerAction}>{props.header}</D1>}
            <div>
                {props.children}
                <Flexbox flexBasis={'14rem'} flexDirection='column' css={css({ marginLeft: '2.5rem' }, props.barMarginTop && { marginTop: props.barMarginTop })}>
                    {props.bar && props.barHR && <HR css={css({ marginBottom: '1.5rem' })} />}
                    {props.bar}
                </Flexbox>
            </div>
        </div>
    )
}