import React, { useRef, useState, Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useStoriesContext, Story } from '../Stories';
import useStyles from '../../hooks/useStyles';
import Mask from './Mask';
import View from './View';

export interface IStoriesModal {
    stories: Story[]
}

export default (props: IStoriesModal) => {

    const ctx = useStoriesContext();

    return (
        <Fragment>
            <Mask />
            <div className={`ui-stories-modal ${ctx.active && "ui-stories-modal-visible"}`}>
                <View {...props} />
            </div>
        </Fragment>
    )
}

{/* <div className={`ui-stories-modal ${ctx.active && "ui-stories-modal-visible"} ${!ctx.active && "ui-stories-modal-hidding"}`}> */ }
