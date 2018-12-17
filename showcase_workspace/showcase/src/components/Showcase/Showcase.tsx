import * as React from "react";
import { getConfig } from '../getConfig'
import core from '../../core';

export default () => {

	console.log(core.cases);

	return (
		<>
			<div>Hello there{getConfig('plugins')}</div>
		</>
	);
}
