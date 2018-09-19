import React, { Fragment } from 'react';
import { Viewport, Flexbox, WidgetStat, Icon } from '../../src';

class WidgetStatStory extends React.Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <Fragment>
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
                                <Flexbox>
                                    <Flexbox flex={1}>
                                        <Icon type="check" />
                                    </Flexbox>
                                    <Flexbox>Done</Flexbox>
                                </Flexbox>
                                <Flexbox pt={10}>
                                    <Flexbox flex={1}>
                                        <Icon type="check" />
                                    </Flexbox>
                                    <Flexbox>Done</Flexbox>
                                </Flexbox>
                                <Flexbox pt={10}>
                                    <Flexbox flex={1}>
                                        <Icon type="check" />
                                    </Flexbox>
                                    <Flexbox>Done</Flexbox>
                                </Flexbox>
                            </Flexbox>
                        </WidgetStat>
                    </Flexbox>
                </Flexbox>
            </Fragment>
        )
    }
}

export default WidgetStatStory