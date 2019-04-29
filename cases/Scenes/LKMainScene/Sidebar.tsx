/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { Card, Flexbox, Icon } from '../../../src';
import { useBrowser } from '../../../src/hooks';
import createStyles from './styles';

const Sidebar = (props: any) => {

    const browser = useBrowser();
    const styles = createStyles();

    const accounts = [
        { label: '1000001433', value: 1 },
        { label: '1000001459', value: 2 },
        // { label: '95285-F', value: 3 },
        // { label: '95285-F', value: 4 },
        // { label: '95285-F', value: 5 },
        // { label: '95285-F', value: 3 }
    ];

    const [activeID, setActiveID] = useState(0);

    return (
        <Flexbox flexDirection='column' justifyContent='flex-start'>
            {accounts.map((account, index) =>
                <Flexbox alignItems='center' css={css({ marginBottom: '1.25rem' })} key={'card-' + index}>
                    <Flexbox
                        alignItems='center'
                        css={css({ ...styles.card.active }, { left: activeID === index ? '-1.5rem' : '-8rem' })}>
                        <Icon type='right' />
                    </Flexbox>
                    <Card
                        animation={index % 2 ? 'circles' : 'waves'}
                        active={!browser.isMobile && activeID === index}
                        onClick={() => {
                            setActiveID(index);
                            props.setOpen(false)
                        }}
                    />
                </Flexbox>
            )}
        </Flexbox>
    )
}

export default Sidebar;