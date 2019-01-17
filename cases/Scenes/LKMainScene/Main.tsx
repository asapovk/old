import React from 'react';
import { Table, Icon } from '../../../src';

const Main = () => {

    const tableColumns = [
        { dataIndex: 'id', width: 40 },
        { dataIndex: 'name' },
        { dataIndex: 'age', width: 60 },
        { dataIndex: 'passport', width: 16 },
    ]

    const data = [
        {
            id: <Icon type='counter' />,
            name: 'Газоснабжение',
            age: '683,11₽',
            passport: <Icon type='right' />
        }
    ]

    return (
        <>
            <h2>К оплате</h2>
            <hr />
            <h3>Коммунальные услуги</h3>
            <Table
                columns={tableColumns}
                data={data}
            />
            <h3>Содержание жилого помещения</h3>
            <Table
                columns={tableColumns}
                data={data}
            />
            <h3>Прочие услуги</h3>
            <Table
                columns={tableColumns}
                data={data}
            />
            <h2>Приборы учета</h2>
            <hr />
            <Table
                columns={tableColumns}
                data={data}
            />
        </>
    )
}



export default Main;