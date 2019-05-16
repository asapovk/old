import React, { Fragment } from 'react';
import { Select } from '../../../src';
import '../../../src/styles/scss/main.scss';

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
                    defaultValue={[selectOptions[0], selectOptions[1]]}
                    options={selectOptions}
                    style={{ padding: '40px' }}
                    clearable={true}
                    multiselect={true}
                    // disabled={true}
                    onChange={(value) => console.log('Multi', value)}
                />
                <Select
                    label='Small size'
                    size="small"
                    search={true}
                    placeholder='Select some'
                    defaultValue={selectOptions[0]}
                    options={selectOptions}
                    clearable={true}
                    style={{ padding: '40px' }}
                    //disabled={true}
                    onChange={(value) => console.log('Singe', value)}
                />
                <Select
                    label='Large size'
                    size="large"
                    search={true}
                    placeholder='Select some'
                    defaultValue={selectOptions[1]}
                    options={selectOptions}
                    clearable={true}
                    style={{ padding: '40px' }}
                    //disabled={true}
                    onChange={(value) => console.log('Singe', value)}
                />
                <Select
                    label='Extra large size'
                    size="extra-large"
                    search={true}
                    placeholder='Select some'
                    value={selectOptions[1]}
                    options={selectOptions}
                    clearable={true}
                    style={{ padding: '40px' }}
                    disabled={true}
                    onChange={(value) => console.log('Singe', value)}
                />
            </Fragment>

        )
    }
}

export default SelectStory