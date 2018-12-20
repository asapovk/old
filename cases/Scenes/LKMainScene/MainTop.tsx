import React from 'react';
import { Timeline } from '../../../src';

const MainTop = () => {
    return (
        <Timeline
            dots={[
                { color: "black", bottomTitle: "Сталинградская битва", value: "17 июля 1942" },
                { color: "black", bottomTitle: "Атаку под Курском", value: "5 июля 1943" },
                { color: "black", bottomTitle: "Освобождение Рима", value: "4 июня 1944" }
            ]}
            leftTitle="22 июня 1941"
            rightTitle="9 мая 1945"
        />
    )
}

export default MainTop;