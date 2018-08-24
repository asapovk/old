import React, { Fragment } from 'react';



class Finder extends React.Component {

    render() {
        const { children } = this.props;

        return children;
    }
}

class FinderNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false
        }
    }

    render() {
        return (
            <Fragment>
                <div onClick={_ => this.setState({ active: true })}>{this.props.label}</div>
                {
                    this.state.active && <div>{this.props.children}</div>
                }
            </Fragment>
        )
    }
}

export default class FinderTest extends React.Component {

    render() {
        return (
            <Finder>
                <FinderNav label="Nav1">
                    <div>Content 1</div>
                    <div>Content 1</div>
                </FinderNav>
                <FinderNav label="Nav2">
                    <div>Content 2</div>
                </FinderNav>
            </Finder>
        )
    }
}