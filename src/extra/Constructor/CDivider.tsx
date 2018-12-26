import React from 'react';
import Component from './Prototype';
import { Styles } from '../../';

export default class CDivider extends Component {

    static defaultProps = {
    }

    render() {
        if (!this.isVisible()) return null;

        const props = {
            style: this.getProperty("style", {}),
        }

        return (
            <Styles>
                {styles => (
                    <div className='abrr-ui-simpleinfo-divider' style={{
                        border: "1px dashed",
                        borderColor: styles.theme.pale.hex,
                        margin: "20px 0",
                        ...props.style
                    }} />
                )}
            </Styles>
        );
    }
}