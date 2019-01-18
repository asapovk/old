import React from 'react';
import { Table, Icon, H2, T1 } from '../../../src';

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
            <H2 underline>К оплате</H2>
            <T1 bold>Коммунальные услуги</T1>
            <Table
                columns={tableColumns}
                data={data}
                hideHeaders={true}
            />
            <T1 bold>Содержание жилого помещения</T1>
            <Table
                columns={tableColumns}
                data={data}
                hideHeaders={true}
            />
            <T1 bold>Прочие услуги</T1>
            <Table
                columns={tableColumns}
                data={data}
                hideHeaders={true}
            />
            <H2 underline>Приборы учета</H2>
            <Table
                columns={tableColumns}
                data={data}
                hideHeaders={true}
            />
        </>
    )
}



export default Main;