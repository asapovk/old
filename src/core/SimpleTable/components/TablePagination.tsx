/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core';
import { Dispatch, SetStateAction } from 'react';
import { Flexbox } from '../..'

interface PaginationProps {
    containerStyle: SerializedStyles,
    buttonStyle: (active: boolean) => SerializedStyles
    dataLength: number
    pageSize: number
    page: number
    setPage: Dispatch<SetStateAction<number>>
}

export default (props: PaginationProps) => {
    const { dataLength, pageSize, page, setPage, containerStyle, buttonStyle } = props;
    const buttons = Math.ceil(dataLength / pageSize);
    const buttonsComponents: React.ReactNode[] = [];

    if (buttons <= 1) {
        return null;
    }

    for (let i = 0; i < buttons; i++) {
        buttonsComponents.push(
            <div
                onClick={() => setPage(i + 1)}
                children={`${i + 1}`}
                css={buttonStyle(page === (i + 1))}
            />
        )
    }

    return (
        <Flexbox flex={1} css={containerStyle}>
            {buttonsComponents}
        </Flexbox>
    )
}