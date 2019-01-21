/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Flexbox, Table, Button, D2, H2, T1 } from '../../../src';

const Main = () => {
    const data = [
        { label: 'Газоснабжение', amount: '683,11₽' }
    ]
    return (
        <div>
            <Section
                header='К оплате'
                children={[
                    <ServiceGroup name='Коммунальные услуги' data={data} key={1} />,
                    <ServiceGroup name='Содержание жилого помещения' data={data} key={2} />,
                    <ServiceGroup name='Прочие услуги' data={data} key={3} />
                ]}
                bar={[
                    <D2 key={1}>4 546,45₽</D2>,
                    <T1 key={2}>Итого к оплате до 10.12.18</T1>,
                    <Button label='Оплатить' decoration='highlight' key={3} />
                ]}
            />
            <Section
                header='Приборы учета'
                children={[
                    <ServiceGroup data={data} key={1} />,
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
                <Flexbox flexBasis={'14rem'} flexDirection='column' css={css({ marginLeft: '2.5rem' })}>
                    {props.bar}
                </Flexbox>
            </Flexbox>
        </div>
    )
}

const ServiceGroup = (props) => {
    const tableColumns = [
        { dataIndex: 'label' },
        { dataIndex: 'amount', width: 60 },
    ]
    return (
        <div css={css({ marginTop: '1rem' })}>
            {props.name && <T1 bold css={css({ marginBottom: '1rem' })}>{props.name}</T1>}
            <Table
                columns={tableColumns}
                data={props.data}
            />
        </div>
    )
}

export default Main;