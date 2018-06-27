import React, { Fragment } from 'react';

// TODO: убарть antd
// import { Table, Tag } from 'antd';

// class ParamTable extends React.Component {

//     static defaultValue = {
//         data: []
//     }

//     renderType(value, row) {
//         let Type = null;
//         const addElement = (text) => {
//             let El = null;
//             switch (text) {
//                 case 'Function': El = <Tag color="blue">{text}</Tag>; break;
//                 case 'Event': El = <Tag color="green">{text}</Tag>; break;
//                 case 'Object': El = <Tag color="orange">{text}</Tag>; break;
//                 case 'Number': El = <Tag color="red">{text}</Tag>; break;
//                 case 'Array': El = <Tag color="orange">{text}</Tag>; break;
//                 case 'String': El = <Tag color="red">{text}</Tag>; break;
//                 case 'Setter': El = <Tag color="blue">{text}</Tag>; break;
//                 case 'Getter': El = <Tag color="green">{text}</Tag>; break;
//                 case 'Boolean': El = <Tag color="purple">{text}</Tag>; break;
//                 case 'React.Component': El = <Tag color="purple">{text}</Tag>; break;
//                 default: El = <Tag>{text}</Tag>;
//             }
//             Type = (
//                 <Fragment>
//                     {Type}
//                     {El}
//                 </Fragment>
//             )
//         }
//         const addBlackTag = (text) => {
//             Type = (
//                 <Fragment>
//                     <Tag color="black">{text}</Tag> {Type}
//                 </Fragment>
//             )
//         }


//         if (Array.isArray(value)) {
//             value.forEach(text => addElement(text));
//         } else {
//             addElement(value)
//         }

//         if (row.setter) {
//             addBlackTag("SET");
//         }
//         if (row.getter) {
//             addBlackTag("GET");
//         }

//         return Type;
//     }

//     render() {
//         const columns = [
//             { title: 'Параметр', dataIndex: 'value', key: 'value' },
//             { title: 'Тип', dataIndex: 'type', key: 'type', render: this.renderType.bind(this) },
//             { title: 'Описание', dataIndex: 'desc', key: 'desc' }
//         ]

//         if (this.props.data.length === 0) {
//             return 0;
//         }

//         return (<Table
//             size="small"
//             pagination={{ position: "none", pageSize: 500 }}
//             columns={columns}
//             dataSource={this.props.data.map((data, i) => {
//                 data.key = i;
//                 return data;
//             })}
//             style={{ border: 0 }}
//         />)
//     }
// }

// export default ParamTable;