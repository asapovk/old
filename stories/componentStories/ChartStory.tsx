import React from 'react';
import { Viewport, Chart } from '../../src';


class ChartStory extends React.Component {

    render() {
        return (
            <Chart
                    labels={['Январь', 'Февраль', 'March', 'April', 'May', 'June', 'Декабрь']}
                    data={[
                        { title: "Test1", values: [10, 100, 500, 550, 900, 40, 100] },
                        { title: "Test2", values: [10, 200, 300, 400, 500, 0, 50] }
                    ]}
                />
        )
    }
}

export default ChartStory