import React from 'react';
import { Flexbox, Icon, Title } from '../../../src';
import { ICONSET } from '../../../src/core/Icon/Icon';

export default class Story extends React.Component {

    render() {
        return (
            <div style={{ padding: 40 }}>
                <Title>ICON SET</Title>
                <div style={{ display: 'grid', gridTemplateColumns: "repeat(auto-fill, 10rem)" }}>
                    {Object.keys(ICONSET).map(key =>
                        <Flexbox column key={key} p={20} justifyContent="center" alignItems="center" alignContent="center">
                            <Icon
                                type={key}
                                style={{ fontSize: "3rem" }}
                                shape='oval' size='3rem'
                            />
                            <div
                                style={{ opacity: 0.5, fontSize: '1rem', marginTop: '0.25rem', textAlign: "center" }}
                                children={key}
                            />
                        </Flexbox>
                    )}
                </div>
            </div>
        );
    }
}