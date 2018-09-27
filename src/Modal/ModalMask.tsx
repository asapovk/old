import React from 'react';
import Theme from '../Themes';

interface Props {
    visible: boolean
}

class ModalMask extends React.Component<Props> {
    render() {
        return (
            <Theme>
                {styles => (
                    <div className={`ui-modal-mask${this.props.visible ? " ui-modal-mask-visible" : ""}`} style={styles.modal.main} />
                )}
            </Theme>
        )
    }
}

export default ModalMask;

