import TableTypes from './types';
declare const TableFormHOC: (Form: TableTypes.InjectForm, columns: TableTypes.Column[], row: {
    [key: string]: any;
}) => JSX.Element;
export default TableFormHOC;
