/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Spinner, Flexbox } from '../../../src';
import '../../../src/styles/scss/main.scss';
import { ThemeInterface } from '../../../src/styles';

export default () => {
    return (
        <Flexbox flex={1} p={20} css={(theme: ThemeInterface) => css({ widht: '100%', height: '100%', background: theme.highlight.hex })}>
            <Spinner color='textOnAccent' loadingText='Загружаем что-то...' spinning center />
        </Flexbox>
    )
}