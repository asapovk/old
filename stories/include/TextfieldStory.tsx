import React, { Fragment } from 'react';
import { TextField, Flexbox } from '../../src';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox column justifyContent="center" alignContent="center" p={40}>
                <TextField label='Just input email' placeholder="Enter your email, please" style={{ flexBasis: '90px' }} validate={[{ regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }]} onError={(value) => console.log(value)} />
                <TextField multiline={true} label='Textarea' style={{ paddingBottom: '40px' }} resize />
                <TextField multiline={true} singlerow={true} label='Singlerow textarea' style={{ paddingBottom: '40px' }} />
                <TextField label='Textfield with hint' placeholder="Enter your email, please" hint='Blah-blah-blah' hintIcon="add" loading />
            </Flexbox>
        )
    }
}