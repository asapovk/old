import React, { CSSProperties } from 'react';
import Theme from '../Themes';
import { Flexbox } from '../Flexbox';

interface Props {
    visible: boolean
}
export interface ThemedProps {
    theme
}
class ModalMask extends React.Component<Props & ThemedProps> {
    render() {
        return (
            <div className={`ui-modal-mask${this.props.visible ? " ui-modal-mask-visible" : ""}`} style={{ backgroundColor: this.props.theme.backgroundColor }} />
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <ModalMask {...props} theme={{
                backgroundColor: theme.background.rgb
            }} />
        )}
    </Theme>
);
