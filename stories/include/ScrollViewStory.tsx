import React from 'react';
import { ScrollView } from '../../src/ScrollView';
import useTheme from '../../src/hooks/useTheme';

export default () => {
    const { theme } = useTheme();
    return (
        <>
            <ScrollView>
                <div
                    style={{
                        height: 3000,
                        width: "100%",
                        background: 'linear-gradient(0deg, ' + theme.pale.rgba(1) + ', ' + theme.pale.rgba(0) + ')'
                    }}
                    children={(
                        <>
                            <h1 style={{ margin: 20 }}>Vertical scroll</h1>
                            <ScrollView horizontal>
                                <div
                                    style={{
                                        width: 3000,
                                        background: 'linear-gradient(90deg, ' + theme.pale.rgba(0) + ', ' + theme.pale.rgba(1) + ')'
                                    }}
                                    children={<h1 style={{ margin: 20 }}>Horizontal scroll</h1>}
                                />
                            </ScrollView>
                        </>
                    )}
                />
            </ScrollView>
        </>
    )
}