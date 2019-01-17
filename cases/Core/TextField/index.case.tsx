import React, { useState } from 'react';
import { TextField, Flexbox, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default () => {
    const [value, setValue] = useState('');

    return (
        <Flexbox alignContent="center" justifyContent='center' p={40}>
            <Flexbox column flexBasis='640px'>
                <Flexbox pb={40}>
                    <TextField label='Just input' placeholder="Enter something" value={value} onChange={(event) => setValue(event.target.value)} />
                </Flexbox>
                <Flexbox pb={40} flexBasis='180px'>
                    <TextField multiline={true} label='Textarea' placeholder="You can place a lot of text here" />
                </Flexbox>
                <hr style={{ width: '100%', border: '1px solid', marginBottom: '40px' }} />
                <Flexbox pb={40}>
                    <TextField leftIcon="add" label='With amazing icons' placeholder="Yaaaaaaaaaaaay" rightIcon="clock" />
                </Flexbox>
                <Flexbox pb={40}>
                    <TextField disabled label='Disabled' placeholder="You can't change this. Ha-ha" />
                </Flexbox>
                <Flexbox pb={40}>
                    <TextField loading label='Loading' placeholder="Whait a minute..." />
                </Flexbox>
                <Flexbox pb={40}>
                    <TextField type='password' label='Password' placeholder="Enter password" />
                </Flexbox>
                <Flexbox pb={40}>
                    <TextField type='number' label='Number' placeholder="Write some numbers" />
                </Flexbox>
                <Flexbox pb={40}>
                    <TextField multiline={true} singlerow={true} label='Singlerow textarea' placeholder="This is for long string wrap" />
                </Flexbox>
                <hr style={{ width: '100%', border: '1px solid', marginBottom: '40px' }} />
                <Flexbox pb={40}>
                    <TextField decoration='none' placeholder="Without decoration" />
                </Flexbox>
                <Flexbox pb={40}>
                    <TextField decoration='borderless' label='Without border' placeholder="Enter something" />
                </Flexbox>
                <Flexbox pb={40}>
                    <TextField size='small' label='Small field' placeholder="Write secret here" />
                </Flexbox>
                <Flexbox pb={40}>
                    <TextField size='large' label='Large field' placeholder="Really big" />
                </Flexbox>
            </Flexbox>
        </Flexbox>

    )
}


{/* <Flexbox pb={40}>
                    <TextField leftIcon="add" label='Just input email' placeholder="Enter your email, please" style={{ flexBasis: '90px' }} validate={[{ regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }]} onError={(value) => console.log(value)} />
                </Flexbox> */}