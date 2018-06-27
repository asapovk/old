import 'babel-polyfill'
import './style.scss';

import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonStory from './General/ButtonStory';
import TableStory from './General/TableStory';
import IconStory from './General/IconStory';

storiesOf('Actions', module)
  .add('Button', _ => <ButtonStory />)
  .add('Table', _ => <TableStory />)
  .add('Icon', _ => <IconStory />)
