import React from 'react';
import { Modal, Button, Flexbox, Viewport } from '../';

export interface AlertOptions {
    title: string
    text: string
    onClose?: () => void
}

interface AlertProps {
    onAlertClose
}

class Alert extends React.Component<AlertProps & AlertOptions> {
    modal: Modal | null
    componentDidMount() {
        this.modal && this.modal.open();
    }
    render() {
        return (
            <Modal ref={ref => this.modal = ref} title={this.props.title}>
                <Flexbox column justifyContent="flex-end">
                    <Flexbox mt={-5} mb={10}>{this.props.text}</Flexbox>
                    <Flexbox justifyContent="flex-end">
                        <Button
                            onClick={() => this.modal && this.modal.close(this.props.onAlertClose)}
                            children="Закрыть"
                        />
                    </Flexbox>
                </Flexbox>
            </Modal>
        )
    }
}
export default (options: AlertOptions) => {
    //@ts-ignore
    const viewport = document.__uiviewport as Viewport;

    if (!viewport) {
        throw ("No viewport was found, that needed for Action.alert() render");
    }

    const index = viewport.mountAction(<Alert {...options} onAlertClose={() => {
        if (options.onClose) {
            options.onClose();
        }
        viewport.unmountAction(index);
    }} />);
}