import React, { useRef } from 'react';
import { Button, Flexbox, Modal, SimpleModal } from '../../../src';
import { Handles } from '../../../src/core/SimpleModal/Modal'
import '../../../src/styles/scss/main.scss';

export default (props) => {
    const modal = useRef<Modal>(null);
    const simpleModal = useRef<Handles>(null);

    return (

        <Flexbox alignContent="center" justifyContent="center">
            <Modal title="Модальное окно" subtitle={"Нажмите close"} ref={modal}>
                <Flexbox justifyContent="center">
                    <Button onClick={() => modal.current!.close()}>Close</Button>
                </Flexbox>
            </Modal>
            <Button onClick={() => modal.current!.open()}>Open Modal</Button>
            <Button
                onClick={() => {
                    simpleModal.current!.open(<h1>hello</h1>);
                }}
            >
                Open Simple Modal (without styles)
            </Button>
            <SimpleModal ref={simpleModal} />
        </Flexbox>

    )
}