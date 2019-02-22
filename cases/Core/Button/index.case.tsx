import React, { Fragment } from 'react';
import { Button, Flexbox, D1 } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox justifyContent="space-between" p={40}>

                <Flexbox flexDirection='column'>
                    <D1 mb='1rem'>Sizing</D1>
                    <Flexbox pb={20}>
                        <Button size="small">Small</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button>Default</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button size="large">Large</Button>
                    </Flexbox>
                </Flexbox>

                <Flexbox flexDirection='column'>
                    <D1 mb='1rem'>Decoration</D1>
                    <Flexbox pb={20}>
                        <Button decoration='outline'>Outline</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button decoration='inverse'>Inverse</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button decoration="none">Without decoration</Button>
                    </Flexbox>
                </Flexbox>

                <Flexbox flexDirection='column'>
                    <D1 mb='1rem'>Label</D1>
                    <Flexbox pb={20}>
                        <Button labelCase='uppercase'>Label uppercase</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button labelWight='normal'>Label normal weight</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button labelSize="small">Label small size</Button>
                    </Flexbox>
                </Flexbox>

                <Flexbox flexDirection='column'>
                    <D1 mb='1rem'>Colors</D1>
                    <Flexbox pb={20}>
                        <Button color='highlight'>Highlight</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button color='red'>Accent red</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button color='green'>Accent green</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button color='blue' decoration='inverse'>Accent blue</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button color='orange' decoration='outline'>Accent orange</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button color='grayscale'>Grayscale</Button>
                    </Flexbox>
                </Flexbox>

                <Flexbox flexDirection='column'>
                    <D1 mb='1rem'>Modified</D1>
                    <Flexbox pb={20}>
                        <Button loading>Loading</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button disabled>Disabled</Button>
                    </Flexbox>
                </Flexbox>

            </Flexbox>
        )
    }
}