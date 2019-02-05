/** @jsx jsx */
import { SerializedStyles } from '@emotion/core';
import { Dispatch, SetStateAction } from 'react';
interface PaginationProps {
    containerStyle: SerializedStyles;
    buttonStyle: (active: boolean) => SerializedStyles;
    dataLength: number;
    pageSize: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}
declare const _default: (props: PaginationProps) => JSX.Element | null;
export default _default;
