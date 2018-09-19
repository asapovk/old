import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { Portal } from 'react-portal';
import { Spinner } from '../Spinner';
import ModalMask from './ModalMask';
import ModalView from './ModalView';

interface Props {
    onClose?: () => void
    didClose?: () => void
    onOpen?: () => void
    didOpen?: () => void
    loading?: boolean
    center?: boolean
    style?: CSSProperties
    title?: string
    subtitle?: string
    children?: any
}

interface Modal {
    visible: boolean
    view: any
    modal: any
}

class Modal extends React.Component<Props> {

    static defaultProps = {
        onClose: _ => { },
        didClose: _ => { },
        onOpen: _ => { },
        didOpen: _ => { },
    }

    state = {
        active: false,
        visible: false,
        hidding: false,
        center: true,
        loading: false,
        style: null,
    }
    constructor(props) {
        super(props);
        this.setVetricalCenter = this.setVetricalCenter.bind(this);
    }

    private setActive(active) {
        this.setState({ active, hidding: false });
    }

    private setBodyScroll(scroll = true) {
        document.body.style.overflow = scroll ? "auto" : 'hidden';
    }
    private setVetricalCenter() {
        const view = ReactDOM.findDOMNode(this.view) as any;
        const modal = ReactDOM.findDOMNode(this.modal) as any;

        if (!view || !modal) return;

        let modalHeight = 0;

        modalHeight = modal.offsetHeight;

        const viewHeight = view.offsetHeight;
        if (modalHeight > viewHeight) {

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

    updateLayout() {
        this.setVetricalCenter();
    }

    open() {
        this.setActive(true);
        this.setBodyScroll(false);
        this.props.onOpen && this.props.onOpen();

        setTimeout(_ => {
            this.setState({
                visible: true
            });
            this.setVetricalCenter();
            window.addEventListener('resize', this.setVetricalCenter);

            this.props.didOpen && this.props.didOpen();
        }, 50);
    }

    close(_cb) {
        this.props.onClose && this.props.onClose()

        window.removeEventListener('resize', this.setVetricalCenter);

        function whichTransitionEvent(el) {

            if (!el) return false;

            let t;
            const transitions = {
                'transition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'MozTransition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
            }

            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        }
        const t = whichTransitionEvent(this.view);
        if (t) {
            this.view.addEventListener(t, e => {
                if (e.propertyName == "opacity") {
                    this.setActive(false);
                    this.props.onClose && this.props.onClose();
                    typeof _cb === "function" && _cb();
                }
            });
        } else {
            setTimeout(_ => {
                this.setActive(false);
                this.props.onClose && this.props.onClose();
                typeof _cb === "function" && _cb();
            }, 200);
        }

        this.setState({
            visible: false,
            hidding: true
        });

        this.setBodyScroll(true);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setVetricalCenter);
        this.setState({
            visible: false
        });
        this.setBodyScroll(true);
    }

    render() {
        if (!this.state.active) {
            return null;
        }
        const loading = this.state.loading || this.props.loading;
        let loadingText = "";
        if (typeof loading === "string") {
            loadingText = loading;
        }
        return (
            <Portal>
                <ModalMask visible={this.state.visible} />
                <div className={`ui-modal ${this.state.visible && "ui-modal-visible"} ${this.state.hidding && "ui-modal-hidding"}`} ref={ref => this.view = ref}>
                    <ModalView {...this.props} center={this.state.center} wrapperReference={ref => this.modal = ref} />
                    <Spinner center spinning={loading} />
                </div>
            </Portal>
        )
    }
}

export default Modal;