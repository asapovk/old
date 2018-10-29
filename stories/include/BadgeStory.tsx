import React, { Fragment } from 'react';
import { TextField, Flexbox, Button, Badge } from '../../src';

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
                    <Badge value={4} color="highlight">
                        <Button label="Сообщения" />
                    </Badge>
                </div>
                <div style={{ paddingLeft: 20 }}>
                    <Badge value={4} color="blue">
                        <Button label="Уведомления" />
                    </Badge>
                </div>
                <div style={{ paddingLeft: 20 }}>
                    <Badge value={42} color="orange">
                        <Button label="Апельсин" />
                    </Badge>
                </div>
                <div style={{ paddingLeft: 20 }}>
                    <Badge value={9} color="green">
                        <Button label="Яблоки" />
                    </Badge>
                </div>

            </Flexbox>
        )
    }
}