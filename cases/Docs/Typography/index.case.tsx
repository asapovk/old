import React from 'react';
import { Flexbox, D1, C1, HR } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default (props) => {
    return (
        <Flexbox flexDirection='column'>
            <D1
                menu={[
                    { text: 'Услуги', value: 'services' },
                    { text: 'Приборы учета', value: 'counters' },
                ]}
                action={<C1 link>Таблицей</C1>}
                onChange={(value) => console.log(value)}
            />
            <D1 format='currency' unit='rub' color='highlight'>1.23</D1>
            <D1 toFixed={0} disabled>1.23</D1>
            <D1 format='currency' unit='rub' color='highlight'>1.2</D1>
            <D1 format='currency' color='highlight'>1</D1>
            <D1 format unit='volume' color='highlight'>1.239</D1>
            <D1 format unit='volume' color='highlight' toFixed={3}>1.2</D1>
            <D1 format unit='volume' color='highlight'>1</D1>
            <HR dotted color='highlight' />
        </Flexbox>
    )
}