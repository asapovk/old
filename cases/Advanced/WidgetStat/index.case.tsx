import React, { Fragment } from 'react';
import { Flexbox, WidgetStat, Icon } from '../../../src';
import '../../../src/Styles/scss/main.scss';

class WidgetStatStory extends React.Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <Flexbox alignContent="center" justifyContent="center" pr={30} pl={30}>
                <Flexbox flex={1} alignItems={"flex-start"}>
                    <Flexbox p={10} flex={1}>
                        <WidgetStat
                            title="ПОЛЬЗОВАТЕЛЕЙ"
                            subtitle="загеристрированно"
                            subtitle2="за последнии 30 дней"
                            value1="940 К"
                            value2="1 419"
                            actionTitle="Найти пользователя"
                            onClick={() => { }}
                        />
                    </Flexbox>
                    <Flexbox p={10} flex={1}>
                        <WidgetStat
                            title="ЛИЦЕВЫХ СЧЕТОВ"
                            subtitle="подключено"
                            subtitle2="за последнии 30 дней"
                            value1="1.23 M"
                            value2="101 941"
                            actionTitle="Найти лицевой счет"
                            onClick={() => { }}
                        />
                    </Flexbox>
                    <Flexbox p={10} flex={1}>
                        <WidgetStat
                            title="ЧЕКОВ"
                            subtitle="фискализированно"
                            subtitle2="за последнии 30 дней"
                            value1="14.3 К"
                            value2="9 041"
                            actionTitle="Найти чек"
                            onClick={() => { }}
                        >
                            <Flexbox column>
                                <Flexbox p={10}>
                                    <Flexbox flex={1}>
                                        <Icon type="check" />
                                    </Flexbox>
                                    <Flexbox>Done</Flexbox>
                                </Flexbox>
                                <Flexbox p={10} pt={10}>
                                    <Flexbox flex={1}>
                                        <Icon type="check" />
                                    </Flexbox>
                                    <Flexbox>Done</Flexbox>
                                </Flexbox>
                                <Flexbox p={10} pt={10}>
                                    <Flexbox flex={1}>
                                        <Icon type="check" />
                                    </Flexbox>
                                    <Flexbox>Done</Flexbox>
                                </Flexbox>
                            </Flexbox>
                            <div>123</div>
                        </WidgetStat>
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        )
    }
}

export default WidgetStatStory