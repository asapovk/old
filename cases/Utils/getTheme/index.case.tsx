import React from 'react';
import { Flexbox } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox justifyContent="center" alignContent="center" p={40}>
                <Flexbox p={10}>
                    <Flexbox column p={10} style={{ border: "1px solid #555" }}>
                        Just get theme object
                    </Flexbox>
                </Flexbox>

            </Flexbox>
        )
    }
}