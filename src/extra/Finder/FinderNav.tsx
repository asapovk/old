/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Icon, Flexbox } from '../../';
import FinderTypes from './types';
import createStyle from './styles';

const FinderNav = (props: FinderTypes.NavProps) => {
    const { label, badge, active } = props;
    const styles = createStyle();
    const expand = () => {
        if (props.setFinderMenu && typeof props.finderLevel != 'undefined') {
            props.setFinderMenu(
                props.finderLevel + 1,
                props.finderIndex,
                props.filter ? true : false,
                props.filterPlaceholder,
            );
        }
    }

    return (
        <Flexbox alignItems="center" css={styles.navItem(active)} onClick={expand}>
            <div>{label}</div>
            {badge ? <div css={styles.badge}>{badge}</div> : null}
            <Icon type='right' />
        </Flexbox>
    )
}

export default FinderNav;