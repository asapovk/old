/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { ViewProps } from '..';
import { Flexbox } from '../../../core';
import Background from './components/Background';
import Content from './components/Content';
import createStyles from './styles';

export default (props: ViewProps) => {
    const styles = createStyles();
    const [active, setActive] = useState(true);
    const { setView } = props;

    return (
        <Flexbox column css={styles.container}>
            <Background active={active} setView={setView} />
            <Content active={active} setActive={setActive} />
        </Flexbox >
    )
}