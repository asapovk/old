/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import ModalTypes from './types';
import * as Typography from '../Typography';
import { Flexbox } from '../..';
import { Icon } from '..';

export default (props: ModalTypes.ModalHeaderProps) => {
    const styles = createStyles({
        visible: true,
        center: true,
    })

    if (props.hideHeader) {
        return null;
    }

    return (
        <div css={styles.header}>
            <Flexbox>
                <Flexbox flex={1} column>
                    <Typography.D1 mt={'-0.5rem'}>{props.title}</Typography.D1>
                    <Typography.C1 color="lowlight" mt={'0.25rem'}>{props.subtitle}</Typography.C1>
                </Flexbox>
                <Icon
                    css={styles.cross}
                    onClick={props.onClosePressed}
                    type="close"
                    color="light"
                    size="2.5rem"
                />
            </Flexbox>
            {/* <Typography.HR pt={'0.5rem'} /> */}
        </div>
    )
}