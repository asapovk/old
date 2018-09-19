import React, { Fragment } from 'react';
import { Viewport, Select } from '../../src';

const flexCentered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const selectOptions = [
    { text: "Gregory Oberbrunner MD", value: "greg" },
    { text: "Craig O'Conner", value: "craig" },
    { text: "Annette Kshlerin", value: "ann" },
    { text: "Marjorie Hirthe", value: "marj" },
    { text: "Israel Flatley", value: "isra" },
    { text: "Kristin Smith", value: "kris" },
    { text: "Dr. Hilda Willms", value: "hilda" },
    { text: "Eric Gerhold", value: "eric" },
    { text: "Laurie Stiedemann", value: "laurie" },
    { text: "Irving Hauck", value: "irv" }
];

class SelectStory extends React.Component {

    render() {
        return (
            <Fragment>
                <Select
                    label='Multiselect'
                    search={true}
                    placeholder='Select some'
                    defaultValue={['irv', 'greg']}
                    options={selectOptions}
                    style={{ padding: '40px' }}
                    clearable={true}
                    multiselect={true}
                    // disabled={true}
                    onChange={(value) => console.log('Multi', value)}
                />
                <Select
                    label='Select'
                    search={true}
                    placeholder='Select some'
                    defaultValue={'ann'}
                    options={selectOptions}
                    clearable={true}
                    style={{ padding: '40px' }}
                    //disabled={true}
                    onChange={(value) => console.log('Singe', value)}
                />
            </Fragment>
        )
    }
}

export default SelectStory