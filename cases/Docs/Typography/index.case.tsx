import React from 'react';
import { Flexbox, D1, C1 } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
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
                <D1 format='rub' color='highlight'>1.23</D1>
                <D1 format='rub' color='highlight'>1.2</D1>
                <D1 format='rub' color='highlight'>1</D1>
                <D1 format='volume' color='highlight'>1.239</D1>
                <D1 format='volume' color='highlight' toFixed={3}>1.2</D1>
                <D1 format='volume' color='highlight'>1</D1>
            </Flexbox>
        )
    }
}