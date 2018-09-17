import React from 'react';
import { Viewport, Flexbox, Title, Icon } from '../../src';

class TitleStory extends React.Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <Viewport>
                <Flexbox p={40}>
                    <Title>Простой заголовок</Title>
                </Flexbox>
                <Flexbox p={40}>
                    <Title
                        children="Динамика"
                        onLabel="Платежей"
                        offLabel="Новых пользователей"
                        onChange={state => { console.log(state) }}
                    />
                </Flexbox>
            </Viewport>
        )

    }
}

export default TitleStory