import React from 'react';
import { Flexbox, Chart, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

class ChartStory extends React.Component {

    render() {
        return (
            <Viewport>
                <Flexbox pr={40} pl={40} pb={40}>
                    <Chart
                        labels={['Январь', 'Февраль', 'March', 'April', 'May', 'June', 'Декабрь']}
                        data={[
                            { title: "Test1", values: [10, 100, 500, 550, 900, 40, 100] },
                            { title: "Test2", values: [10, 200, 300, 400, 500, 0, 50] }
                        ]}
                    />
                    <Chart
                        type="miniProc"
                        noAnimation
                        labels={['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']}
                        data={[
                            { title: "Core 1", values: [342, 252, 345, 123, 233, 123, 645, 644, 500, 555] },
                            { title: "Core 2", values: [94, 349, 433, 332, 104, 50, 40, 45, 50, 9] }
                        ]}
                    />
                </Flexbox>
            </Viewport>
        )
    }
}

export default ChartStory