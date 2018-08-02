import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Hello } from '../src/components/Hello'

storiesOf('TSX Components', module).add('Hello', () => <Hello compiler='TypeScript' framework='React' />);