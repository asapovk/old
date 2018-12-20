import * as React from "react";
import core from '../../core';
import { Menu } from '../Menu';
import { Panel } from '../Panel'

const Welcome = () => (
	<div className='showcase-welcome'>
		<h1>The Showcase</h1>
		<p>Make the Right click by you're mouse to select a case</p>
	</div>
);
interface ShowcaseProps {

}

interface Showcase {
	state: {
		CurrentCase: any
		isMenuOpen: boolean
	}
}

class Showcase extends React.Component<ShowcaseProps> {

	state = {
		CurrentCase: Welcome as any,
		isMenuOpen: false
	}

	constructor(props) {
		super(props);
		this.changeCase = this.changeCase.bind(this);
		this.handleContextMenu = this.handleContextMenu.bind(this);
	}

	private handleContextMenu = (event: MouseEvent) => {
		if (!event.altKey) {
			event.preventDefault();
			this.setState({ isMenuOpen: !this.state.isMenuOpen });
		}
	};

	componentDidMount() {
		document.addEventListener('contextmenu', this.handleContextMenu);
		const id = localStorage.getItem('currentCaseID');
		if (id) {
			this.setState({
				CurrentCase: core.getCaseById(id)
			});
		}
	};

	componentWillUnmount() {
		document.removeEventListener('contextmenu', this.handleContextMenu);
	}

	changeCase(CurrentCase: any, currentCaseID: string) {
		this.setState({
			CurrentCase: CurrentCase,
			isMenuOpen: false
		});
		localStorage.setItem('currentCaseID', currentCaseID);
	}

	render() {

		const { isMenuOpen, CurrentCase } = this.state;
		const CaseWrapper = core.config.CaseWrapper || React.Fragment;

		if (isMenuOpen) {
			return (
				<Menu cases={core.cases} onChange={this.changeCase} />
			)
		}
		return (
			<CaseWrapper>
				<CurrentCase />
			</CaseWrapper>
		)
	}
}

export default Showcase;