import React from 'react';
import useStyles from '../../../hooks/useTheme';

export default ({ active }) => {
    const styles = useStyles();

    return (
        <div
            className={`ui-stories-modal-mask${active ? " ui-stories-modal-mask-visible" : ""}`}
            style={styles.modal.main}
        />
    )
}