import React from 'react';
import TableRow from './TableRow';
import TableForm from './TableForm';
import TablePagination, { PaginationProps } from './TablePagination';
import { Flexbox, Styles, Icon } from '../';

// TODO
// Without title props

export interface Props {
    data: Object[]
    columns: {
        title?: string
        dataIndex: string
        width?: number
        render?: (row, value) => any
    }[]
    form?: {
        key: string | number
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
    onRowClick?: (row) => any
    search?: boolean
    onSearch?: (value) => void
}

class Table extends React.Component<Props> {

    state = {
        selectedItems: [] as string[],
        expandedItems: [] as string[],
        page: 1,
        searchBar: false as boolean,
        searchValue: '' as string
    }

    mainview?: HTMLDivElement;
    table: HTMLDivElement | null

    static defaultProps = {
        noDataLabel: 'Нет данных',
        onRowClick: () => { }
    }

    render() {
        const { columns, actions, border, indexKey, scope, form, style, noDataLabel, onRowClick, search } = this.props;

        let { data, pagination } = this.props;
        let pageData = [] as Object[]

        const isData = (this.props.data && Array.isArray(this.props.data) && this.props.data.length > 0);

        const noDataLabelTSX = (
            <Flexbox alignItems='center' justifyContent='center'>{noDataLabel}</Flexbox>
        );

        if (!pagination) {
            pagination = {
                pageSize: 20
            }
        }

        if (this.state.searchValue.length > 0) {
            data = data.filter((row) =>
                Object.values(row).find(item => {
                    let searchbleItem = item && item.toString ? item.toString() : null;
                    return searchbleItem && searchbleItem.toUpperCase().includes(this.state.searchValue.toUpperCase())
                })
            );
        }

        if (isData) {
            const { pageSize } = pagination;
            /**
             * Отрезаем записи в таблице если есть
             * параметры пагинации
             */
            pageData = data.filter((item, i) => pageSize * this.state.page >= (i + 1) && (i + 1) >= pageSize * this.state.page - pageSize);
        }

        const isAddForm = (typeof form != 'undefined' && typeof form.key === 'undefined');


        const SearchBarTSX = (styles) => {
            if (this.state.searchBar || this.state.searchValue) return (
                <div className='ui-table-content-body-search' style={{ borderColor: styles.theme.pale.rgb }}>
                    <Icon type='search' />
                    <input
                        onChange={(event) => this.props.onSearch ? this.props.onSearch(event.target.value) : this.setState({ searchValue: event.target.value })}
                        placeholder='Найти'
                    />
                    <div onClick={() => this.setState({ searchValue: '', searchBar: false, page: 1 })}><Icon type='close' /></div>
                </div>
            ); else return null
        }

        const ColumnsTSX = (style) => {
            if (isData && !isAddForm) {
                return columns.map(column => (
                    <div className={'ui-table-content-head-row-column ' + column.dataIndex} key={column.dataIndex} style={
                        column.width ? { flexBasis: column.width, color: style.titleColor } : { flex: 1, color: style.titleColor }
                    }>{column.title}</div>
                ))
            } else if (isData) return <div className={'ui-table-content-head-row-column'} style={{ flex: 1 }}>Добавить</div>
            else return null
        }

        const RowsTSX = isData && pageData.map((row, index) => {
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
                    onRowClick={onRowClick}
                />
            )
        })

        const addFormTSX = typeof form != 'undefined' && typeof form.key === 'undefined' && TableForm(form.render, columns, {});

        return (
            <Styles>
                {styles => (
                    <div className='ui-table' ref={ref => this.table = ref} style={style}>
                        <div className='ui-table-content'>
                            {!isData && noDataLabelTSX}
                            <div className='ui-table-content-head-row' children={ColumnsTSX(styles.table.main)} style={actions && { marginRight: '32px' }} />
                            {
                                isData &&
                                <div className='ui-table-content-body' style={{
                                    borderColor: styles.table.main.borderColor,
                                    borderRadius: styles.table.main.borderRadius,
                                    background: styles.table.main.backgroundColor,
                                    boxShadow: styles.table.main.boxShadow,
                                }}>
                                    {SearchBarTSX(styles)}
                                    {addFormTSX}
                                    {RowsTSX}
                                    {(search && data.length === 0) && <div className='ui-table-content-body-nofound'>Ничего не найдено</div>}
                                </div>
                            }
                        </div>
                        {isData && data && (
                            <TablePagination
                                pagination={pagination!}
                                page={this.state.page}
                                searchActive={this.state.searchBar || this.state.searchValue.length > 0}
                                search={this.props.search}
                                data={data}
                                onChange={(page, searchBar) => this.setState({ page, searchBar })}
                            />
                        )}
                    </div>
                )}
            </Styles>
        )
    }
}

export default Table;