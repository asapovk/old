import React, { CSSProperties } from 'react';
import Theme from '../Themes';
import { Flexbox } from '../Flexbox';

interface Props {
    loading?: boolean
    center?: boolean
    style?: CSSProperties
    title?: string
    subtitle?: string
    wrapperReference?: any
}
export interface ThemedProps {
    theme
}
class ModalView extends React.Component<Props & ThemedProps> {
    render() {
        return (
            <Flexbox flexDirection="column" alignItems="center" justifyContent="center" style={{ height: this.props.center ? "100%" : "auto" }}>
                <div className={this.props.loading ? "loading" : ""} style={{
                    color: this.props.theme.textColor,
                    background: this.props.theme.background,
                    borderColor: this.props.theme.borderColor,
                    ...this.props.style
                }} ref={this.props.wrapperReference}>
                    {this.props.title ? (
                        <div className={`ui-modal-title`} style={{ color: this.props.theme.titleColor }}>
                            {this.props.title}
                            {this.props.subtitle ? <span style={{ color: this.props.theme.subtitleColor }}>{this.props.subtitle}</span> : null}
                        </div>
                    ) : null}
                    {this.props.children}
                </div>
            </Flexbox>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <ModalView {...props} theme={{
                textColor: theme.text.rgb,
                titleColor: theme.text.rgb,
                subtitleColor: theme.lowlight.rgb,
                borderColor: theme.pale.rgb,
                background: theme.interface.rgb
            }} />
        )}
    </Theme>
);
