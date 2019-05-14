import { CSSProperties } from "react";
declare namespace ListTypes {
    interface Row {
        groupId?: number;
        [name: string]: any;
    }
    interface Group {
        title: string;
        value: number | string;
    }
    interface ExpandForm {
        key: string | number;
        render: (row: Object) => any;
    }
    interface Props {
        style?: CSSProperties;
        className?: string;
        narrowed?: boolean;
        minified?: boolean;
        minifiedRowsCount?: number;
        moreLabel?: string;
        lessLabel?: string;
        data: Row[];
        groupKey?: string;
        groups?: Group[];
        noDataText?: string;
        onClick?: (e: MouseEvent, row: Object) => any;
        onMouseDown?: (e: MouseEvent, row: Object) => any;
        onMouseUp?: (e: MouseEvent, row: Object) => any;
        expandForm?: ExpandForm;
        rowRender: (row: {
            [key: string]: any;
        }) => any;
        pending?: boolean;
        pendingRows?: number;
    }
    interface MoreContainerProps {
        moreLabel?: string;
        lessLabel?: string;
        minified: boolean;
        setMinified: () => void;
    }
}
export default ListTypes;
