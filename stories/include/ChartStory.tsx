import React from 'react';
import { Flexbox, Chart } from '../../src';


class ChartStory extends React.Component {

    render() {
        return (
            <Flexbox pr={40} pl={40} pb={40}>
                <Chart
                    labels={['Январь', 'Февраль', 'March', 'April', 'May', 'June', 'Декабрь']}
                    data={[
                        { title: "Test1", values: [10, 100, 500, 550, 900, 40, 100] },
                        { title: "Test2", values: [10, 200, 300, 400, 500, 0, 50] }
                    ]}
                />
            </Flexbox>
        )
    }
}

export default ChartStory