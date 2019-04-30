import React from 'react';
import { Flexbox, Tabs, Select } from '../../../src';

const menuElements = [
    { title: 'Главная', path: "/1", },
    { title: 'Блог', path: "/2", },
    { title: 'Профиль', path: "/3", },
];

class TabsStory extends React.Component {
    state = {
        activeTab: 0,
        alignMobile: 'flex-end'
    }
    render() {
        return (
            <div>
                <Flexbox flex={1} p={100}>
                    <Flexbox flex={1}>
                        <Tabs
                            alignMobile={this.state.alignMobile as any}
                            items={menuElements}
                            activeItem={this.state.activeTab}
                            onClick={(item, activeTab) => {
                                this.setState({ activeTab })
                            }}
                        />
                    </Flexbox>
                </Flexbox>

                <Flexbox column flex={1} p={20}>
                    <Select
                        label="alignMobile"
                        onChange={(alignMobile) => this.setState({ alignMobile })}
                        options={[
                            { text: 'flex-start', value: 'flex-start' },
                            { text: 'center', value: 'center' },
                            { text: 'flex-end', value: 'flex-end' }
                        ]} />
                </Flexbox>
            </div>
        )
    }
}

export default TabsStory