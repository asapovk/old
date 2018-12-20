import React, { useState } from 'react';
import useBrowser from '../../../src/hooks/useBrowser';
import { Card } from '../../../src';

const SideMenu = (props: any) => {
    const accounts = [
        { label: "1000001433", value: 1 },
        { label: "1000001459", value: 2 },
        { label: "95285-F", value: 3 }
    ];
    const [card, setCard] = useState(0);
    const [account, setAccount] = useState(2 as number | string);
    const browser = useBrowser();

    return (
        <>
            {browser.isDesktop && <div style={{ padding: '20px 0 40px 0', width: `${props.logoWidth}rem`, margin: '0 auto' }}>{props.logo}</div>}
            {accounts.map((account, index) => <Card
                animation={index % 2 ? "circles" : "waves"}
                active={card === index}
                onClick={() => setCard(index)}
            />)}
        </>
    )
}

export default SideMenu;