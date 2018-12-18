import React, { Fragment, useRef } from 'react';
import { Buddy, Flexbox, Button, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default (props) => {

    let buddy: any = useRef(null);

    return (
        <Viewport>
            <Flexbox p={40} flex={1}>
                <Flexbox pb={20} pt={20} justifyContent="center" flex={1}>
                    <Flexbox column>
                        <Button style={{ margin: 5 }} decoration="green" onClick={() => buddy.current.makeHappy()} label="ref.makeHappy()" />
                        <Button style={{ margin: 5 }} decoration="red" onClick={() => buddy.current.makeSad()} label="ref.makeSad()" />
                        <Button style={{ margin: 5 }} decoration="highlight" onClick={() => buddy.current.makeNormal()} label="ref.makeNormal()" />
                        <Button style={{ margin: 5 }} decoration="orange" onClick={() => buddy.current.makeJumpy()} label="ref.makeJumpy()" />
                    </Flexbox>
                    <Flexbox flex={1} justifyContent="center" alignItems="center">
                        <Buddy size={4} defaultFace='normal' ref={buddy} />
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Viewport>
    )
}