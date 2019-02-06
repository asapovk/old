/** @jsx jsx */
import { jsx } from '@emotion/core';
import Types from '../types';
import { TableStyles } from '../styles';
import TableRow from './TableRow';

interface GroupHeaderRowProps {
    columns: Types.Column[],
    title: string
    styles: TableStyles
}

export default (props: GroupHeaderRowProps) => {
    const { columns, title, styles } = props;

    return (
        <div css={styles.groupRowContainer} >
            <TableRow
                columns={columns}
                styles={styles}
                header={true}
                groupHeader={true}
            />
            <div css={styles.groupTitle} children={title} />
        </div>
    )
}