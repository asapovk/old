import React, { Fragment } from 'react';
import { TextField, Flexbox, Button, Badge, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {
    state = {
        textFieldBadge: "Тест"
    }
    render() {
        return (

            <Flexbox p={40} alignItems="flex-end">
                <div>
                    <Badge value={this.state.textFieldBadge} top={0}>
                        <TextField
                            label='Введите текст'
                            value={this.state.textFieldBadge}
                            onChange={textFieldBadge => this.setState({
                                textFieldBadge
                            })}
                            style={{ flexBasis: '90px' }}
                        />
                    </Badge>
                </div>
                <div style={{ paddingLeft: 20 }}>
                    <Badge value={4} decoration="highlight">
                        <Button label="Сообщения" />
                    </Badge>
                </div>
                <div style={{ paddingLeft: 20 }}>
                    <Badge value={4} decoration="blue">
                        <Button label="Уведомления" />
                    </Badge>
                </div>
                <div style={{ paddingLeft: 20 }}>
                    <Badge value={42} decoration="orange">
                        <Button label="Апельсины" />
                    </Badge>
                </div>
                <div style={{ paddingLeft: 20 }}>
                    <Badge value={9} decoration="green">
                        <Button label="Яблоки" />
                    </Badge>
                </div>

            </Flexbox>


        )
    }
}