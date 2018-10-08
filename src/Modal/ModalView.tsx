import React, { CSSProperties } from 'react';
import { Flexbox, Styles } from '../';

interface Props {
    loading?: boolean
    center?: boolean
    style?: CSSProperties
    title?: string
    subtitle?: string
    wrapperReference?: any
}

class ModalView extends React.Component<Props> {
    render() {
        return (
            <Styles>
                {styles => (
                    <Flexbox flexDirection="column" alignItems="center" justifyContent="center" style={{ height: this.props.center ? "100%" : "auto" }}>
                        <div className={this.props.loading ? "loading" : ""} style={{
                            color: styles.modal.view.textColor,
                            background: styles.modal.view.background,
                            borderColor: styles.modal.view.borderColor,
                            ...this.props.style
                        }} ref={this.props.wrapperReference}>
                            {this.props.title ? (
                                <div className={`ui-modal-title`} style={{ color: styles.modal.view.titleColor }}>
                                    {this.props.title}
                                    {this.props.subtitle ? <span style={{ color: styles.modal.view.subtitleColor }}>{this.props.subtitle}</span> : null}
                                </div>
                            ) : null}
                            {this.props.children}
                        </div>
                    </Flexbox>
                )}
            </Styles>

        )
    }
}

export default ModalView;