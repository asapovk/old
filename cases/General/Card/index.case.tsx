import React, { Fragment, useState } from 'react';
import { Flexbox } from '../../../src/Flexbox';
import { Card, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default () => {
    const [active, setActive] = useState(0);

    return (
        <Viewport>
            <div style={{ padding: 20, width: 320 }}>
                <div>
                    <Card
                        animation="waves"
                        active={active === 0}
                        onClick={() => {
                            setActive(0);
                        }}
                    />
                </div>
                <div>
                    <Card
                        animation="circles"
                        active={active === 1}
                        onClick={() => {
                            setActive(1);
                        }}
                    />
                </div>
                <div>
                    <Card
                        animation="waves"
                        active={active === 2}
                        onClick={() => {
                            setActive(2);
                        }}
                    />
                </div>
            </div>
        </Viewport>
    )
}