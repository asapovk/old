/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Flexbox, C2, T1, Icon } from '../index';
import Types from './types';

export default (props: Types.MenuProps) => {

    const { groups, data, styles, active, onChoose, nameKey, isMobile, side, left } = props;

    const items = data.map((item, index) => (
        <Flexbox
            alignItems='center'
            onClick={() => onChoose(index)}
            key={'lmi-' + index}
            css={styles.menu.item(index === active, groups)}
        >
            <T1 ellipsis>{item[nameKey]}</T1>
            {isMobile && <Icon type='right' color='light' />}
        </Flexbox>
    ))

    return (
        <Flexbox css={styles.menu.container(side, left)} column>
            {groups
                ? groups.map(group => {
                    const Content = items.filter((item, index) => data[index].groupId === group.value)
                    if (!Content.length) return null
                    return (
                        <Flexbox css={styles.menu.group} column key={group.value}>
                            <C2 css={styles.menu.groupName}>
                                {group.label}
                            </C2>
                            <div css={styles.menu.groupBody}>
                                {Content}
                            </div>
                        </Flexbox>
                    )
                })
                : items
            }
        </Flexbox>
    )
}
