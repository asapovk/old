/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Table, C1 } from '../../../../src';

export const ServiceGroup = (props) => {
    const tableColumns = [
        { dataIndex: 'icon', width: 40 },
        { dataIndex: 'label' },
        { dataIndex: 'amount', width: 80 },
    ]
    return (
        <div css={css({ marginTop: '2rem' })}>
            {props.name && <C1 bold css={css({ marginBottom: '1rem' })}>{props.name}</C1>}
            <Table
                columns={tableColumns}
                data={props.data}
                hideHeaders={true}
            />
        </div>
    )
}