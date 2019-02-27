import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import ModalTypes from './types';
import ModalOverlay from './ModalOverlay';
import ModalWindow from './ModalWindow';
export default class Modal extends React.Component<ModalTypes.Props> {

    overlay: any;
    window: any;

    state = {
        visible: false,
        customContent: null,
        center: false,
    }

    constructor(props: ModalTypes.Props) {
        super(props);
        this.setVetricalCenter = this.setVetricalCenter.bind(this);
    }

    private setVisible(visible: boolean) {
        this.setState({ visible });
    }
    /**
     * Open
     */
    public open(customContent?: React.Component | any) {
        if (customContent) {
            this.setState({ customContent })
        }

        this.props.onOpen && this.props.onOpen();

        setTimeout(_ => {
            this.setVisible(true);
            this.setVetricalCenter();
            window.addEventListener('resize', this.setVetricalCenter);

            this.props.didOpen && this.props.didOpen();
        }, 50);
    }

    public close(onClose?: () => void) {
        this.setVisible(false);

        onClose && onClose();
    }

    private setVetricalCenter() {
        const overlay = ReactDOM.findDOMNode(this.overlay) as any;
        const window = ReactDOM.findDOMNode(this.window) as any;

        if (!overlay || !window) return;

        let windowHeight = 0;

        windowHeight = window.offsetHeight;

        const overlayHeight = overlay.offsetHeight;

        if (windowHeight > overlayHeight) {
            if (!this.state.center) return;
            this.setState({
                center: false
            });
        } else {
            if (this.state.center) return;
            this.setState({
                center: true
            });
        }
    }

    public updateLayout() {
        this.setVetricalCenter();
    }

    render() {
        const { title, subtitle, hideHeader } = this.props;
        const { visible, customContent } = this.state;

        return (
            <Fragment>
                <ModalOverlay visible={visible} center={this.state.center} ref={ref => this.overlay = ref}>
                    <ModalWindow
                        ref={ref => this.window = ref}
                        visible={visible}
                        title={title}
                        subtitle={subtitle}
                        hideHeader={hideHeader}
                        onClosePressed={() => this.close()}
                        children={customContent !== null ? customContent : this.props.children}
                    />
                </ModalOverlay>
            </Fragment>
        )
    }
}