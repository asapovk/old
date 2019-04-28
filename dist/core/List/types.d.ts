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
        minified?: boolean;
        minifiedRowsCount?: number;
        moreLabel?: string;
        lessLabel?: string;
        data: Row[];
        groupKey?: string;
        groups?: Group[];
        noDataComponent?: JSX.Element;
        onRowClick?: (row: Object) => any;
        expandForm?: ExpandForm;
        rowRender: (row: {
            [key: string]: any;
        }) => any;
    }
    interface MoreContainerProps {
        moreLabel?: string;
        lessLabel?: string;
        minified: boolean;
        setMinified: () => void;
    }
}
export default ListTypes;
