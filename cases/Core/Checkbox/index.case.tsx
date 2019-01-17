import React, { Fragment } from 'react';
import { Checkbox, Flexbox, Title } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (

            <Flexbox>
                <Flexbox column justifyContent="center" alignContent="center" p={40}>
                    <Title children="Extra Large" style={{ paddingBottom: "1rem" }} />
                    <Checkbox label='Check me' style={{ paddingBottom: '.5rem' }} size="extra-large" />
                    <Checkbox label='Check me' radio={true} style={{ paddingBottom: '.5rem' }} size="extra-large" />
                </Flexbox>
                <Flexbox column justifyContent="center" alignContent="center" p={40}>
                    <Title children="Large" style={{ paddingBottom: "1rem" }} />
                    <Checkbox label='Check me' style={{ paddingBottom: '.5rem' }} size="large" />
                    <Checkbox label='Check me' radio={true} style={{ paddingBottom: '.5rem' }} size="large" />
                </Flexbox>
                <Flexbox column justifyContent="center" alignContent="center" p={40}>
                    <Title children="Default" style={{ paddingBottom: "1rem" }} />
                    <Checkbox label='Check me' style={{ paddingBottom: '.5rem' }} size="default" />
                    <Checkbox label='Check me' radio={true} style={{ paddingBottom: '.5rem' }} size="default" />
                </Flexbox>
                <Flexbox column justifyContent="center" alignContent="center" p={40}>
                    <Title children="Small" style={{ paddingBottom: "1rem" }} />
                    <Checkbox label='Check me' style={{ paddingBottom: '.5rem' }} size="small" />
                    <Checkbox label='Check me' radio={true} style={{ paddingBottom: '.5rem' }} size="small" />
                </Flexbox>
            </Flexbox>

        )
    }
}