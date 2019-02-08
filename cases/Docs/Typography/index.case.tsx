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
                <D1 format='rub' color='highlight'>sgdfsg</D1>
            </Flexbox>
        )
    }
}