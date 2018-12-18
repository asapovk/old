import React, { Fragment } from 'react';
import { Button, Flexbox, Modal } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {
    modal?: any = null;

    render() {
        return (
            <Flexbox alignContent="center" justifyContent="center">
                <Modal title="Модальное окно" subtitle={"Нажмите close"} ref={ref => this.modal = ref}>
                    <Flexbox justifyContent="center">
                        <Button onClick={() => this.modal.close()}>Close</Button>
                    </Flexbox>
                </Modal>
                <Button onClick={() => this.modal.open()}>Open</Button>
            </Flexbox>
        )
    }
}