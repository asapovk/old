/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Flexbox, Table, Button, D2, H2, C1, HR, D4 } from '../../../src';

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
                header='К оплате'
                children={[
                    <ServiceGroup name='Коммунальные услуги' data={data} key={1} />,
                    <ServiceGroup name='Содержание жилого помещения' data={data} key={2} />,
                    <ServiceGroup name='Прочие услуги' data={data} key={3} />
                ]}
                bar={[
                    <D2 format='rub' key={1}>4546,45</D2>,
                    <C1 key={2} css={css({ marginTop: '0.25rem' })} >Итого к оплате до 10.12.18</C1>,
                    <Button label='Оплатить' decoration='highlight' key={3} css={css({ marginTop: '1.5rem' })} />
                ]}
            />
            <Section
                header='Приборы учета'
                children={[
                    <ServiceGroup data={dataDevices} key={1} />,
                ]}
            />
        </div>
    )
}

const Section = (props) => {
    return (
        <div>
            <H2 underline={true} action={props.headerAction}>{props.header}</H2>
            <Flexbox>
                <Flexbox flex={1} flexDirection='column'>
                    {props.children}
                </Flexbox>
                <Flexbox flexBasis={'14rem'} flexDirection='column' css={css({ marginLeft: '2.5rem', marginTop: '4.25rem' })}>
                    {props.bar && <HR css={css({ marginBottom: '1.5rem' })} />}
                    {props.bar}
                    {props.bar && <HR css={css({ marginTop: '1.5rem' })} />}
                </Flexbox>
            </Flexbox>
        </div>
    )
}

const ServiceGroup = (props) => {
    const tableColumns = [
        { dataIndex: 'label' },
        { dataIndex: 'amount', width: 80 },
    ]
    return (
        <div css={css({ marginTop: '2rem' })}>
            {props.name && <C1 bold css={css({ marginBottom: '1rem' })}>{props.name}</C1>}
            <Table
                columns={tableColumns}
                data={props.data}
                hideHeaders={true}
            />
        </div>
    )
}

export default Main;