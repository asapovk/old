import React, { useRef } from 'react';
import { Button, Flexbox, Modal } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default () => {
    const modal = useRef<Modal>(null);
    const modal2 = useRef<Modal>(null);

    return (

        <Flexbox alignContent="center" justifyContent="center">
            <Modal title="Модальное окно" subtitle={"Нажмите крестик"} ref={modal}>
                <Flexbox justifyContent="center">
                    <div>It real sent your at. Amounted all shy set why followed declared. Repeated of endeavor mr position kindness offering ignorant so up. Simplicity are melancholy preference considered saw companions. Disposal on outweigh do speedily in on. Him ham although thoughts entirely drawings. Acceptance unreserved old admiration projection nay yet him. Lasted am so before on esteem vanity oh.

Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance. </div>
                    <Button onClick={() => modal.current!.close()}>Close window</Button>
                </Flexbox>
            </Modal>
            <Button onClick={() => modal.current!.open()}>Open Modal</Button>
            <Button
                onClick={() => {
                    modal2.current!.open(<span>hello, <span onClick={() => modal2.current!.close()}>fuckoff</span></span>);
                }}
            >
                Open Simple Modal (without styles)
            </Button>
            <Modal ref={modal2} hideHeader />
        </Flexbox>

    )
}