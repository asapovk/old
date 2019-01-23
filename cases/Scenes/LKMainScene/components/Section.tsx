/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Flexbox, HR, H2 } from '../../../../src';

export const Section = (props) => {
    return (
        <div className={props.className}>
            {props.header && <H2 underline={true} action={props.headerAction}>{props.header}</H2>}
            <Flexbox>
                <Flexbox flex={1} flexDirection='column'>
                    {props.children}
                </Flexbox>
                <Flexbox flexBasis={'14rem'} flexDirection='column' css={css({ marginLeft: '2.5rem' }, props.barMarginTop && { marginTop: props.barMarginTop })}>
                    {props.bar && props.barHR && <HR css={css({ marginBottom: '1.5rem' })} />}
                    {props.bar}
                </Flexbox>
            </Flexbox>
        </div>
    )
}