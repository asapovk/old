
import React from 'react';
import Component from './Prototype';
import { Flexbox } from '../../';

export default class CFlex extends Component {

    render() {
        if (!this.isVisible()) return null;

        const props = {
            style: this.getProperty("style", {}),
            flex: this.getProperty("flex", "1"),
            p: this.getProperty("p"),
            pr: this.getProperty("pr"),
            pl: this.getProperty("pl"),
            pt: this.getProperty("pt"),
            pb: this.getProperty("pb"),
            m: this.getProperty("m"),
            mr: this.getProperty("mr"),
            ml: this.getProperty("ml"),
            mt: this.getProperty("mt"),
            mb: this.getProperty("mb"),
            flexDirection: this.getProperty("flexDirection", "row"),
            justifyContent: this.getProperty("justifyContent"),
            alignItems: this.getProperty("alignItems"),
            alignSelf: this.getProperty("alignSelf"),
            flexBasis: this.getProperty("flexBasis"),
            flexGrow: this.getProperty("flexGrow"),
            flexShrink: this.getProperty("flexShrink"),
            flexWrap: this.getProperty("flexWrap"),

            children: this.props.children
        }
        return <Flexbox {...props} />;
    }
}