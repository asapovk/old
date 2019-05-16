/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment, useState } from 'react'
import { Icon, Flexbox } from '../../'
import FinderTypes from './types'
import createStyle from './styles'

const FinderSection = (props: FinderTypes.SectionProps) => {
    const { label, children } = props
    const styles = createStyle()

    const [active, setActive] = useState<boolean>(false)

    return (
        <Fragment>
            <Flexbox alignItems="center" css={styles.navItem(active)} onClick={() => setActive(!active)}>
                <div>{label}</div>
                <Icon type={active ? 'up' : 'down'} />
            </Flexbox>
            <div className='n-children'>{active && children}</div>
        </Fragment>
    )
}

export default FinderSection