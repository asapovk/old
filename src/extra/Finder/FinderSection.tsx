/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment, useState } from 'react'
import { Icon, Flexbox } from '../../'
import FinderTypes from './types'
import createStyle from './styles'

const FinderSection = (props: FinderTypes.SectionProps) => {
    const { label, children } = props
    const styles = createStyle()

    const [expand, setExpand] = useState<boolean>(false)

    return (
        <Fragment>
            <Flexbox alignItems="center" css={styles.section} onClick={() => setExpand(!expand)}>
                <div>{label}</div>
                <Icon type={expand ? 'up' : 'down'} />
            </Flexbox>
            <div className='n-children'>{expand && children}</div>
        </Fragment>
    )
}

export default FinderSection