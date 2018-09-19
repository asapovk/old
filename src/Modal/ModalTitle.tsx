import React, { Fragment } from 'react';
import Theme from '../Themes';

interface Props {
    title?: string
    subtitle?: string
}
export interface ThemedProps {
    theme
}
class ModalTitle extends React.Component<Props & ThemedProps> {
    render() {
        if (!this.props.title) {
            return null;
        }
        return (
            <Fragment>
                {this.props.subtitle ?
                    <div className={`ui-modal-title`}>
                        {this.props.title}
                        {this.props.subtitle ? <span>{this.props.subtitle}</span> : null}
                    </div> : null
                }

            </Fragment>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <ModalTitle {...props} theme={{

            }} />
        )}
    </Theme>
);
