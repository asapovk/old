import React from 'react';
import { Timeline, D2, C1 } from '../../../src';

const MainTop = () => {
    return (
        <>
            <D2
                underline={true}
                children='Ноябрь 2018'
                action={<C1 link>Выбрать месяц</C1>}
            />
            <Timeline
                dots={[
                    { color: "black", bottomTitle: "Задолженность", value: "8 491" },
                    { color: "black", bottomTitle: "Аванс", value: "0" },
                    { color: "black", bottomTitle: "Начислено", value: "1 256" },
                    { color: "black", bottomTitle: "Оплачено", value: "5 010" }
                ]}
                leftTitle="10 октября"
                rightTitle="10 ноября"
            />
        </>
    )
}

export default MainTop;