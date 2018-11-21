import { configure, addDecorator } from '@storybook/react';
import { setOptions, withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

setOptions({
  //theme: themes.dark,
  name: 'ABRR-UI',
  showAddonPanel: true,
  showSearchBox: false,
  sortStoriesByKind: true,
  sidebarAnimations: false,
  selectedAddonPanel: undefined,
  enableShortcuts: false,
})

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
