import React, { useState, useLayoutEffect, useEffect } from "react"
import { Flexbox, Widget, Title } from "../../../src/"
import { InlineFilter, InlineDateFilter } from "../../../src"
import moment from 'moment'

export default () => {

	const row1 = ['Овощи', 'Фрукты', 'Ягоды']
	const row2 = ['Огурцы', 'Капуска', 'Помидоры', 'Свекла']
	const mmmArray = ['ALL', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	const [mmm, setMMM] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (mmm < 12) {
				setMMM(mmm + 1)
			} else {
				setMMM(0)
			}
		}, 100);
	}, [mmm]);

	return (
		<div style={{ margin: 40 }}>
			<div style={{ width: '100%', paddingBottom: 40 }}>
				<Title>General</Title>
				<Flexbox pt={20} flex={1}>
					<Widget style={{ padding: '1rem', width: '100%' }}>
						<InlineFilter
							defaultValues={[
								row1.map(label =>
									({ index: label, label, selected: false, })
								),
								row2.map(label =>
									({ index: label, label, selected: false, })
								),
							]}
						/>
					</Widget>
				</Flexbox>
			</div>
			<div style={{ width: '100%', paddingBottom: 40 }}>
				<Title>Disabled</Title>
				<Flexbox pt={20} flex={1}>
					<Widget style={{ padding: '1rem', width: '100%' }}>
						<InlineFilter
							disabled
							values={[
								row1.map(label =>
									({ index: label, label, selected: false, })
								),
								row2.map(label =>
									({ index: label, label, selected: false, })
								),
							]}
						/>
					</Widget>
				</Flexbox>
			</div>
			<div style={{ width: '100%', paddingBottom: 40 }}>
				<Title>Date Filter</Title>
				<Flexbox pt={20} flex={1}>
					<Widget style={{ padding: '1rem', width: '100%' }}>
						<InlineDateFilter
							title="Выберите период"
							defaultYear={moment().format('YYYY')}
							month={mmmArray[mmm]}
							onChange={(year, month) => {
								console.log(year, month)
							}}
						/>
					</Widget>
				</Flexbox>
			</div>
		</div>
	)
}
