import React, { Fragment } from 'react';
import { utils, Button, Flexbox, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (
            <Viewport>
                <Flexbox justifyContent="center" alignContent="center" p={40}>
                    <Flexbox p={10}>
                        <Flexbox column p={10} style={{ border: "1px solid #555" }}>
                            Just get theme object
                    </Flexbox>
                    </Flexbox>

                </Flexbox>
            </Viewport>
        )
    }
}