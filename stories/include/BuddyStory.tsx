import React, { Fragment, useRef } from 'react';
import { Buddy, Flexbox, Button } from '../../src';

export default (props) => {

    const childRef = useRef(null);
    //@ts-ignore
    const goRef = () => childRef.current.jumpy();

    return (
        <Flexbox p={40} mt={-40} flex={1}>
            <Flexbox pb={20} pt={20} justifyContent="center" flex={1}>
                <Flexbox column>
                    {/* <Button style={{ margin: 5 }} decoration="green" onClick={() => this.buddy.makeHappy()} label="ref.makeHappy()" />
                    <Button style={{ margin: 5 }} decoration="red" onClick={() => this.buddy.makeSad()} label="ref.makeSad()" />
                    <Button style={{ margin: 5 }} decoration="highlight" onClick={() => this.buddy.makeNormal()} label="ref.makeNormal()" /> */}
                    <Button style={{ margin: 5 }} decoration="orange" onClick={() => goRef()} label="ref.makeJumpy()" />
                </Flexbox>
                <Flexbox flex={1} justifyContent="center" alignItems="center">
                    <Buddy size={4} ref={childRef} />
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
}