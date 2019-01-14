/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Popup, Icon } from '../../';
import createStyles from './styles';
import Types from './types'

export default (props: Types.Props) => {

    const { name, fullname, login, role, children, avatar } = props;
    const styles = createStyles();

    function LoginInformation() {
        return <div>{name}</div>
    }

    return (
        <Popup
            trigger={avatar
                ? <div css={styles.wrapper} children={avatar} />
                : <Icon type="user" />
            }
            children={<LoginInformation />}
        />
    )
}