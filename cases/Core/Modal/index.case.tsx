import React, { useRef } from 'react';
import { Button, Flexbox, Modal, D1 } from '../../../src';

export default () => {
    const modal = useRef<Modal>(null);
    const modal2 = useRef<Modal>(null);

    return (
        <Flexbox justifyContent="flex-start" p={40}>
            <Modal style={{ width: '40rem' }} title="Модальное окно" subtitle={"Нажмите крестик"} ref={modal}>
                <Flexbox justifyContent="center">
                    {/* <div>It real sent your at. Amounted all shy set why followed declared. Repeated of endeavor mr position kindness offering ignorant so up. Simplicity are melancholy preference considered saw companions. Disposal on outweigh do speedily in on. Him ham although thoughts entirely drawings. Acceptance unreserved old admiration projection nay yet him. Lasted am so before on esteem vanity oh. */}
                    {/*  */}
                    {/* Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance. </div> */}
                </Flexbox>
            </Modal>
            <Modal ref={modal2} hideHeader />
            <Flexbox flexDirection='column'>
                <D1 mb='1rem'>Modal</D1>
                <Flexbox pb={20}>
                    <Button decoration="highlight" onClick={() => modal.current!.open()}>Open up</Button>
                </Flexbox>
            </Flexbox>
            <Flexbox flexDirection='column' pl={40}>
                <D1 mb='1rem'>Without header</D1>
                <Flexbox pb={20}>
                    <Button
                        decoration="highlight"
                        onClick={() => modal2.current!.open(

                            <Flexbox alignItems="center" alignContent="center">
                                <span>Hi 👋🏻, <span style={{ cursor: 'pointer' }} onClick={() => modal2.current!.close()}>Close me</span></span>
                            </Flexbox>

                        )}
                        children="Open up"
                    />
                </Flexbox>
            </Flexbox>
        </Flexbox>
    )
}