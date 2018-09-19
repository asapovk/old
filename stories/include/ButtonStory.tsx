import React, { Fragment } from 'react';
import { Button, Flexbox } from '../../src';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox justifyContent="center" alignContent="center" p={40}>
                <Flexbox p={10}>
                    <Button>Simple button</Button>
                </Flexbox>
                <Flexbox p={10}>
                    <Button decoration="none">Decoration none</Button>
                </Flexbox>
                <Flexbox p={10}>
                    <Button loading>Loading button</Button>
                </Flexbox>
            </Flexbox>
        )
    }
}