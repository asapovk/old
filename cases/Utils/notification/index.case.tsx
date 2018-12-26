import React from 'react';
import { utils, Button, Flexbox } from '../../../src';
import '../../../src/Styles/scss/main.scss';

let counter = 0;
export default class Story extends React.Component {
    render() {

        return (
            <Flexbox justifyContent="center" alignContent="center" p={40}>
                <Flexbox p={10}>
                    <Flexbox column p={10} style={{ border: "1px solid #555" }}>
                        <pre>
                            {`utils.notification({
    title: "Counter ${++counter}", 
    text: "This is counter number ${counter} if we'll multiply it by 4 we'll get ${counter-- * 4}"
})`}
                        </pre>
                        <hr />
                        <Button
                            onClick={() => utils.notification({
                                title: `Counter ${++counter}`,
                                text: `This is counter number ${counter} if we'll multiply it by 4 we'll get ${counter * 4}`,
                                timeout: 30
                            })}
                            children="Test" />
                    </Flexbox>
                </Flexbox>

            </Flexbox>
        )
    }
}