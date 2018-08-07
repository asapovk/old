import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TextField from '../src/TextField';

import '../src/scss/main.scss';

storiesOf('TSX Components', module)
    .add('TextField', () => (
        <TextField label='Label' />
    ));