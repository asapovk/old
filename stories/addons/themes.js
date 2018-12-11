import React, { useEffect, useState } from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';
import { Select, Viewport, Flexbox, Checkbox } from '../../src/';
import useStyles from '../../src/hooks/useTheme';

require('../../src/Styles/scss/main.scss');

const AddonPanel = styled.div({
    margin: 10,
    width: '100%',
    overflow: 'auto',
});

let interval;

const ThemeSelect = () => {
    const styles = useStyles();

    const st = {
        root: {
            position: "absolute", left: 0, right: 0, top: 0, bottom: 0,
            background: styles.theme.background.hex,
        },
        wrapper: {
            display: "inline-block",
            padding: 10,
        },
        title: {
            fontSize: "14px",
            color: styles.theme.lowlight.hex,
            padding: 0,
            margin: 0,
        },
        select: {
            background: styles.theme.highlight.hex,
            outline: "none",
            border: "5px solid " + styles.theme.highlight.hex,
            borderRadius: "0",
            fontSize: "14px",
            fontWeight: 600,
            color: styles.theme.textOnAccent.hex,
        }
    };
    const themes = [
        { text: "Черная смородина (blackCurrant)", value: "blackCurrant" },
        { text: "Белая смородина (whiteCurrant)", value: "whiteCurrant" },
        { text: "АБР (abrTheme)", value: "abrTheme" },
        { text: "Газпром (gazpromTheme)", value: "gazpromTheme" }
    ];

    const handleThemeChange = (e) => {
        localStorage.setItem('THEME', e.target.value);
    }

    // useEffect(() => {
    //     const storyBookSplitPane = document.querySelector('.SplitPane').style;

    //     storyBookSplitPane.background = styles.theme.background.hex;
    //     storyBookSplitPane.color = styles.theme.text.hex;

    //     const pdNodes = document.querySelectorAll('.Pane > div > div');
    //     for (let i = 0; i < pdNodes.length; i++) {
    //         pdNodes[i].style.border = "1px solid " + styles.theme.pale.hex;
    //     }

    //     const aNodes = document.querySelectorAll('.SplitPane a');
    //     for (let i = 0; i < aNodes.length; i++) {
    //         aNodes[i].style.color = styles.theme.text.hex;
    //     }
    // })

    return (
        <div style={st.root}>
            <div style={st.wrapper}>
                <p style={st.title}>Тема оформления</p>
                <select style={st.select} defaultValue={localStorage.getItem('THEME')} onChange={handleThemeChange}>
                    {themes.map(theme => (
                        <option key={theme.value} value={theme.value}>{theme.text}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
addons.register('ABRR_THEMES_ADDON', api => {

    const Addon = (props) => {
        return (
            <Viewport theme="whiteCurrant">
                <ThemeSelect />
            </Viewport>
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