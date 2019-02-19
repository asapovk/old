import React, { useState, useEffect } from 'react';
import { Flexbox, SimpleTable, Button, TextField } from '../../../src';
import { SimpleTableTypes } from '../../../src/core/types';

export default () => {
    const [items, setItems] = useState(10);
    const [stateArray, setStateArray] = useState<any[]>(new Array(0));
    const [toggleState, setToggleState] = useState(false);

    let data: any[] = [];
    data = dt.filter(i => i.id <= items + 1);

    function sliceData() {
        setItems(Math.max(1, items - 10));
    }

    function removeData() {
        setItems(-1);
    }

    function addData() {
        setItems(Math.min(100, items + 10));
    }

    function addRowToArray() {
        const arr = new Array().concat(stateArray);
        setStateArray(arr);
    }

    console.log(1);

    return (
        <Flexbox>
            <Flexbox mt={70} mb={20} column>
                <Button label='Slice data' onClick={sliceData} />
                <Button label='Add data' onClick={addData} />
                <Button label='Remove data' onClick={removeData} />
                <Button label='arr state' onClick={addRowToArray} />
            </Flexbox>
            <Table data={data} />
        </Flexbox>
    )
}

const Table = (props: { data: any[] }) => {
    function onRowClick(row) {
        console.log(row)
    }

    let data = props.data;

    function onChange() {
        data = data.map(d => d.id === '123');
    }

    const tableColumns: SimpleTableTypes.Column[] = [
        { title: '#', dataIndex: 'id', width: 1 },
        { title: 'Fullname', dataIndex: 'name', render: (row, value) => <div style={{ fontSize: '1rem' }}>{value}</div> },
        { title: 'Age', dataIndex: 'age', width: 40, borders: 'right', alignment: 'flex-end' },
        { title: 'Passport ID', dataIndex: 'passport', alignment: 'flex-end' },
        { title: 'uuid', dataIndex: 'uuid', borders: 'right', width: 200, alignment: 'flex-end' },
        { title: 'uuidv2', dataIndex: 'uuidv2', width: 200, alignment: 'flex-end' },
        { title: 'texfield', dataIndex: 'uuidv2', width: 200, alignment: 'flex-end', render: () => <TextField onChange={onChange} /> }
    ]

    return (
        <Flexbox pr={35} pl={50} pt={0} column flex={1}>
            <SimpleTable
                data={data}
                onRowClick={onRowClick}
                // groupKey='groupId'
                // groups={groups}
                pagination={{
                    pageSize: 5,
                    pageNeighbours: 1
                }}
                // border='all'
                noDataComponent={<Flexbox flex={1} p={20} justifyContent='center'>А Данных Нет!</Flexbox>}
                columns={tableColumns}
                expandForm={expandForm}
                hideHeaders={true}
            />
        </Flexbox>
    )
}

const groups: SimpleTableTypes.Group[] = [
    { title: 'Первая группа', value: 0 },
    { title: 'Вторая группа', value: 1 },
    { title: 'Третья группа', value: 2 }
]



const expandForm = {
    key: 'expandForm',
    render: (row) => <div>{JSON.stringify(row)}</div>
}

const dt = [{ "id": 1, "name": "Taylor Parisian", "age": 19, "passport": "13ad98544bdbe6a0", "uuid": "184eaebf1782c069", "uuidv2": "a2e3a86cd5a19a85", "groupId": 2 }, { "id": 2, "name": "Terence Paucek", "age": 16, "passport": "b81c6a2243677fdc", "uuid": "5f5ad1aa0f6f1dd0", "uuidv2": "5fbd003023cdf4dd", "groupId": 2 }, { "id": 3, "name": "Ella Blanda", "age": 27, "passport": "6ea471d330929cfb", "uuid": "166e65e27b6b1fa3", "uuidv2": "94ce01198be7e0d3", "groupId": 0 }, { "id": 4, "name": "Melody Ryan", "age": 46, "passport": "090616a5981bf3b9", "uuid": "ff43d199f8b173d3", "uuidv2": "2785b52f96c9169b", "groupId": 1 }, { "id": 5, "name": "Hazel Ward IV", "age": 18, "passport": "e8c7d18bbc03a54f", "uuid": "bfe44f5884cf3dd2", "uuidv2": "ab628f92f9039eab", "groupId": 0 }, { "id": 6, "name": "Ms. Angel Bashirian", "age": 17, "passport": "4a3c26d5b3355359", "uuid": "6048e18592ab15be", "uuidv2": "c17508284acb8665", "groupId": 2 }, { "id": 7, "name": "Della Ernser", "age": 18, "passport": "3149a4fc562d85af", "uuid": "2467dd31f8b45534", "uuidv2": "a96b3236eff81d72", "groupId": 0 }, { "id": 8, "name": "Cecelia Kiehn II", "age": 22, "passport": "09590cced484c6c0", "uuid": "073a3a9e1a2356e7", "uuidv2": "8e5842bfff59f573", "groupId": 1 }, { "id": 9, "name": "Russell Hilpert", "age": 39, "passport": "412f49f8d59f91b2", "uuid": "7f258d36ed0463c5", "uuidv2": "dad9a7035d0ce7d2", "groupId": 2 }, { "id": 10, "name": "Allen Daniel", "age": 32, "passport": "f9c057eecb72ce32", "uuid": "3fdd9ce6020d541d", "uuidv2": "adcfcc98ead2ada7", "groupId": 2 }, { "id": 11, "name": "Kendra Gorczany", "age": 43, "passport": "b0740aceeb92ebac", "uuid": "2aa5fde963484fcb", "uuidv2": "b5c2b0b9420b1919", "groupId": 2 }, { "id": 12, "name": "Misty Toy IV", "age": 44, "passport": "d8f8efdc5cce1e5a", "uuid": "3ef767d0d635f9ce", "uuidv2": "725bf96c95e0a030", "groupId": 2 }, { "id": 13, "name": "Debbie Kunde", "age": 41, "passport": "fc31724f72330022", "uuid": "444510d7e7e8c182", "uuidv2": "8599306935088580", "groupId": 1 }, { "id": 14, "name": "Brandon Effertz", "age": 44, "passport": "fde0e58696c185a6", "uuid": "a942bb3dae58075e", "uuidv2": "91cefa3451c1453b", "groupId": 0 }, { "id": 15, "name": "Deborah Green Sr.", "age": 20, "passport": "4369f7cc53d55d35", "uuid": "d9248185f3bb56af", "uuidv2": "af1306c2851ec0cd", "groupId": 2 }, { "id": 16, "name": "Maryann Bahringer", "age": 34, "passport": "6e72e94985548ab2", "uuid": "5e18c69814a5bfcf", "uuidv2": "b02244b4338bfcd4", "groupId": 2 }, { "id": 17, "name": "Cindy Kuhlman", "age": 45, "passport": "c06fbc53bb1c66a8", "uuid": "4eee1d83ff9ac55b", "uuidv2": "2b4f7a3372837f15", "groupId": 0 }, { "id": 18, "name": "Mark Stiedemann", "age": 49, "passport": "b021ffb3aa2593b8", "uuid": "c7b2dd2852c60537", "uuidv2": "682256cef88ff1da", "groupId": 1 }, { "id": 19, "name": "John Senger DVM", "age": 27, "passport": "0688c2eb54579287", "uuid": "cfcddaef1bf744f3", "uuidv2": "0286b857ceee01fb", "groupId": 2 }, { "id": 20, "name": "Ernesto Hagenes", "age": 38, "passport": "4cef77a6849900fd", "uuid": "b250699f22aec969", "uuidv2": "3ec2d1777e04afa8", "groupId": 2 }, { "id": 21, "name": "Miss Cory Braun", "age": 18, "passport": "62c00d5ab5ee625e", "uuid": "0183d5d6314ce24f", "uuidv2": "ad6bdfda0ac7e531", "groupId": 1 }, { "id": 22, "name": "Jaime Koch I", "age": 39, "passport": "066a64927e958723", "uuid": "eb9e73f43cfc976e", "uuidv2": "ad9f951a366b38e8", "groupId": 1 }, { "id": 23, "name": "Gerardo Crooks", "age": 50, "passport": "96f6b129863599fc", "uuid": "0d7a76c87ae1a43b", "uuidv2": "d264a07d5abed660", "groupId": 0 }, { "id": 24, "name": "Herman Bartoletti", "age": 28, "passport": "bed59724f5362dc0", "uuid": "18e62c8817893007", "uuidv2": "d2ee1bc5eab3952a", "groupId": 2 }, { "id": 25, "name": "Violet Lebsack", "age": 22, "passport": "0c33bb0f27eae27a", "uuid": "827ee68953e77b50", "uuidv2": "7b4829e7812a62a8", "groupId": 2 }, { "id": 26, "name": "Edward Wiegand", "age": 36, "passport": "b07507737d6e4027", "uuid": "f662189a3d65431f", "uuidv2": "cee815e8fa9cd39a", "groupId": 0 }, { "id": 27, "name": "Wayne Schuster", "age": 44, "passport": "b31194fcfe259cea", "uuid": "36981381b1037651", "uuidv2": "8bc570a468fceb31", "groupId": 1 }, { "id": 28, "name": "Lillie Mitchell", "age": 44, "passport": "c170de81f012385a", "uuid": "676437e5d9bc6f4f", "uuidv2": "f4532e5c3d5d4257", "groupId": 0 }, { "id": 29, "name": "Evan Rowe II", "age": 22, "passport": "878ae161f091560d", "uuid": "3bc6473723d46ebc", "uuidv2": "8e90328ffb002df6", "groupId": 2 }, { "id": 30, "name": "Edmond Ryan", "age": 19, "passport": "f6d892ae32a8856d", "uuid": "4595400e523c6e3d", "uuidv2": "f2c0f13a29e6eb82", "groupId": 0 }, { "id": 31, "name": "Diane Murazik", "age": 30, "passport": "8d64a6c83ae4ef9d", "uuid": "56064d3bd0dc06ba", "uuidv2": "9bebf1922279cf44", "groupId": 2 }, { "id": 32, "name": "Mrs. Chester Murray", "age": 31, "passport": "d3f79209c1bd7fb5", "uuid": "6f7778c65e670f6c", "uuidv2": "c1e570163fecca18", "groupId": 0 }, { "id": 33, "name": "Alexander Pagac", "age": 21, "passport": "001caab073a44fba", "uuid": "517487d5de608679", "uuidv2": "f1907f84c526472e", "groupId": 2 }, { "id": 34, "name": "Frank Ebert", "age": 34, "passport": "9ed159abb032a83f", "uuid": "61c72b6707f2358a", "uuidv2": "9feba749a2b867a7", "groupId": 0 }, { "id": 35, "name": "Kristin Champlin Jr.", "age": 19, "passport": "0298689f8140794b", "uuid": "7a7f99944fc4ec27", "uuidv2": "8f8aaa75cdcfe1a8", "groupId": 0 }, { "id": 36, "name": "Lindsay Hauck", "age": 35, "passport": "fac5834fe73a0568", "uuid": "4349070cf0d7817b", "uuidv2": "4f351507ece23518", "groupId": 1 }, { "id": 37, "name": "Mrs. Al Adams", "age": 39, "passport": "670823a501e10a8e", "uuid": "12be7e8772e4fa02", "uuidv2": "2dfccafc2316a23f", "groupId": 2 }, { "id": 38, "name": "Shane Weber", "age": 49, "passport": "19a917fedf670763", "uuid": "3dfe8fa72a9b70ec", "uuidv2": "ba52c29fa4c30c30", "groupId": 0 }, { "id": 39, "name": "Matt Armstrong", "age": 28, "passport": "1f157bb9b9962b50", "uuid": "869cb4ee88f9a61f", "uuidv2": "4ea3e85ffd07069f", "groupId": 2 }, { "id": 40, "name": "Mr. Yvonne Pfannerstill", "age": 22, "passport": "54bec7566dbfd0e2", "uuid": "8e746f9cbdaa9c48", "uuidv2": "bf6c120ff46716a3", "groupId": 2 }, { "id": 41, "name": "Kay Greenfelder", "age": 40, "passport": "54118ff98627e090", "uuid": "35d7aea6988dcb95", "uuidv2": "23e3c83bec669072", "groupId": 0 }, { "id": 42, "name": "Dr. Katie Witting", "age": 38, "passport": "35b67c33b4c9b9d3", "uuid": "056fc9f8d112d179", "uuidv2": "c3cb4fc642571e58", "groupId": 1 }, { "id": 43, "name": "Eula Kassulke", "age": 25, "passport": "6508f8150acf269c", "uuid": "2185bd1804c1ef7e", "uuidv2": "c36765339bba5f1d", "groupId": 2 }, { "id": 44, "name": "Dolores Botsford MD", "age": 42, "passport": "3cc1cee3fbf3bb31", "uuid": "475b393b52d43627", "uuidv2": "cfdbcf1c940d3274", "groupId": 0 }, { "id": 45, "name": "Everett O'Connell", "age": 46, "passport": "213eb172195c833f", "uuid": "759234c15e54f1cf", "uuidv2": "14329793d55e35a2", "groupId": 0 }, { "id": 46, "name": "Mr. Michele Altenwerth", "age": 16, "passport": "010a2b116aa9573a", "uuid": "be1cbe8fa9bd1d7a", "uuidv2": "e92fe58d7252a331", "groupId": 0 }, { "id": 47, "name": "Mrs. Claudia Stoltenberg", "age": 29, "passport": "5fea9050de67f0c3", "uuid": "f1b0972982e9faef", "uuidv2": "4b4deeb1c2832696", "groupId": 0 }, { "id": 48, "name": "Ms. Adrienne Schulist", "age": 35, "passport": "adc58465bf9a2ad9", "uuid": "585d2c8dcf50c292", "uuidv2": "4884bd1c070fcff5", "groupId": 0 }, { "id": 49, "name": "Blanche Hegmann", "age": 36, "passport": "30eb0b1ade3ce20b", "uuid": "8688e45eb1aed2de", "uuidv2": "c51a93bd4a16e180", "groupId": 1 }, { "id": 50, "name": "Brenda Grady", "age": 28, "passport": "ada7108b04d07e86", "uuid": "1b4841a0b2249bcf", "uuidv2": "9c80906c95f4a6de", "groupId": 2 }, { "id": 51, "name": "Frank Fritsch", "age": 22, "passport": "ba153fa8f3172481", "uuid": "0bc9db76b8cc7555", "uuidv2": "63e872190b69ca01", "groupId": 0 }, { "id": 52, "name": "Cathy Thiel", "age": 27, "passport": "3f8eed2047fb12f4", "uuid": "5df6c9b0718a6708", "uuidv2": "d2268182c8404f61", "groupId": 2 }, { "id": 53, "name": "Leona Wuckert", "age": 35, "passport": "80bb3a79fc6a8bd0", "uuid": "c2702acb2419f7ce", "uuidv2": "12104cbab617091d", "groupId": 0 }, { "id": 54, "name": "Mrs. Victor Aufderhar", "age": 44, "passport": "13c93fad10e3e63d", "uuid": "71e19871bd64cf75", "uuidv2": "745fb5713e777da3", "groupId": 0 }, { "id": 55, "name": "Elisa Bashirian", "age": 38, "passport": "e9793d49fe155630", "uuid": "253ba22339e50564", "uuidv2": "8d927baeddc3299d", "groupId": 2 }, { "id": 56, "name": "Kenneth Reichert Sr.", "age": 21, "passport": "d3d066805af238bd", "uuid": "9453e7200e2573cd", "uuidv2": "af229f0466d25f95", "groupId": 2 }, { "id": 57, "name": "Nichole Corkery", "age": 48, "passport": "1519c2bee37d1517", "uuid": "197989e8e9a0bcbc", "uuidv2": "d93535b301b16253", "groupId": 0 }, { "id": 58, "name": "Kristen Altenwerth IV", "age": 27, "passport": "cb68a9fcbdbca16e", "uuid": "84ad8c25616935f7", "uuidv2": "ec8ca7ed1d2dca54", "groupId": 1 }, { "id": 59, "name": "Jonathon Hermiston Sr.", "age": 20, "passport": "23042ed4affc2ff6", "uuid": "518178b59a3ad773", "uuidv2": "ff867fad36760e27", "groupId": 1 }, { "id": 60, "name": "Lamar Schulist", "age": 32, "passport": "4b4378f9cb4a703f", "uuid": "1c8da4d7783d11fe", "uuidv2": "f81f5b074bbb90e7", "groupId": 0 }, { "id": 61, "name": "Brooke Cole Sr.", "age": 46, "passport": "37d737a650e749ce", "uuid": "35a2208e7186574a", "uuidv2": "eb6fc963e832f070", "groupId": 0 }, { "id": 62, "name": "Darrell Dickens", "age": 49, "passport": "89236f96772d8c84", "uuid": "b2621217e972d356", "uuidv2": "f71d045ce2c3cff6", "groupId": 0 }, { "id": 63, "name": "Robin Windler", "age": 18, "passport": "a26d5b3afd9f8041", "uuid": "35563cc1b560a39a", "uuidv2": "a078a94c711188d4", "groupId": 0 }, { "id": 64, "name": "Miss Doreen Herzog", "age": 39, "passport": "3913a09bada8c335", "uuid": "65e383cbcba17160", "uuidv2": "53dc421af684082b", "groupId": 1 }, { "id": 65, "name": "Louis Murazik", "age": 44, "passport": "d8f74d192270eadb", "uuid": "c9dc945ddcd98d25", "uuidv2": "f4552a436d3b1ad8", "groupId": 2 }, { "id": 66, "name": "Nicholas Mertz", "age": 39, "passport": "7c317635e6c20dba", "uuid": "6325f86da34a4277", "uuidv2": "6f0d713c8142c0d5", "groupId": 2 }, { "id": 67, "name": "Mr. Sherman Beier", "age": 42, "passport": "fded0f9870d636a8", "uuid": "9d803244e5b70d0c", "uuidv2": "8925443c8f3217cc", "groupId": 1 }, { "id": 68, "name": "Delia Stroman", "age": 33, "passport": "f163ea1b0081fff2", "uuid": "ac807da841f9b548", "uuidv2": "948b852d6181072e", "groupId": 1 }, { "id": 69, "name": "Mrs. Susan Muller", "age": 33, "passport": "e9f161888e8b9715", "uuid": "76b5c2b868f056ea", "uuidv2": "145712e84f50b334", "groupId": 0 }, { "id": 70, "name": "Dr. Ginger Ortiz", "age": 33, "passport": "1f5406a1ee045cd6", "uuid": "7bdaf485584aa1db", "uuidv2": "87362aa9ec0f518b", "groupId": 1 }, { "id": 71, "name": "Diane Crooks", "age": 34, "passport": "9d00be705e4ed5e8", "uuid": "a50d5b6bdfe8847b", "uuidv2": "a4248fecfe78e625", "groupId": 2 }, { "id": 72, "name": "Alice Treutel", "age": 50, "passport": "ba825f041f1d9ecf", "uuid": "8397903d40864bde", "uuidv2": "ff6bf08e4a39a9da", "groupId": 1 }, { "id": 73, "name": "Faith Anderson", "age": 27, "passport": "e8a6a11800dfc56c", "uuid": "eb82686f419576ea", "uuidv2": "c9284507c4c242d4", "groupId": 0 }, { "id": 74, "name": "Byron Nitzsche", "age": 16, "passport": "519dffe1b707ac95", "uuid": "8ccfd7a5b2a079ee", "uuidv2": "bb1317688135a7e8", "groupId": 0 }, { "id": 75, "name": "Felix Jerde III", "age": 34, "passport": "1ebfa69778326dae", "uuid": "78af21075fa2ba34", "uuidv2": "e91bd0d5dac6e94a", "groupId": 2 }, { "id": 76, "name": "Lyle Gerlach", "age": 33, "passport": "38314a13803e4dcc", "uuid": "9eca8f5ad71db6ef", "uuidv2": "642a79cbae098e12", "groupId": 1 }, { "id": 77, "name": "Eloise Daugherty Sr.", "age": 31, "passport": "00d28311c3a37f6c", "uuid": "9e5815d37cc99a8d", "uuidv2": "f50708e1a86fe986", "groupId": 0 }, { "id": 78, "name": "Domingo O'Keefe DDS", "age": 26, "passport": "5dad4dd055a6c03e", "uuid": "7a4724a161c5623d", "uuidv2": "a94046a15bd249a4", "groupId": 1 }, { "id": 79, "name": "Ruben Wilderman", "age": 17, "passport": "4e83cb648d2bc998", "uuid": "2466cb8350f66141", "uuidv2": "3e32b6e2bf78a8c3", "groupId": 2 }, { "id": 80, "name": "Mrs. Jaime Homenick", "age": 25, "passport": "92005e2408a0a8d3", "uuid": "a3d05a2f79080dc0", "uuidv2": "e645db0d6618f813", "groupId": 0 }, { "id": 81, "name": "Jody Stamm MD", "age": 47, "passport": "4bc46993cae4605d", "uuid": "18506ff44ae43419", "uuidv2": "4214c6fc725c1732", "groupId": 0 }, { "id": 82, "name": "Lynn Smith", "age": 47, "passport": "45171733f5ab3abd", "uuid": "a054d5aec852020a", "uuidv2": "b6dc238d95b0e92a", "groupId": 2 }, { "id": 83, "name": "Kristine Hoeger", "age": 23, "passport": "a7354e178b3790e2", "uuid": "1eb50e3fb7db3ca8", "uuidv2": "caf3f32bd1a05807", "groupId": 0 }, { "id": 84, "name": "Miss Merle Volkman", "age": 26, "passport": "0d6ce6789a5fbb8d", "uuid": "06fa36401e942f3c", "uuidv2": "f479f0b2182d5eac", "groupId": 0 }, { "id": 85, "name": "Opal Berge", "age": 32, "passport": "6ca4d820d8e7b03e", "uuid": "5d0f37858fd064c3", "uuidv2": "c8e2c96defaae15c", "groupId": 1 }, { "id": 86, "name": "Jeremy Gibson", "age": 17, "passport": "8223d815e86dba49", "uuid": "fbf3accd76b97c53", "uuidv2": "462b1c5338ee0b70", "groupId": 1 }, { "id": 87, "name": "Tamara Hagenes", "age": 19, "passport": "7fc08508752e1b09", "uuid": "9dfeba0bed6d64c3", "uuidv2": "e9185b0605514e1e", "groupId": 0 }, { "id": 88, "name": "Nelson Kuhic I", "age": 37, "passport": "979b6d2dae322ba8", "uuid": "92a173be79468603", "uuidv2": "993ccb3124465f49", "groupId": 0 }, { "id": 89, "name": "Vivian Lang", "age": 45, "passport": "357204dd8af577c6", "uuid": "5d8e3b3b10d037d4", "uuidv2": "17ec5e3b4ca88658", "groupId": 2 }, { "id": 90, "name": "Angel Kuhic IV", "age": 36, "passport": "c863731178912ded", "uuid": "ec08ba9508933769", "uuidv2": "647cda57488a7a38", "groupId": 2 }, { "id": 91, "name": "Miss Kelly Weber", "age": 34, "passport": "4c50795df08ff30b", "uuid": "f685455b3964d936", "uuidv2": "0453100c412a55f5", "groupId": 0 }, { "id": 92, "name": "Deanna West", "age": 42, "passport": "e31916303fec9a43", "uuid": "3cae8d1271ec2f4c", "uuidv2": "4fa1b577d69de5fa", "groupId": 2 }, { "id": 93, "name": "Freddie Kohler II", "age": 23, "passport": "f87c52baaca3e03e", "uuid": "a98f0f98b686557d", "uuidv2": "6995f44e8d0d3c2a", "groupId": 0 }, { "id": 94, "name": "Conrad DuBuque", "age": 48, "passport": "8b23f3ea3c011caa", "uuid": "5e43d27bdfa844fd", "uuidv2": "2d9119e39c2e679d", "groupId": 0 }, { "id": 95, "name": "Tami Pagac II", "age": 25, "passport": "a2d7009b6dff2645", "uuid": "3b9afcf90e21afa8", "uuidv2": "7708c8e27d8da389", "groupId": 0 }, { "id": 96, "name": "Deborah Hegmann", "age": 25, "passport": "c1aeb8632afdba17", "uuid": "289fb1fe404978f5", "uuidv2": "3edf68a964a3ef7b", "groupId": 0 }, { "id": 97, "name": "Julie Emmerich", "age": 36, "passport": "75a9a99ceb326766", "uuid": "2a06b2b76fbfc068", "uuidv2": "12b9d3921a7affd8", "groupId": 0 }, { "id": 98, "name": "Clayton Bradtke Sr.", "age": 16, "passport": "f6fafca2121f1d4f", "uuid": "a04896132f34355c", "uuidv2": "11ab6ffd8f29ccb5", "groupId": 0 }, { "id": 99, "name": "Perry Trantow", "age": 36, "passport": "0e2a45807656e3d5", "uuid": "54c461133ec1af16", "uuidv2": "5c14fd3fb6b4968f", "groupId": 2 }, { "id": 100, "name": "Mrs. Janet Runolfsson", "age": 46, "passport": "b58ad4ee0508e93e", "uuid": "1f6b154fd79656fd", "uuidv2": "2f5900b65c09019b", "groupId": 1 }]