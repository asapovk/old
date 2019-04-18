/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { Flexbox, TextField, Title } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default () => {
    const [value, setValue] = useState('1233123');

    return (
        <Flexbox alignContent="center" column justifyContent='center' p={40}>
            <Flexbox mb='2rem'>
                <Flexbox column flex={1} mr='2rem'>
                    <Title children='Small Fields' />
                    <Flexbox mt='1rem' mb='1rem'>
                        <TextField
                            size='small'
                            label='Just input'
                            placeholder="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='small'
                            decoration='borderBottom'
                            placeholder="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='small'
                            decoration='borderless'
                            placeholder="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='small'
                            decoration='none'
                            placeholder="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='small'
                            placeholder="Textfield with icons"
                            leftIcon='add'
                            loading={true}
                        />
                    </Flexbox>
                </Flexbox>
                <Flexbox column flex={1}>
                    <Title children='Normal Fields' />
                    <Flexbox mt='1rem' mb='1rem'>
                        <TextField
                            label='Just input'
                            placeholder="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            decoration='borderBottom'
                            placeholder="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            decoration='borderless'
                            placeholder="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            decoration='none'
                            placeholder="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            placeholder="Textfield with icons"
                            leftIcon='add'
                            loading={true}
                        />
                    </Flexbox>
                </Flexbox>
            </Flexbox>

            <Flexbox>
                <Flexbox column flex={1} mr='2rem'>
                    <Title children='Large Fields' />
                    <Flexbox mt='1rem' mb='1rem'>
                        <TextField
                            size='large'
                            label='Just input'
                            placeholder="Enter something"
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            size='large'
                            label='Just input'
                            floatingLabel="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='large'
                            decoration='borderBottom'
                            placeholder="Enter something"
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            size='large'
                            decoration='borderBottom'
                            floatingLabel="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='large'
                            decoration='borderless'
                            placeholder="Enter something"
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            size='large'
                            decoration='borderless'
                            floatingLabel="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='large'
                            decoration='none'
                            placeholder="Enter something"
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            size='large'
                            decoration='none'
                            floatingLabel="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='large'
                            placeholder="Enter something"
                            leftIcon='add'
                            loading={true}
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            size='large'
                            floatingLabel="Enter something"
                            leftIcon='add'
                            loading={true}
                        />
                    </Flexbox>
                </Flexbox>
                <Flexbox column flex={1}>
                    <Title children='Extra Large Fields' />
                    <Flexbox mt='1rem' mb='1rem'>
                        <TextField
                            size='extra-large'
                            label='Just input'
                            placeholder="Enter something"
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            label='Just input'
                            size='extra-large'
                            floatingLabel="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='extra-large'
                            decoration='borderBottom'
                            placeholder="Enter something"
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            size='extra-large'
                            decoration='borderBottom'
                            floatingLabel="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='extra-large'
                            decoration='borderless'
                            placeholder="Enter something"
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            size='extra-large'
                            decoration='borderless'
                            floatingLabel="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='extra-large'
                            decoration='none'
                            placeholder="Enter something"
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            size='extra-large'
                            decoration='none'
                            floatingLabel="Enter something"
                        />
                    </Flexbox>
                    <Flexbox mb='1rem'>
                        <TextField
                            size='extra-large'
                            placeholder="Enter something"
                            leftIcon='add'
                            loading={true}
                        />
                        <TextField
                            css={css({ marginLeft: '1rem' })}
                            size='extra-large'
                            floatingLabel="Enter something"
                            leftIcon='add'
                            loading={true}
                        />
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
}


{/* <Flexbox pb={40}>
                    <TextField leftIcon="add" label='Just input email' placeholder="Enter your email, please" style={{ flexBasis: '90px' }} validate={[{ regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }]} onError={(value) => console.log(value)} />
                </Flexbox> */}