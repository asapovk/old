/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Flexbox, C2, T1 } from '../index';
import Types from './types';

export default (props: Types.MenuProps) => {

    const { groups, data, styles, active, onChoose } = props;

    const items = data.map((item, index) => (
        <T1
            key={index}
            css={styles.menu.item(index === active, groups)}
            children={item.label}
            onClick={() => onChoose(index)}
        />
    ))

    return (
        <Flexbox css={styles.menu.container} column>
            {groups
                ? groups.map(group => {
                    return (
                        <Flexbox css={styles.menu.group} column key={group.id}>
                            <C2 css={styles.menu.groupName}>
                                {group.label}
                            </C2>
                            <div css={styles.menu.groupBody}>
                                {items.filter((item, index) => data[index].groupId === group.id)}
                            </div>
                        </Flexbox>
                    )
                })
                : items
            }
        </Flexbox>
    )
}
