import React from 'react';
import { Flexbox, Tabs } from '../../../src';

const menuElements = [
    { title: 'Главная', path: "/1", },
    { title: 'Блог', path: "/2", },
    { title: 'Профиль', path: "/3", },
];

class TabsStory extends React.Component {
    state = {
        activeTab: 0
    }
    render() {
        return (
            <div>
                <Flexbox column flex={1}>
                    <Tabs
                        alignMobile={'flex-start'}
                        items={menuElements}
                        activeItem={this.state.activeTab}
                        onClick={(item, activeTab) => {
                            this.setState({ activeTab })
                        }}
                    />
                </Flexbox>
                <Flexbox column flex={1}>
                    <Tabs
                        alignMobile={'flex-end'}
                        items={menuElements}
                        activeItem={this.state.activeTab}
                        onClick={(item, activeTab) => {
                            this.setState({ activeTab })
                        }}
                    />
                </Flexbox>
                <Flexbox column flex={1}>
                    <Tabs
                        alignMobile={'center'}
                        items={menuElements}
                        activeItem={this.state.activeTab}
                        onClick={(item, activeTab) => {
                            this.setState({ activeTab })
                        }}
                    />
                </Flexbox>
            </div>
        )
    }
}

export default TabsStory