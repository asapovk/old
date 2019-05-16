import React, { Fragment } from 'react';
import { utils } from '../../../src';
import { UIElement } from '../../../src/extra/Constructor';
import { Constructor } from '../../../src/extra/Constructor';
import '../../../src/styles/scss/main.scss';

const template: UIElement = {
    $: "flex",
    flexDirection: "column",
    pr: 40,
    pl: 40,
    $children: [
        {
            $: "title",
            text: "Конструктор",
            style: {
                marginTop: 0
            }
        },
        {
            $: "flex",
            pb: 10,
            $children: [
                {
                    $: "flex",
                    pr: 10,
                    $children: {
                        $: "select",
                        $id: "SELECT_1",
                        $connect: ["TEST_TEXTFIELD"],
                        $required: true,
                        label: "Выбор 1",
                        defaultValue: { text: "YES", value: 1 },
                        options: [
                            { text: "YES", value: 1 },
                            { text: "Нужно выбрать YES", value: 2 }
                        ],
                    },
                },
                {
                    $: "flex",
                    pl: 10,
                    pt: 12,
                    $children: {
                        $: "checkbox",
                        $id: "CHECKBOX_1",
                        $connect: ["TEST_TEXTFIELD"],
                        label: "Показать текстовое поле"
                    },
                },
            ]
        },
        {
            $: "flex",
            pb: 20,
            $children: {
                $: "textfield",
                $id: "TEST_TEXTFIELD",
                $required: true,
                $conditions: {
                    visible: {
                        if: [{ CHECKBOX_1: true }],
                        ifnot: [{ SELECT_1: 2 }]
                    }
                },
                label: "test",
            },
        },
        {
            $id: "BUTTON",
            $: "button",
            label: "Check button",
        },
        {
            $: "divider"
        },
        {
            $: "spoiler",
            label: "Показать спойлер",
            $children: {
                $: "any",
                $children: (
                    <Fragment>
                        <h3>Mystery derelict found at sea</h3>
                        <p><em>Vigilant</em> Arrives With Helpless Armed New Zealand Yacht in Tow. One Survivor and Dead Man Found Aboard. Tale of Desperate Battle and Deaths at Sea. Rescued Seaman Refuses Particulars of Strange Experience. Odd Idol Found in His
                        Possession. Inquiry to Follow.</p>
                        <p>The Morrison Co.'s freighter <em>Vigilant</em>, bound from Valparaiso, arrived this morning at its wharf in Darling Harbour, having in tow the battled and disabled but heavily armed steam yacht Alert of Dunedin, N.Z., which was sighted
                        April 12th in S. Latitude 34° 21', W. Longitude 152° 17', with one living and one dead man aboard.</p>
                    </Fragment>
                )
            }
        },
        {
            $: "divider"
        },
        {
            $: "datepicker",
            format: "MMMM YYYY"
        },
        {
            $: "divider"
        },
        {
            $: "flex",
            $children: [
                {
                    $: "flex",
                    flex: 1,
                    $children: {
                        $: "any",
                        $children: (
                            <div>
                                The Morrison Co.'s freighter in Darling Harbour, having in tow the battled, W. Longitude 152° 17', with one living and one dead man aboard.
                            </div>
                        )
                    }
                },
                {
                    $: "flex",
                    flex: 0,
                    pl: 20,
                    $children: {
                        $: "attachment",
                    },
                }
            ]
        },
        {
            $: "divider"
        },
        {
            $: "flex",
            pt: 100
        },
    ]
}

export default () => (
    <Constructor
        template={template}
        onAction={(data, onSuccess) => {
            utils.notification({
                title: "Action called",
                text: JSON.stringify(data),
            });

            setTimeout(() => {
                utils.notification({
                    title: "onSuccess called",
                    text: JSON.stringify(data),
                });
                onSuccess();
            }, 1000);

        }}
        async
        onChange={(data, onSuccess, onError) => {
            onSuccess()
        }}
    />
)