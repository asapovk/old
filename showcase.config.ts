import React from 'react';
import SimplePlugin from './SimplePlugin';
import NotSimplePlugin from './NotSimplePlugin';
import CaseWrapper from './CaseWrapper';

export default {
    plugins: [
        SimplePlugin,
        CaseWrapper,
        NotSimplePlugin
    ]
};