import React from 'react';
import { LiquidDrop } from '../../../src/extra'
import { Flexbox } from '../../../src';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox p={1} pt={80} justifyContent="flex-end" alignContent="center" alignItems="center">
                <LiquidDrop data={[
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
                ]} />
            </Flexbox>
        )
    }
}