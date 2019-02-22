/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Flexbox, Icon, C2 } from '../..';
import Types from './types';

export default (props: Types.Props) => {

    const styles = props.styles;

    const Actions = (
        <Flexbox css={styles.form.actions.container}>
            <Flexbox css={styles.form.actions.wrapper}>
                {props.actions && props.actions!.map((action, index) =>
                    <Flexbox
                        key={index}
                        css={styles.form.actions.item}
                        onClick={action.onAction}
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Icon css={styles.form.actions.icon} type={action.icon} shape='oval' />
                        <C2 link align='center'>{action.title}</C2>
                    </Flexbox>
                )}
            </Flexbox>
        </Flexbox>
    )

    return (
        <Flexbox css={styles.form.container}>
            <Flexbox css={styles.form.welcome} flexDirection="column">
                {props.logo && <div css={styles.form.logo}>{props.logo}</div>}
                {props.form}
                {!props.hideActions && Actions}
            </Flexbox>
        </Flexbox>
    );
}