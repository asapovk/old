/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { ViewProps } from '..';
import { Flexbox } from '../../../core';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import createStyles from './styles';

export default (props: ViewProps) => {
    const styles = createStyles();
    const [active, setActive] = useState(true);
    const { setView } = props;

    return (
        <Flexbox css={styles.container}>
            <Sidebar active={active} setView={setView} setActive={setActive} />
            <Content active={active} />
        </Flexbox>
    )
}