import React, { Fragment } from 'react';
import { Action, Button, Flexbox } from '../../src';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox justifyContent="center" alignContent="center" p={40}>
                <Flexbox p={10}>
                    <Flexbox column p={10} style={{ border: "1px solid #555" }}>
                        <pre>
                            {`Action.alert({
    title: "Test", 
    text: "some text"
})`}
                        </pre>
                        <hr />
                        <Button
                            onClick={() => Action.alert({
                                title: "Test",
                                text: "some text"
                            })}
                            children="Test" />
                    </Flexbox>
                </Flexbox>

            </Flexbox>
        )
    }
}