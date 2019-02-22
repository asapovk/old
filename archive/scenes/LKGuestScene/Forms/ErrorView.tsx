import React, { Fragment } from 'react';
// import {  } from '../../..';

export default (props: { message?: string }) => {

    return (
        <Fragment>
            {props.message || null}
        </Fragment>
    );
}