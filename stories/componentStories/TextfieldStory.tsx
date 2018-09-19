import React, { Fragment } from 'react';
import { TextField, Flexbox } from '../../src';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox column justifyContent="center" alignContent="center" p={40}>
                <TextField label='Just input' style={{ flexBasis: '90px' }} type='password' />
                <TextField multiline={true} label='Textarea' style={{ paddingBottom: '40px' }} />
                <TextField multiline={true} singlerow={true} label='Singlerow textarea' />
            </Flexbox>
        )
    }
}