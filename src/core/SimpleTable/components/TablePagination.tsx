/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import { Dispatch, SetStateAction } from 'react';
import { Flexbox } from '../..'
import { TableStyles } from '../styles';

interface PaginationProps {
    dataLength: number
    pageSize: number
    page: number
    setPage: Dispatch<SetStateAction<number>>
    styles: TableStyles
}

export default (props: PaginationProps) => {
    const { dataLength, pageSize, page, setPage, styles } = props;
    const buttons = Math.ceil(dataLength / pageSize);
    const buttonsComponents: React.ReactNode[] = [];

    if (buttons <= 1) {
        return null;
    }

    for (let i = 0; i < buttons; i++) {
        buttonsComponents.push(
            <div
                key={`pagination-${i}`}
                onClick={() => setPage(i + 1)}
                children={`${i + 1}`}
                css={styles.paginationButton(page === (i + 1))}
            />
        )
    }

    return (
        <Flexbox flex={1} css={styles.paginationContainer}>
            {buttonsComponents}
        </Flexbox>
    )
}