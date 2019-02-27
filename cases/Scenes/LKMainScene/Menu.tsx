/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import { Menu } from '../../../src';
import { LiquidDrop } from '../../../src/extra';

const Menu$ = () => {
    const [active, onClick] = useState(0);
    const items = [
        { text: "Счет", value: 'ls' },
        { text: "История", value: 'hist' },
        { text: "Настройки", value: 'suppliers' },
        { text: "Поддержка", value: 'support' }
    ]
    return (
        <Menu
            items={items}
            value='ls'
            tools={
                <LiquidDrop
                    css={css({ top: '180px', left: '28px', zIndex: 9999 })}
                    data={[
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
                    ]}
                />
            }
            forElka={true}
        />
    )
}


export default Menu$;