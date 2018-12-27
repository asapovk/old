import React, { Fragment } from 'react';
import { Button, Flexbox, Title } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox justifyContent="space-between" p={40}>
                <Flexbox flexDirection='column'>
                    <Title>Normal</Title>
                    <Flexbox pb={20} pt={20}>
                        <Button>Simple button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button decoration='grayscale' onClick={() => console.log(1)}>Highlight button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button decoration='highlight' disabled onClick={() => console.log(2)}>Highlight button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button decoration='highlight' loading onClick={() => console.log(3)}>Highlight button</Button>
                    </Flexbox>
                </Flexbox>
                <Flexbox flexDirection='column'>
                    <Title>Sizing</Title>
                    <Flexbox pb={20} pt={20}>
                        <Button decoration='highlight'>Default button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button size="large" decoration='highlight'>Large button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button size="small" decoration='highlight'>Small button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button size="small" decoration='highlight' inversion>Small button</Button>
                    </Flexbox>
                </Flexbox>
                <Flexbox flexDirection='column'>
                    <Title>Accents</Title>
                    <Flexbox pb={20} pt={20}>
                        <Button decoration='red'>Accent red button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button decoration='green'>Accent green button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button decoration='blue'>Accent blue button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button decoration='orange'>Accent orange button</Button>
                    </Flexbox>
                </Flexbox>
                <Flexbox flexDirection='column'>
                    <Title>Modified</Title>
                    <Flexbox pb={20} pt={20}>
                        <Button decoration="none">Without decoration button</Button>
                    </Flexbox>
                    <Flexbox pb={20}>
                        <Button loading>Loading button</Button>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        )
    }
}