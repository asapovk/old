/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState, useEffect, useRef } from 'react';
import { Card, Flexbox, Stories, Button } from '../../../src';
import createStyles from './styles';

const Sidebar = (props: any) => {

    const accounts = [
        { label: '1000001433', value: 1 },
        { label: '1000001459', value: 2 },
        { label: '95285-F', value: 3 },
        { label: '95285-F', value: 3 },
        { label: '95285-F', value: 3 },
        { label: '95285-F', value: 3 }
    ];

    const [activeID, setActiveID] = useState(0);

    return (
        <Flexbox flexDirection='column'>
            {accounts.map((account, index) =>
                <Card
                    animation={index % 2 ? 'circles' : 'waves'}
                    active={activeID === index}
                    onClick={() => {
                        setActiveID(index)
                    }}
                    key={index}
                    css={css({
                        margin: '0 1.25rem 1.25rem 1.25rem',
                        zIndex: 0
                    },
                        activeID === index && {
                            margin: '0 0.625rem 1.25rem 0.625rem',
                            position: 'sticky',
                            top: 136,
                            bottom: 10,
                            zIndex: 4
                        })}
                />
            )}
            <Button
                label='Изменить лицевые счета'
                css={css({
                    margin: '0 1.25rem 1.25rem 1.25rem'
                })}
                decoration='inverse'
                size='large'
                thin={true}
            />
        </Flexbox>
    )
}

export default Sidebar;