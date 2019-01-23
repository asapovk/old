/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { D4 } from '../../../src';
import { Section, ServiceGroup } from './components';

const Main = () => {
    const data = [
        { label: 'Газоснабжение', amount: <D4 format='rub'>683,11</D4> }
    ]

    const dataDevices = [
        { label: 'Счетчик', amount: <D4 format='volume'>683</D4> }
    ]
    return (
        <div css={css({ marginBottom: '1.25rem' })}>
            <Section
                header='Начисления'
                children={[
                    <ServiceGroup name='Коммунальные услуги' data={data} key={1} />,
                    <ServiceGroup name='Содержание жилого помещения' data={data} key={2} />,
                    <ServiceGroup name='Прочие услуги' data={data} key={3} />
                ]}
                barHR
                barMarginTop='4.25rem'
            // bar={[
            //     <D2 format='rub' key={1}>4546,45</D2>,
            //     <C1 key={2} css={css({ marginTop: '0.25rem' })} >Итого к оплате до 10.12.18</C1>,
            //     <Button label='Оплатить' decoration='highlight' key={3} css={css({ marginTop: '1.5rem' })} />
            // ]}
            />
            <Section
                header='Приборы учета'
                children={[
                    <ServiceGroup data={dataDevices} key={1} />,
                ]}
                barHR
                barMarginTop='4.25rem'
            />
        </div>
    )
}

export default Main;