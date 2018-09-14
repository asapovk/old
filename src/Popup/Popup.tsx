import { Portal } from 'react-portal'
import { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import React from 'react';

interface TargetCoordinates {
    top: number
    bottom: number
    left: number
    right: number
}

interface PopupCoordinates {
    top: number
    left: number
}

interface PopupProps {
    type?: 'error'
    position?:
    'bottom-left' |
    'bottom-right' |
    'bottom-center' |
    'top-left' |
    'top-right' |
    'top-center' |
    'left-top' |
    'left-middle' |
    'left-bottom' |
    'right-top' |
    'right-middle' |
    'right-bottom',
    trigger: any,
    on?: 'hover' | 'click'
}

class Popup extends React.Component<PopupProps> {

    state = {
        triggerCoord: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        } as TargetCoordinates,
        popupStyle: {
            top: 0,
            left: 0
        } as PopupCoordinates,
        content: undefined as Element | undefined,
        show: false as boolean
    }

    popupRef: HTMLDivElement | null;
    triggerRef: HTMLElement | null;

    handleClickOutside = (event) => {
        this.popupRef && !this.popupRef.contains(event.target) && this.hide();
    }

    componentDidMount() {
        const triggerElement = this.triggerRef && ReactDOM.findDOMNode(this.triggerRef) as Element;
        const coords = triggerElement && triggerElement.getBoundingClientRect() as TargetCoordinates;

        this.setState({
            triggerCoord: coords ? {
                top: coords.top + document.documentElement.scrollTop,
                bottom: coords.bottom + document.documentElement.scrollTop,
                left: coords.left + document.documentElement.scrollLeft,
                right: coords.right + document.documentElement.scrollLeft,
            } : this.state.triggerCoord
        });

        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }


    updatePopupCoord() {
        const position = this.props.position;
        const triggerCoord = this.state.triggerCoord as TargetCoordinates;
        const popupHeight = this.popupRef && this.popupRef.offsetHeight;

        let popupStyle = this.state.popupStyle;

        if (triggerCoord && popupHeight) {
            switch (position) {
                default:
                    popupStyle = {
                        top: triggerCoord.bottom + 10,
                        left: triggerCoord.left
                    }
                    break;
                case 'bottom-right':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'bottom-center':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'top-left':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'top-right':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'top-center':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'left-top':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'left-middle':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'left-bottom':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'right-top':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'right-middle':
                    popupStyle = {
                        top: triggerCoord.top + Math.round((triggerCoord.bottom - triggerCoord.top) / 2) - popupHeight / 2,
                        left: triggerCoord.right + 20
                    }
                    break;
                case 'right-bottom':
                    popupStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
            }
        }

        this.setState({
            popupStyle: popupStyle,
        });
    }

    show() {
        this.setState({ show: true }, () => this.updatePopupCoord());
    }

    hide() {
        this.setState({ show: false })
    }

    render() {

        const { position, children, type, trigger, on } = this.props;

        const TriggerTSX = <div onClick={() => this.show()} ref={ref => this.triggerRef = ref}>{trigger}</div>

        let classes = 'ui-popup';
        if (type) classes += ' pp-' + type;
        if (position) classes += ' pp-' + position
        else classes += ' pp-bottom-left';

        const PopupTSX = (
            <div
                ref={ref => this.popupRef = ref}
                className={classes}
                style={this.state.popupStyle}
                children={children}
            />
        )

        const ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');
        const Portal = ReactDOM.createPortal(PopupTSX, ViewportHTML ? ViewportHTML : document.body);

        return (
            <Fragment>
                {TriggerTSX}
                {this.state.show ? Portal : null}
            </Fragment>
        )
    }
}


export default Popup;