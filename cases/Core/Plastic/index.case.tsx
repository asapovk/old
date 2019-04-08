import React, { useState, Fragment } from 'react';
import { Plastic, PlasticStack, Flexbox, Title } from '../../../src';

export default () => {
    const [current, setCurrent] = useState(0);

    return (
        <Flexbox justifyContent="flex-start" p={40}>
            <Flexbox flexDirection='column' pr={40}>
                <Title>EMPTY</Title>
                <Flexbox pb={20} pt={20}>
                    <PlasticStack
                        defaultValue={1}
                        cards={[]}
                        onChange={(index: number) => { }}
                    />
                </Flexbox>
            </Flexbox>
            <Flexbox flexDirection='column' pr={40}>
                <Title>PLASTIC</Title>
                <Flexbox pb={20} pt={20}>
                    <Plastic
                        active={current === 0}
                        pan="4611 0000 0000 4031"
                        type="VISA"
                        onClick={() => setCurrent(0)}
                    />
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection='column'>
                <Title>STACK</Title>
                <Flexbox pb={20} pt={20}>
                    <PlasticStack
                        defaultValue={1}
                        cards={[{
                            pan: "4611 0000 0000 1234",
                            type: "MASTERCARD",
                            background: "#333",
                            color: "#fff",
                        }, {
                            pan: "4611 0000 0000 4444",
                            type: "VISA",
                            background: "red",
                            color: "#fff",
                        }, {
                            pan: "4611 0000 0000 0433",
                            type: "MAESTRO",
                            background: "green",
                            color: "#fff",
                        }, {
                            pan: "4611 0000 0000 2203",
                            type: "MIR"
                        }]}
                        onChange={(index: number) => { }}
                    />
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
}