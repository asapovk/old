import React, { Fragment } from 'react';
import { Flexbox, Title, Icon } from '../../../src';
import '../../../src/styles/scss/main.scss';

class TitleStory extends React.Component {
    state = {
        counter: 0
    }
    render() {
        return (
            
                <Fragment>
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
                </Fragment>
            
        )
    }
}

export default TitleStory