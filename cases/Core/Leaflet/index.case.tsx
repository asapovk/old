/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Leaflet, Flexbox, H1 } from '../../../src';

export default () => {

  return (
    <Flexbox p={20}>
      <Leaflet
        groupKey='groupId'
        nameKey='serviceName'
        capacity={[10, 2]}
        default={0}
        // groups={[
        //   {
        //     label: 'Содержание жилого помещения',
        //     value: 1
        //   },
        //   {
        //     label: 'Коммунальные услуги',
        //     value: 2
        //   },
        //   {
        //     label: 'Иные услуги',
        //     value: 3
        //   },
        // ]}
        items={[
          {
            titleKey: 'serviceName',
            iconKey: 'glyph',
            rows: [
              {
                name: 'Долг/Аванс',
                dataKey: 'amountBalance',
                format: 'currency',
                unit: 'rub'
              },
              {
                name: 'Тариф',
                dataKey: 'tariff',
                format: 'currency',
                unit: 'rub'
              },
              {
                name: 'Начислено',
                dataKey: 'amountCharged',
                format: 'currency',
                unit: 'rub'
              },
              {
                name: 'Оплачено',
                dataKey: 'amountPaidPrevPeriod',
                format: 'currency',
                unit: 'rub'
              },
              {
                name: 'К оплате',
                dataKey: 'amountToPay',
                format: 'currency',
                unit: 'rub'
              },
            ]
          },
          {
            title: 'Поставщик',
            rows: [
              {
                dataKey: ''
              }
            ]
          }
        ]}
        data={info}
      />
    </Flexbox>
  )
}

const info = [
  {
    "amountBalance": "536.04",
    "amountCharged": "536.04",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "527.15",
    "amountRecount": "0.00",
    "amountToPay": "544.93",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "repair",
    "groupId": 1,
    "groupName": "Начисления за содержание жилого помещения, взнос на капитальный ремонт",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "701",
    "serviceName": "Взнос на кап.ремонт",
    "tariff": "9.07",
    "type": 0
  },
  {
    "amountBalance": "1650.07",
    "amountCharged": "1650.07",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "1622.70",
    "amountRecount": "0.00",
    "amountToPay": "1677.44",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "other",
    "groupId": 1,
    "groupName": "Начисления за содержание жилого помещения, взнос на капитальный ремонт",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "225",
    "serviceName": "Содержание жилого помещения и вся хурма",
    "tariff": "27.92",
    "type": 0
  },
  {
    "amountBalance": "15.18",
    "amountCharged": "15.18",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "14.93",
    "amountRecount": "0.00",
    "amountToPay": "15.43",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "other",
    "groupId": 1,
    "groupName": "Начисления за содержание жилого помещения, взнос на капитальный ремонт",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "702",
    "serviceName": "Тепловая энергия ОДН",
    "tariff": "2599.94",
    "type": 0
  },
  {
    "amountBalance": "2.25",
    "amountCharged": "2.25",
    "amountPaid": "4.50",
    "amountPaidPrevPeriod": "2.21",
    "amountRecount": "0.00",
    "amountToPay": "0.00",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "other",
    "groupId": 1,
    "groupName": "Начисления за содержание жилого помещения, взнос на капитальный ремонт",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "703",
    "serviceName": "Теплоноситель ОДН",
    "tariff": "22.53",
    "type": 0
  },
  {
    "amountBalance": "2.23",
    "amountCharged": "2.23",
    "amountPaid": "4.46",
    "amountPaidPrevPeriod": "2.19",
    "amountRecount": "0.00",
    "amountToPay": "0.00",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "water_cold",
    "groupId": 1,
    "groupName": "Начисления за содержание жилого помещения, взнос на капитальный ремонт",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "226",
    "serviceName": "Холодное водоснабжение ОДН",
    "tariff": "22.28",
    "type": 0
  },
  {
    "amountBalance": "24.83",
    "amountCharged": "24.83",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "24.42",
    "amountRecount": "0.00",
    "amountToPay": "25.24",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "electricity",
    "groupId": 1,
    "groupName": "Начисления за содержание жилого помещения, взнос на капитальный ремонт",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "53",
    "serviceName": "Электроснабжение ОДН",
    "tariff": "5.29",
    "type": 0
  },
  {
    "amountBalance": "560.46",
    "amountCharged": "469.54",
    "amountPaid": "66.00",
    "amountPaidPrevPeriod": "551.16",
    "amountRecount": "0.00",
    "amountToPay": "412.84",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "other",
    "groupId": 2,
    "groupName": "Начисления за коммунальные услуги",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "54",
    "serviceName": "Водоотведение",
    "tariff": "27.62",
    "type": 0
  },
  {
    "amountBalance": "254.00",
    "amountCharged": "254.00",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "249.79",
    "amountRecount": "0.00",
    "amountToPay": "258.21",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "gas",
    "groupId": 2,
    "groupName": "Начисления за коммунальные услуги",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "82",
    "serviceName": "Газоснабжение",
    "tariff": "63.5",
    "type": 0
  },
  {
    "amountBalance": "2765.82",
    "amountCharged": "2765.82",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "2719.94",
    "amountRecount": "0.00",
    "amountToPay": "2811.70",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "other",
    "groupId": 2,
    "groupName": "Начисления за коммунальные услуги",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "57",
    "serviceName": "Отопление",
    "tariff": "2599.94",
    "type": 0
  },
  {
    "amountBalance": "777.95",
    "amountCharged": "303.67",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "765.05",
    "amountRecount": "0.00",
    "amountToPay": "316.57",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "other",
    "groupId": 2,
    "groupName": "Начисления за коммунальные услуги",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "704",
    "serviceName": "Тепловая энергия",
    "tariff": "2599.94",
    "type": 0
  },
  {
    "amountBalance": "115.44",
    "amountCharged": "45.06",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "113.53",
    "amountRecount": "0.00",
    "amountToPay": "46.97",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "OTHER",
    "groupId": 2,
    "groupName": "Начисления за коммунальные услуги",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "705",
    "serviceName": "Теплоноситель",
    "tariff": "22.53",
    "type": 1
  },
  {
    "amountBalance": "337.95",
    "amountCharged": "334.20",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "332.34",
    "amountRecount": "0.00",
    "amountToPay": "339.81",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "water_cold",
    "groupId": 2,
    "groupName": "Начисления за коммунальные услуги",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "227",
    "serviceName": "Холодное водоснабжение",
    "tariff": "22.28",
    "type": 1
  },
  {
    "amountBalance": "1052.71",
    "amountCharged": "529.00",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "1035.25",
    "amountRecount": "0.00",
    "amountToPay": "546.46",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "electricity",
    "groupId": 2,
    "groupName": "Начисления за коммунальные услуги",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "105",
    "serviceName": "Электроснабжение",
    "tariff": "5.29",
    "type": 1
  },
  {
    "amountBalance": "40.00",
    "amountCharged": "40.00",
    "amountPaid": "80.00",
    "amountPaidPrevPeriod": "39.34",
    "amountRecount": "0.00",
    "amountToPay": "0.00",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "gas",
    "groupId": 3,
    "groupName": "Начисления за иные услуги",
    "isFixed": false,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "229",
    "serviceName": "ТО газового оборудования",
    "tariff": "40",
    "type": 1
  },
  {
    "amountBalance": "0.00",
    "amountCharged": "106.38",
    "amountPaid": "0.00",
    "amountPaidPrevPeriod": "0.00",
    "amountRecount": "0.00",
    "amountToPay": "106.38",
    "feePercent": 0,
    "feeType": 0,
    "glyph": "insurance",
    "groupId": 3,
    "groupName": "Начисления за иные услуги",
    "isFixed": true,
    "puAccount": null,
    "puId": "10001",
    "serviceCode": "164",
    "serviceName": "Добровольное страхование",
    "tariff": "1.8",
    "type": 1
  }
]