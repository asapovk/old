import React from 'react';
import { Icon, Flexbox, Viewport } from '../../../src';
import { svgIconPath } from '../../../src/Icon/Icon';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {

    render() {
        const HahaIcon = props => <Icon type={props.type} size={2} />
        const Icons = Object.keys(svgIconPath).map(key =>
            <Flexbox column key={key} p={20} justifyContent="center" alignItems="center" alignContent="center">
                <HahaIcon type={key} />
                <div style={{ opacity: 0.5, fontSize: 12, textAlign: "center" }}>{key}</div>
            </Flexbox>
        );

        const Rows: any = [[]];
        Icons.forEach(element => {
            let Row = Rows[Rows.length - 1];
            if (Row.length > 10) {
                Rows.push([]);
                Row = Rows[Rows.length - 1];
            }
            Row.push(element);
        })
        return (
            
                <Flexbox column alignItems="stretch" flex={1} pr={40} pl={40}>
                    {Rows.map(Row => <Flexbox justifyContent="center">{Row}</Flexbox>)}
                </Flexbox>
            
        );
    }
}