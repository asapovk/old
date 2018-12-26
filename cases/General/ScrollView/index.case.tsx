import React from 'react';
import { Viewport, Title } from '../../../src';
import { ScrollView } from '../../../src/extra'
import { useTheme } from '../../../src/hooks';
import '../../../src/Styles/scss/main.scss';

export default () => {
    const { theme } = useTheme();
    return (

        <ScrollView>
            <div
                style={{
                    height: 3000,
                    width: "100%",
                    background: 'linear-gradient(0deg, ' + theme.pale.rgba(1) + ', ' + theme.pale.rgba(0) + ')'
                }}
                children={(
                    <>
                        <Title style={{ padding: 40 }}>VERTICAL</Title>
                        <ScrollView horizontal>
                            <div
                                style={{
                                    width: 3000,
                                    background: 'linear-gradient(90deg, ' + theme.pale.rgba(0) + ', ' + theme.pale.rgba(1) + ')'
                                }}
                                children={(
                                    <Title style={{ padding: 40 }}>HORIZONTAL</Title>
                                )}
                            />
                        </ScrollView>
                    </>
                )}
            />
        </ScrollView>

    )
}