/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Flexbox, Icon, C1 } from '../..';
import Form from './Forms';
import Types from './types';

export default (props: Types.Props) => {

    const styles = props.styles;

    return (
        <Flexbox css={styles.login.container}>
            <Flexbox css={styles.login.welcome} flexDirection="column">
                {props.logo && <div css={styles.login.logo}>{props.logo}</div>}
                {props.title && <span css={styles.login.title}>{props.title}</span>}
                <Form {...props} />
                <Flexbox css={styles.login.actions.container}>
                    <Flexbox css={styles.login.actions.wrapper}>
                        {props.actions!.map((action, index) =>
                            <Flexbox key={index} css={styles.login.actions.item} onClick={action.onAction} flex={1} flexDirection="column" justifyContent="center" alignItems="center">
                                <Icon css={styles.login.actions.icon} type={action.icon} />
                                <C1 link align='center'>{action.title}</C1>
                            </Flexbox>
                        )}
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    );
}