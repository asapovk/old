import './style.scss';

import React from 'react';

import TableRow from './TableRow';

class Table extends React.Component {

    static defaultProps = {
        // Массив данных
        data: [],
        // Массив колонок
        columns: [],
        // Ключ индекса
        indexKey: '',
        // Массив выбранных строк (идентификаторы)
        selectedItems: [],
        // Идентификатор элемента который изменяется
        editItemId: null,
        // Компонент с формой редактирования
        EditForm: null,
        // Массив кнопок для строки
        rowActions: [],
        // Массив кнопок для формы редактирования
        editActions: [],
    }

    render() {
        const { indexKey, selectedItems, editItemId } = this.props;

        return (
            <div className='ui-table'>
                <div className='ui-table-content'>
                    <div className='ui-table-content-head-row'>
                        {this.props.columns.map(column => (
                            <div className={'ui-table-content-head-row-column ' + column.dataIndex} key={column.dataIndex} style={column.width ? { flexBasis: column.width } : { flex: 1 }}>{column.title}</div>
                        ))}
                    </div>
                    <div className='ui-table-content-body'>
                        {this.props.data.map((row, index) => (
                            <TableRow
                                {...this.props}

                                key={row[indexKey] || index}
                                data={row}
                                selected={(selectedItems.findIndex(item => item === row[indexKey]) >= 0)}
                                isEditing={(editItemId == row[indexKey] && typeof row[indexKey] != "undefined")}
                                isBlur={(editItemId)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;