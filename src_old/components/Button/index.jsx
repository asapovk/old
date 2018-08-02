
import React, { Fragment } from 'react';
import './style.scss';


export default class Button extends React.Component {
    render() {
        return (
            <Fragment>
                <button {...this.props} />
            </Fragment>
        );
    }
}