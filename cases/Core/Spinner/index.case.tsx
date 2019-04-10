import React from 'react';
import { Spinner } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (
            <Spinner loadingText='Загружаем что-то...' spinning center />
        )
    }
}