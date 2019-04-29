/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Fragment } from "react";
import { Flexbox, D3, T1, HR } from "../index";
import Types from "./types";

export default (props: Types.ItemsProps) => {
	const { data, styles, items, opened } = props;
	const breakpoints = props.breakpoints || [4, 6];

	return (
		<Fragment>
			{opened.map((dataIndex, index) => (
				<Flexbox
					column
					key={"li-" + index}
					css={styles.item.container(opened.length > breakpoints[0])}
					children={items.map((item, gi) => (
						<Fragment key={"li-gr-" + gi}>
							<div css={styles.item.header(gi)}>
								<div>
									<D3
										ellipsis
										underline
										children={
											item.title
												? item.title
												: item.titleKey && data[dataIndex][item.titleKey]
										}
										icon={
											item.iconKey && data[dataIndex][item.iconKey]
												? data[dataIndex][item.iconKey]
												: undefined
										}
									/>
								</div>
							</div>
							<Grid
								rows={item.rows}
								data={data}
								index={index}
								dataIndex={dataIndex}
								styles={styles}
								opened={opened}
								breakpoints={breakpoints}
							/>
						</Fragment>
					))}
				/>
			))}
		</Fragment>
	);
};

const Grid = props => {
	const { rows, data, index, dataIndex, styles, opened, breakpoints } = props;
	const isFirst = index === 0;

	return rows
		.filter(row => data[dataIndex][row.dataKey])
		.map((row, ri) => (
			<Flexbox key={"li-gr-row-" + ri} css={styles.item.grid}>
				{(opened.length < breakpoints[0] || isFirst) && row.name && (
					<T1
						color="lowlight"
						css={css({ flexShrink: 0 })}
						children={row.name}
					/>
				)}
				{row.name && (opened.length < breakpoints[1] || isFirst) && (
					<HR
						dotted
						color="light"
						css={css({ margin: "0.35rem 0.5rem", flex: 1 })}
					/>
				)}
				<T1
					css={css({ flexShrink: 0 })}
					children={data[dataIndex][row.dataKey]}
					format={row.format}
					unit={row.unit}
				/>
			</Flexbox>
		));
};
