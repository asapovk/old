import * as React from "react";
import core from '../../core';
import { Menu } from '../Menu';

interface ShowcaseProps {

}

interface Showcase {
	state: {
		currentCase: React.ReactNode,
		isMenuOpen: boolean
	}
}

class Showcase extends React.Component<ShowcaseProps> {

	state = {
		currentCase: null as React.ReactNode,
		isMenuOpen: false
	}

	componentDidMount() {
		document.addEventListener('contextmenu', this._handleContextMenu);
		const cachedCaseID = localStorage.getItem('currentCaseID') as string;
		const cachedCase = cachedCaseID && this.findCase(core.cases, cachedCaseID);
		this.setState({
			currentCase: cachedCase ? cachedCase : null
		});
	};

	componentWillUnmount() {
		document.removeEventListener('contextmenu', this._handleContextMenu);
	}

	_handleContextMenu = (event) => {
		if (!event.altKey) {
			event.preventDefault();
			this.setState({ isMenuOpen: !this.state.isMenuOpen });
		}
	};

	findCase(cases, caseID: string) {
		let findedCase = null;
		Object.keys(cases).map(name => {
			if (typeof cases[name] === 'object' && findedCase === null) {
				if (cases[name].node && cases[name].id === caseID) {
					findedCase = cases[name].node;
				} else findedCase = this.findCase(cases[name], caseID);
			}
		})
		return findedCase
	}

	changeCase = (currentCase: React.ReactNode, currentCaseID: string) => {
		this.setState({
			currentCase: currentCase,
			isMenuOpen: false
		});
		localStorage.setItem('currentCaseID', currentCaseID);
	}

	render() {


		const { isMenuOpen, currentCase } = this.state;

		const WelcomeTSX = (
			<div className='showcase-welcome'>
				<h1>The Showcase</h1>
				<p>Make the Right click by you're mouse to select a case</p>
			</div>
		)

		const CaseTSX = (AnyCase) => <AnyCase />;

		return (
			<>
				{
					isMenuOpen
						? <Menu cases={core.cases} onChange={this.changeCase} />
						: currentCase
							? CaseTSX(currentCase)
							: WelcomeTSX
				}
			</>
		)
	}
}

export default Showcase;