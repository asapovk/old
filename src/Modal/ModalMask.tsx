import React from 'react';
import { Styles } from '../';

interface Props {
    visible: boolean
}

class ModalMask extends React.Component<Props> {
    render() {
        return (
            <Styles>
                {styles => (
                    <div className={`ui-modal-mask${this.props.visible ? " ui-modal-mask-visible" : ""}`} style={styles.modal.main} />
                )}
            </Styles>
        )
    }
}

export default ModalMask;

