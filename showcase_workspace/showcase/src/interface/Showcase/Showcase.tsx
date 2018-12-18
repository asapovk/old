import * as React from "react";
import core from '../../core';
import { Menu } from '../Menu';
import '../../styles/main.css';

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

	changeCase = (currentCase: React.ReactNode) => {
		this.setState({
			currentCase: currentCase,
			isMenuOpen: false
		});
	}

	render() {

		console.log(core.cases);

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
				{core.config.plugins}
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