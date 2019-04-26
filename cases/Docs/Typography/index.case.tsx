/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Flexbox, D1, C1, HR } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default (props) => {
    return (
        <Flexbox flexDirection='column' p={80}>
            <D1
                menu={[
                    { text: 'Item', value: 'item' },
                    { text: '🤷🏻‍', value: '🤷🏻‍' },
                ]}
                action={<C1 link>Action</C1>}
                onChange={(value) => console.log(value)}
            />
            <Flexbox p='1rem' mt='3rem' css={css({ border: '1px solid black' })}>
                <C1 color='highlight' accent='red' ellipsis css={css({ flex: 1 })}>Very very long text frame with lot of information</C1>
                <Flexbox flex={1} css={css({ background: 'red' })} />
                <Flexbox flex={1} flexShrink={0} css={css({ background: 'lightgreen' })} />
            </Flexbox>
        </Flexbox>
    )
}