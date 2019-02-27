import React, { useState } from 'react';
import { LiquidDrop } from '../../../src/extra'
import { Flexbox, Button, D1 } from '../../../src';

const sampleData: any = [
    { title: "Message from John", message: "The Morrison Co.'s freighter in Darling Harbour, having in tow the battled, W.", active: true },
    { title: "Coordinates", message: "Longitude 152° 17', with one living and one dead man aboard.", active: true },
    { title: "News", message: "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.", active: false },
    { title: "News", message: "CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.", active: false },
    { title: "News", message: "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.", active: false },
    { title: "News", message: "CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.", active: false },
    { title: "News", message: "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.", active: false },
    { title: "News", message: "CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.", active: false },
    { title: "News", message: "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.", active: false },
    { title: "News", message: "CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.", active: false },
    { title: "News", message: "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.", active: false },
    { title: "News", message: "CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.", active: false },
    { title: "News", message: "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.", active: false },
    { title: "News", message: "CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.", active: false },
    { title: "News", message: "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.", active: false },
    { title: "News", message: "CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.", active: false },
    { title: "News", message: "We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.", active: false },
    { title: "News", message: "CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events.", active: false },
];

export default class Story extends React.Component {
    state = {
        data: []
    }
    render() {
        return (
            <Flexbox justifyContent="space-between" p={40}>
                <Flexbox flexDirection='column'>
                    <D1 mb='1rem'>LiquidDrop</D1>
                    <Flexbox pb={20}>
                        <Button onClick={() => this.setState({ data: this.state.data.length ? [] : sampleData })}>{this.state.data.length ? 'Without' : 'With'} data</Button>
                    </Flexbox>
                </Flexbox>
                <Flexbox pb={20}>
                    <LiquidDrop data={this.state.data} />
                </Flexbox>
            </Flexbox>
        )
    }
}