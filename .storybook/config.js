import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'ABRR-UI',
    showAddonPanel: true,
    showSearchBox: false,
    sortStoriesByKind: false,
    sidebarAnimations: false,
    selectedAddonPanel: undefined,
    enableShortcuts: false,
  })
);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
