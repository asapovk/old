/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Widget, Flexbox, Button } from '../../../src';
import { Section } from './components';

const Main = () => {
    return (
        <div css={css({ marginBottom: '1.25rem' })}>
            <Section
                header='Ноябрь 2018'
                children={[
                    <Widget css={css({ marginTop: '1.25rem', padding: '2.5rem', boxShadow: '0 1rem 1rem 0 rgba(0,0,0,0.08)' })} children={(
                        <Flexbox justifyContent='space-between'>
                            <div>4574,05Р + 1225,05Р = 5800Р</div>
                            <Flexbox flexDirection='column' justifyContent='space-between' flexShrink={0}>
                                <Button label='Оплатить' size="large" decoration='highlight' />
                                <Button label='Передать показания' size="large" decoration='outline' css={css({ marginTop: '1rem' })} />
                            </Flexbox>
                        </Flexbox>
                    )} />
                ]}
                barHR
                barMarginTop='4.25rem'
            />
        </div>
    )
}

export default Main;