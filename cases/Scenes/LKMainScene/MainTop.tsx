import React from 'react';
import { Timeline } from '../../../src';

const MainTop = () => {
    return (
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
    )
}

export default MainTop;