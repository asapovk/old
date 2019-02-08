/** @jsx jsx */
import { jsx } from '@emotion/core';
import Types from '../types';
import { TableStyles } from '../styles';
import TableRow from './TableRow';

interface GroupHeaderRowProps {
    columns: Types.Column[],
    title: string
    styles: TableStyles
    expandForm?: Types.ExpandForm
}

export default (props: GroupHeaderRowProps) => {
    const { columns, title, styles, expandForm } = props;

    return (
        <div css={styles.groupRowContainer}>
            <TableRow
                columns={columns}
                styles={styles}
                header={true}
                groupHeader={true}
                expandForm={expandForm}
            />
            <div css={styles.groupTitle} children={title} />
        </div>
    )
}