/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { Fragment, useState } from 'react';
import { Timeline, D1, D3, C1, Flexbox, HR, Button, Icon } from '../../../src';
import { Section } from './components';
import { useTheme } from '../../../src/hooks';

const MainTop = () => {

    const dots = [
        { color: "black", bottomTitle: "Итого к оплате", value: "4738,11" },
        { color: "black", bottomTitle: "Задолженность", value: "8491,24" },
        { color: "black", bottomTitle: "Аванс", value: "0" },
        { color: "black", bottomTitle: "Начислено", value: "1256,82" },
        { color: "black", bottomTitle: "Оплачено", value: "5010,17" }
    ]

    const [open, setOpen] = useState(false);

    const theme = useTheme().theme;

    return (
        <Flexbox mt='2.5rem' flexDirection='column'>
            <D1
                underline={true}
                children='Ноябрь 2018'
                action={<C1 link>Выбрать месяц</C1>}
            />
            <Section
                bar={
                    <Fragment>
                        <Button
                            label='Оплатить'
                            decoration='highlight'
                            key={1}
                            css={css({ marginBottom: '1.25rem' })}
                        />
                        <Button
                            label='Передать показания'
                            decoration='outline'
                            key={2}
                            css={css({ marginBottom: '2.5rem' })}
                        />
                    </Fragment>
                }
                children={
                    <Fragment>
                        <Flexbox
                            css={css({
                                overflow: 'hidden',
                                height: '100%',
                                flex: 1
                            })}
                            flex={1}
                            onClick={() => setOpen(!open)}
                        >
                            <Flexbox
                                css={css(
                                    !open && {
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        flex: 1
                                    },
                                    {
                                        marginBottom: '2.5rem'
                                    })}
                                flexDirection='column'
                                flex={1}
                                children={dots.map((dot, index) => (
                                    <Flexbox alignItems='flex-end' mb='1rem' flex={1} key={index}>
                                        <C1 css={css({ flexShrink: 0 })}>{dot.bottomTitle}</C1>
                                        <HR dotted color='text' css={css({ margin: '0.25rem 0.5rem' })} />
                                        {index === 0
                                            ? <D3 format='rub' color='highlight'>{dot.value}</D3>
                                            : <C1 format='rub'>{dot.value}</C1>
                                        }
                                    </Flexbox>
                                ))}
                            />
                            {!open &&
                                <Flexbox
                                    css={css({
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        bottom: 0,
                                        background: `linear-gradient(180deg, ${theme.background2.rgba(.1)} 0%, ${theme.background2.rgba(.99)} 100%)`
                                    })}
                                />}
                        </Flexbox>
                        <Flexbox
                            css={css({
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                left: 0,
                                marginBottom: '-1rem',
                                zIndex: 5,
                                fontSize: '2rem',
                                color: theme.highlight.rgb,
                                cursor: 'pointer'
                            })}
                            justifyContent='center'
                            onClick={() => setOpen(!open)}
                            children={<Icon type={open ? 'up' : 'down'} />}
                        />
                    </Fragment>
                }
                css={css({
                    marginTop: '2rem'
                })}
            />
            {/* <Timeline
                dots={dots}
                leftTitle="10 октября"
                rightTitle="10 ноября"
                css={css({ marginTop: '2.5rem' })}
            /> */}
        </Flexbox>
    )
}


export default MainTop;