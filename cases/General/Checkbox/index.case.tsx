import React, { Fragment } from 'react';
import { Checkbox, Flexbox } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox column justifyContent="center" alignContent="center" p={40}>
                <Checkbox label='Check me' style={{ paddingRight: '40px' }} />
                <Checkbox label='Check me' radio={true} />
            </Flexbox>
        )
    }
}