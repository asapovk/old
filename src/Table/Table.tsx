import React from 'react';
import TableRow from './TableRow';
import TableForm from './TableForm';
import TablePagination, { PaginationProps } from './TablePagination';
import { Flexbox } from '../Flexbox';
import Theme from '../Themes';

export interface Props {
    data: any[]
    columns: {
        title?: string
        dataIndex: string
        width?: number
        render?: (row, value) => any
    }[]
    form?: {
        key: string
        render: any
    }
    actions?: {
        label: string,
        className?: string,
        onAction: (row) => void
    }[]
    border?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal'
    indexKey?: string
    scope?: any
    style?: any
    pagination?: PaginationProps
    noDataLabel?: string;
    children?: any
}
export interface ThemedProps {
    theme
}
class Table extends React.Component<Props & ThemedProps> {

    state = {
        selectedItems: [] as string[],
        expandedItems: [] as string[],
        page: 1,
    }

    mainview?: HTMLDivElement;
    table: HTMLDivElement | null

    static defaultProps = {
        noDataLabel: 'Нет данных'
    }

    render() {

        const { columns, actions, border, indexKey, scope, form, style, pagination, noDataLabel, theme } = this.props;

        let { data } = this.props;

        const isData = (data && Array.isArray(data) && data.length > 0);
        const noDataLabelTSX = (
            <Flexbox alignItems='center' justifyContent='center' >{noDataLabel}</Flexbox>
        );

        if (pagination && isData) {
            const { pageSize } = pagination;
            /**
             * Отрезаем записи в таблице если есть
             * параметры пагинации
             */
            data = data.filter((item, i) => pageSize * this.state.page >= (i + 1) && (i + 1) >= pageSize * this.state.page - pageSize);
        }

        const isAddForm = (typeof form != 'undefined' && typeof form.key === 'undefined');

        const ColumnsTSX = isData && !isAddForm ? columns.map(column => (
            <div className={'ui-table-content-head-row-column ' + column.dataIndex} key={column.dataIndex} style={{
                flexBasis: column.width ? column.width : 'auto',
                flex: column.width ? 'auto' : 1,
                color: theme.titleColor
            }}>{column.title}</div>
        )) : isData && <div className={'ui-table-content-head-row-column'} style={{ flex: 1 }
        }>Добавить</div>

        const RowsTSX = isData && data.map((row, index) => {
            const key = indexKey && row[indexKey] || index.toString()
            return (
                <TableRow
                    key={key}
                    row={row}
                    columns={columns}
                    actions={actions}
                    border={border}
                    form={(form && form.key && key == form.key) && form.render}
                    isSelected={(this.state.selectedItems.some(item => item === key))}
                    isExpanding={(this.state.expandedItems.some(item => item === key))}
                    isBlur={((form && form.key && key != form.key) || isAddForm)}
                    scope={scope}
                />
            )
        })

        const addFormTSX = typeof form != 'undefined' && typeof form.key === 'undefined' && TableForm(form.render, columns, {});

        return (
            <div className='ui-table' ref={ref => this.table = ref} style={style}>
                <div className='ui-table-content'>
                    {!isData && noDataLabelTSX}
                    <div className='ui-table-content-head-row' children={ColumnsTSX} style={actions && { marginRight: '32px' }} />
                    <div className='ui-table-content-body' style={{
                        border: `0.5px solid ${theme.borderColor}`,
                        borderRadius: theme.borderRadius
                    }}>
                        {addFormTSX}
                        {RowsTSX}
                    </div>
                </div>
                {pagination && data && (
                    <TablePagination
                        pagination={pagination}
                        page={this.state.page}
                        data={this.props.data}
                        onChange={page => this.setState({ page })}
                    />
                )}
            </div>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <Table {...props} theme={{
                backgroundColor: theme.interface.rgb,
                titleColor: theme.lowlight.rgb,
                shadowColor: theme.shadow.rgb,
                borderColor: theme.pale.rgb,
                borderRadius: theme.corner
            }} />
        )}
    </Theme>
);