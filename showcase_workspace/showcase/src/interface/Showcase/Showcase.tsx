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


interface Showcase {
	state: {
		CurrentCase: any
		isMenuOpen: boolean,
		items: {
			id: string
			name: string,
			render: React.ReactNode
		}[],
		tools: React.ReactNode[],
		Wrapper: typeof React.Component | null
	}
}

class Showcase extends React.Component {

	state = {
		CurrentCase: Welcome as any,
		isMenuOpen: false,
		items: [] as {
			id: string
			name: string,
			render: React.ReactNode
		}[],
		tools: [] as React.ReactNode[],
		Wrapper: null as typeof React.Component | null
	}

	constructor(props) {
		super(props);
		this.changeCase = this.changeCase.bind(this);
		this.handleContextMenu = this.handleContextMenu.bind(this);
		this.addMenuData = this.addMenuData.bind(this);
	}

	private handleContextMenu = (event: MouseEvent) => {
		if (!event.altKey) {
			event.preventDefault();
			this.setState({ isMenuOpen: !this.state.isMenuOpen });
		}
	};

	componentDidMount() {
		core.init();
		document.addEventListener('contextmenu', this.handleContextMenu);
		const id = localStorage.getItem('currentCaseID');
		if (id) {
			this.setState({
				CurrentCase: core.getCaseById(id)
			});
		}
	};

	addMenuData(item, tool) {
		if (item) item = Object.assign(item, { id: Math.trunc(Math.random() * 99999999).toString() })
		this.setState({
			items: item ? [...this.state.items, item] : this.state.items,
			tools: tool ? [...this.state.tools, tool] : this.state.tools,
		})
	}

	addWrapper(Wrapper: typeof React.Component) {
		this.setState({
			Wrapper: Wrapper
		})
	}

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

		const Wrapper = this.state.Wrapper

		if (isMenuOpen) {
			return (
				<Menu cases={core.cases} onChange={this.changeCase} />
			)
		}

		if (Wrapper) return (
			<Wrapper>
				<Panel items={this.state.items} tools={this.state.tools} />
				<CurrentCase />
			</Wrapper>
		)

		return (
			<>
				<Panel items={this.state.items} tools={this.state.tools} />
				<CurrentCase />
			</>
		)
	}
}

export default Showcase;