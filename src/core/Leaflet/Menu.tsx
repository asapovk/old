/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Flexbox, C2, T1, Icon } from '../index';
import Types from './types';

export default (props: Types.MenuProps) => {

    const { groups, data, styles, active, onChoose, nameKey, nameRender, isMobile, side, left } = props;

    const items = data.map((item, index) => {
        console.log(item);
        return (
            <Flexbox
                alignItems='center'
                justifyContent='space-between'
                onClick={() => onChoose(index)}
                key={'lmi-' + index}
                css={styles.menu.item(index === active, groups)}
            >
                <Flexbox alignItems='center'>
                    {isMobile && <Icon size='1.25rem' mr='0.5rem' type={item.glyph} color='light' />}
                    {nameRender
                        ? nameRender(item, item[nameKey])
                        : <T1 ellipsis children={item[nameKey]} />
                    }
                </Flexbox>
                {isMobile && <Icon type='right' color='light' />}
            </Flexbox>
        )
    })

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
