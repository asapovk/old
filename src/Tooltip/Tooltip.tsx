import { Portal } from 'react-portal'
import { Fragment, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import React from 'react';

enum TooltipTypes {
    error = 'error',
}

enum TooltipPositions {
    'Bottom Left' = 'bottom-left',
    'Bottom Rigth' = 'bottom-right',
    'Bottom Center' = 'bottom-center',
    'Top Left' = 'top-left',
    'Top Rigth' = 'top-right',
    'Top Center' = 'top-center',
    'Left top' = 'left-top',
    'Left middle' = 'left-middle',
    'Left bottom' = 'left-bottom',
    'Right top' = 'right-top',
    'Right middle' = 'right-middle',
    'Right bottom' = 'right-bottom',
}

interface TargetCoordinates {
    top: number
    bottom: number
    left: number
    right: number
}

interface TooltipCoordinates {
    top: number
    left: number
}

interface TooltipProps {
    type?: TooltipTypes
}

class Tooltip extends React.Component<TooltipProps> {

    state = {
        targetCoord: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        } as TargetCoordinates,
        tooltipStyle: {
            top: 0,
            left: 0
        } as TooltipCoordinates,
        content: undefined as Element | undefined,
        position: 'bottom-left' as TooltipPositions,
        show: false as boolean
    }

    tooltipRef: HTMLDivElement | null;
    targetRef: HTMLElement | null;

    handleClickOutside = (event) => {
        this.tooltipRef && !this.tooltipRef.contains(event.target) && this.hide();
    }

    componentDidMount() {
        const targetElement = this.targetRef && ReactDOM.findDOMNode(this.targetRef) as Element;

        if (targetElement) {
            const coords = targetElement.getBoundingClientRect() as TargetCoordinates;

            this.setState({
                targetCoord: {
                    top: coords.top + document.documentElement.scrollTop,
                    bottom: coords.bottom + document.documentElement.scrollTop,
                    left: coords.left + document.documentElement.scrollLeft,
                    right: coords.right + document.documentElement.scrollLeft,
                }
            });
        }
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }


    updateTooltipCoord(position: TooltipPositions) {
        const targetCoord = this.state.targetCoord as TargetCoordinates;
        const tooltipHeight = this.tooltipRef && this.tooltipRef.offsetHeight;

        let tooltipStyle = this.state.tooltipStyle;

        if (targetCoord && tooltipHeight) {
            switch (position) {
                case 'bottom-left':
                    tooltipStyle = {
                        top: targetCoord.bottom + 10,
                        left: targetCoord.left
                    }
                    break;
                case 'bottom-right':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'bottom-center':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'top-left':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'top-right':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'top-center':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'left-top':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'left-middle':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'left-bottom':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'right-top':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
                case 'right-middle':
                    tooltipStyle = {
                        top: targetCoord.top + Math.round((targetCoord.bottom - targetCoord.top) / 2) - tooltipHeight / 2,
                        left: targetCoord.right + 20
                    }
                    break;
                case 'right-bottom':
                    tooltipStyle = {
                        top: 0,
                        left: 0
                    }
                    break;
            }
        }

        this.setState({
            position: position,
            tooltipStyle: tooltipStyle,
        });
    }

    show(content: Element, position: TooltipPositions) {
        this.setState({
            content: content,
            show: true
        }, () => this.updateTooltipCoord(position ? position : this.state.position));
    }

    hide() {
        this.setState({ show: false })
    }

    render() {
        let classes = 'ui-tooltip ';
        if (this.props.type) classes += 'tp-' + this.props.type;
        if (this.state.position) classes += 'tp-' + this.state.position;

        const children = React.isValidElement(this.props.children) ?
            this.props.children : <div>{this.props.children}</div> as ReactElement<any>;

        const childrenWithRef = React.cloneElement(
            React.Children.only(children),
            {
                ref: (ref) => this.targetRef = ref
            }
        )

        const TooltipTSX = (
            <div
                ref={ref => this.tooltipRef = ref}
                className={classes}
                style={this.state.tooltipStyle}
                children={this.state.content}
            />
        )

        const ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');
        const Portal = ReactDOM.createPortal(TooltipTSX, ViewportHTML ? ViewportHTML : document.body);

        return (
            <Fragment>
                {childrenWithRef}
                {this.state.show ? Portal : null}
            </Fragment>
        )
    }
}


export default Tooltip;