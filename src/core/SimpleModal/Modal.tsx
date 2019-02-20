/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useImperativeHandle, useState, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '..';

export interface Handles {
    open: (content) => void,
    close: () => void
}

export default forwardRef((props, ref) => {

    const [content, setContent] = useState<React.ReactElement<any> | null>(null);
    const ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');

    useImperativeHandle<any, Handles>(ref, () => ({
        open: (content) => {
            setContent(content)
        },
        close: () => {
            setContent(null)
        }
    }));

    if (content) {
        return ReactDOM.createPortal(
            jsx(
                'div',
                {
                    css: theme => css({
                        position: 'fixed',
                        zIndex: 500,
                    })
                },
                <ModalView onClose={() => setContent(null)}>{content}</ModalView>
            ),
            ViewportHTML ? ViewportHTML : document.body
        )
    } else return null
})

const ModalView = (props) => {
    return (
        <div>
            {props.children}
            <Icon type='close' onClick={() => props.onClose()} />
        </div>
    )
}