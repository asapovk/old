import React, { useEffect } from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';
import Select from '../../src/Select/Select';

const AddonPanel = styled.div({
    margin: 10,
    width: '100%',
    overflow: 'auto',
});

addons.register('ABRR_THEMES_ADDON', api => {

    const Addon = (props) => {
        return (
            null
        )
    }

    addons.addPanel('ABRR_THEMES_ADDON/panel', {
        title: 'Тема',
        render: ({ active }) => (
            <Addon
                channel={addons.getChannel()}
                api={api}
                active={active}
            />
        ),
    });
});