import * as React from "react";
import core from '../../core';
import { Menu } from '../Menu';
import '../../styles/main.css';

interface ShowcaseProps {

}

interface Showcase {
	state: any
}

class Showcase extends React.Component<ShowcaseProps> {

	state = {
		currentCase: null,
		isMenuOpen: false
	} as any

	componentDidMount() {
		document.addEventListener('contextmenu', this._handleContextMenu);
	};

	componentWillUnmount() {
		document.removeEventListener('contextmenu', this._handleContextMenu);
	}

	_handleContextMenu = (event) => {
		event.preventDefault();
		this.setState({ isMenuOpen: true });
	};

	changeCase = (currentCase: React.ReactNode) => {
		this.setState({
			currentCase: currentCase,
			isMenuOpen: false
		});
	}

	render() {

		console.log(core.cases);

		const WelcomeTSX = (
			<div className='showcase-welcome'>
				<h1>The Showcase</h1>
				<p>Make the Right click by you're mouse to select a case</p>
			</div>
		)

		const CaseTSX = this.state.currentCase;

		return (
			<>
				{core.config.plugins}
				{this.state.isMenuOpen ? <Menu cases={core.cases} onChange={this.changeCase} /> : CaseTSX ? <CaseTSX /> : WelcomeTSX}
			</>
		)
	}
}

export default Showcase;