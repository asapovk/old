import TableTypes from './types';
interface TableFormHOCProps {
    Form: TableTypes.InjectForm;
    dismiss?: () => void;
    columns: TableTypes.Column[];
    row?: {
        [key: string]: any;
    };
    defaultData?: {
        [key: string]: any;
    };
}
declare const TableFormHOC: (props: TableFormHOCProps) => JSX.Element;
export default TableFormHOC;
