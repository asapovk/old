import React from "react"
import { Flexbox, Widget, Title } from "../../../src/"
import { InlineDateFilter } from "../../../src"
import moment from 'moment'

export default () => {
	return (
		<div style={{ margin: 40 }}>
			<div style={{ width: '100%', paddingBottom: 40 }}>
				<Title>Date Filter</Title>
				<Flexbox pt={20} flex={1}>
					<Widget style={{ padding: '1rem', width: '100%' }}>
						<InlineDateFilter
							title="Выберите период"
							defaultYear={moment().format('YYYY')}
							defaultMonth={moment().format('MM')}
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
