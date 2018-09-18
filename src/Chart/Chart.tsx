import React from 'react';
import { Icon } from '../Icon';
import Theme from '../Themes';


import {
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line
} from 'recharts';
export interface Props {
    theme
}

class Chart extends React.Component<Props> {
    render() {
        return (
            <div>
                <LineChart width={730} height={200} data={[
                    { name: 'Январь', uv: 4000, pv: 2400, amt: 2400 },
                    { name: 'Февраль', uv: 3000, pv: 1398, amt: 2210 },
                    { name: 'Март', uv: 2000, pv: 9800, amt: 2290 },
                    { name: 'Апрель', uv: 2780, pv: 3908, amt: 2000 },
                    { name: 'Май', uv: 1890, pv: 4800, amt: 2181 },
                    { name: 'Июнь', uv: 2390, pv: 3800, amt: 2500 },
                    { name: 'Июль', uv: 3490, pv: 4300, amt: 2100 },
                    { name: 'Август', uv: 3490, pv: 4300, amt: 2100 },
                    { name: 'Сентябрь', uv: 3490, pv: 4300, amt: 2100 },
                    { name: 'Октябрь', uv: 3490, pv: 4300, amt: 2100 },
                    { name: 'Ноябрь', uv: 3490, pv: 4300, amt: 2100 },
                    { name: 'Декабрь', uv: 3490, pv: 4300, amt: 2100 },

                ]}>
                    <CartesianGrid opacity="0.2" stroke={this.props.theme.strokeColor} />
                    <XAxis dataKey="name" stroke={this.props.theme.strokeColor} />
                    <YAxis />
                    <Tooltip content={(props) => {
                        return <div>{JSON.stringify(props)}</div>
                    }} />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
        );
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <Chart {...this.props} theme={{
                strokeColor: theme.accents.blue
            }} />
        )}
    </Theme>
);