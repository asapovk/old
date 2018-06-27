import React from 'react';

import { Table } from '../../src/index';

export default class TableStory extends React.Component {

    render() {
        return (
            <Table
                // indexKey={'id'}
                columns={[
                    {
                        dataIndex: "id",
                        title: "ID"
                    },
                    {
                        dataIndex: "name",
                        title: "Name"
                    },
                    {
                        dataIndex: "age",
                        title: "Age"
                    }
                ]}
                data={[
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                    { id: 4 }
                ]}
            />
        )
    }
}