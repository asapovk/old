import React, { Fragment } from 'react';

interface Props {
    title?: string
    subtitle?: string
}

class ModalTitle extends React.Component<Props> {
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

export default ModalTitle;