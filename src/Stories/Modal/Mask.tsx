import React from 'react';
import { useStoriesContext } from '../Stories';
import useStyles from '../../hooks/useStyles';

export default () => {
    const ctx = useStoriesContext();
    const styles = useStyles();

    return (
        <div
            className={`ui-stories-modal-mask${ctx.active ? " ui-stories-modal-mask-visible" : ""}`}
            style={styles.modal.main}
        />
    )
}