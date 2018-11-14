import React, { Fragment } from 'react';
import { Buddy, Flexbox, Button } from '../../src';

export default class Story extends React.Component {
    buddy: Buddy
    render() {
        return (
            <Flexbox p={40} mt={-40} flex={1}>
                <Flexbox pb={20} pt={20} justifyContent="center" flex={1}>
                    <Flexbox column>
                        <Button style={{ margin: 5 }} decoration="green" onClick={() => this.buddy.makeHappy()} label="ref.makeHappy()" />
                        <Button style={{ margin: 5 }} decoration="red" onClick={() => this.buddy.makeSad()} label="ref.makeSad()" />
                        <Button style={{ margin: 5 }} decoration="highlight" onClick={() => this.buddy.makeNormal()} label="ref.makeNormal()" />
                        <Button style={{ margin: 5 }} decoration="orange" onClick={() => this.buddy.makeJumpy()} label="ref.makeJumpy()" />
                    </Flexbox>
                    <Flexbox flex={1} justifyContent="center" alignItems="center">
                        <Buddy size={4} defaultFace="happy" ref={ref => this.buddy = ref as Buddy} />
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        )
    }
}