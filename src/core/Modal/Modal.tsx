import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import ModalTypes from './types';
import ModalPortal from './ModalPortal';
import ModalOverlay from './ModalOverlay';
import ModalWindow from './ModalWindow';

export default class Modal extends React.Component<ModalTypes.Props> {

    portalContainer: any;
    overlay: any;
    window: any;

    state = {
        active: false,
        visible: false,
        customContent: null,
        center: false,
    }

    constructor(props: ModalTypes.Props) {
        super(props);
        this.setVetricalCenter = this.setVetricalCenter.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.setVetricalCenter);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.setVetricalCenter);
    }

    private setActive(active: boolean) {
        this.setState({ active });
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

        this.setActive(true);

        setTimeout(() => {
            this.setVetricalCenter();
            this.setVisible(true);

            this.props.didOpen && this.props.didOpen();
        });
    }

    public close(didClose?: () => void) {
        this.setVisible(false);

        setTimeout(() => {
            this.setActive(false);
            this.props.didClose && this.props.didClose();
            didClose && didClose();
        }, 500);

        this.props.onClose && this.props.onClose();
    }

    private setVetricalCenter() {
        const overlay = ReactDOM.findDOMNode(this.overlay) as any;
        const modal = ReactDOM.findDOMNode(this.window) as any;

        if (!overlay || !modal) return;

        const modalWidth = modal.offsetWidth;
        const modalHeight = modal.offsetHeight;
        const overlayHeight = overlay.offsetHeight;

        if (modalHeight > overlayHeight || modalWidth >= window.innerWidth) {
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
        const { title, subtitle, hideHeader, style } = this.props;
        const { active, visible, customContent } = this.state;

        if (!active) {
            return null;
        }
        return (
            <ModalPortal>
                <ModalOverlay visible={visible} center={this.state.center} ref={ref => this.overlay = ref}>
                    <ModalWindow
                        ref={ref => this.window = ref}
                        visible={visible}
                        center={this.state.center}
                        title={title}
                        style={style}
                        subtitle={subtitle}
                        hideHeader={hideHeader}
                        onClosePressed={() => this.close()}
                        children={customContent !== null ? customContent : this.props.children}
                    />
                </ModalOverlay>
            </ModalPortal>
        )
    }
}