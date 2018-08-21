import { Portal } from 'react-portal'
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import React from 'react';

interface Tooltip {
    targetRef: any;
    tooltipRef: any;
    targetCoord: any;
    state: {
        targetCoord: any
        tooltipStyle: any
        content: any
        type: any
        position: any
        show: any
    }
}

class Tooltip extends React.Component {

    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.state = {
            targetCoord: {},
            tooltipStyle: { top: 0, left: 0 },
            content: [],
            type: '',
            position: 'bottom-left',
            show: false
        }
    }

    componentDidMount() {
        // @ts-ignore
        const coords = ReactDOM.findDOMNode(this.targetRef).getBoundingClientRect();
        if (coords && this.targetRef) {
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

    handleClickOutside(event) {
        if (this.tooltipRef && !this.tooltipRef.contains(event.target)) {
            this.hide();
        }
    }

    updateTooltipPosition() {
        const coord = this.state.targetCoord;

        switch (this.state.position) {
            case 'center-right':
                return this.setState({
                    tooltipStyle: {
                        top: coord.top + Math.round((coord.bottom - coord.top) / 2) - this.tooltipRef.offsetHeight / 2,
                        left: coord.right + 20
                    }
                })
            default:
                return this.setState({
                    tooltipStyle: {
                        top: coord.bottom + 10,
                        left: coord.left
                    }
                })
        }
    }

    show(content, type, position) {
        this.setState({
            content: content,
            type: 'tooltip-' + type,
            position: position ? position : 'bottom-left',
            show: true
        }, () => {
            this.updateTooltipPosition()
        });
    }

    hide() {
        this.setState({ show: false })
    }

    render() {
        const classes = 'tooltip ' + this.state.type + ' ' + this.state.position;

        let ChildrenJSX = React.isValidElement(this.props.children) ? this.props.children : <div>{this.props.children}</div>

        ChildrenJSX = React.cloneElement(
            React.Children.only(ChildrenJSX),
            {
                ref: (ref) => this.targetRef = ref
            }
        )

        const PopupJSX = (
            <div
                ref={ref => this.tooltipRef = ref}
                className={classes}
                style={this.state.tooltipStyle}
                children={this.state.content}
            />
        )

        return (
            <Fragment>
                {ChildrenJSX}
                {this.state.show ? <Portal>{PopupJSX}</Portal> : null}
            </Fragment>
        )
    }
}


export default Tooltip;