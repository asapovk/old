import React from 'react';
import ThemeChanger from './plugins/ThemeChanger';
import HelloPlugin from './plugins/HelloPlugin';
import caseWrapper from './plugins/caseWrapper';

export default {
    plugins: [
        ThemeChanger,
        caseWrapper,
        HelloPlugin
    ]
};