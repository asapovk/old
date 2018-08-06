import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Provider from '../src/Provider';
import TextField from '../src/TextField';

storiesOf('TSX Components', module)
    .add('TextField', () => <Provider theme='telegramDark'><TextField label='Label' /></Provider>);