declare namespace TableTypes {
    interface Column {
        title?: string;
        dataIndex: string;
        width?: number;
        render?: (row: any, value: any) => void;
    }
    interface Props {
        data: Object[];
        columns: Column[];
        form?: {
            key?: string | number;
            defaultData?: {
                [key: string]: any;
            };
            render: any;
            dismiss?: () => void;
        };
        actions?: {
            label: string;
            className?: string;
            onAction: (row: any) => void;
        }[];
        border?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal';
        indexKey?: string;
        scope?: any;
        style?: any;
        pagination?: PaginationOptions;
        noDataLabel?: string;
        children?: any;
        onRowClick?: (row: any) => void;
        search?: boolean;
        onSearch?: (value: any) => void;
        hideHeaders?: boolean;
        className?: string;
    }
    interface RowProps {
        row: any;
        columns: Column[];
        isSelected?: boolean;
        isExpanding?: boolean;
        isBlur?: boolean;
        actions?: any;
        border?: any;
        scope?: any;
        form?: any;
        style?: any;
        children?: any;
        onRowClick?: (row: any) => void;
    }
    interface ColumnProps {
        row: any;
        columns: Column[];
        scope?: any;
        children?: any;
    }
    interface ActionsProps {
        actions: any[];
        data: any;
        children?: any;
    }
    interface FormProps {
        data: any;
        dismiss?: () => void;
        columns: Column[];
        Form: any;
        children?: any;
    }
    interface InjectForm {
        data: {
            [key: string]: any;
        };
        columns: Column[];
        setData: (key: string, value: any) => void;
        dismiss?: () => void;
    }
    interface PaginationOptions {
        pageSize: number;
        pageTotalSize?: number;
        async?: (page: number) => boolean;
    }
    interface PaginationProps {
        pagination: PaginationOptions;
        page: number;
        searchActive: boolean;
        search?: boolean;
        data: {
            [key: string]: any;
        }[];
        onChange: (page: number, searchBar: boolean) => void;
        children?: any;
    }
}
export default TableTypes;
