import * as React from "react";
import core from '../../core';
import { Menu } from '../Menu';
import { Panel } from '../Panel';
import { Welcome } from '../Welcome';

interface State {
	CurrentCase: React.SFC<{}>
	isMenuOpen: boolean,
	items: {
		id: string
		name: string,
		render: React.SFC<{}>
	}[],
	tools: React.SFC<{}>[],
	Wrapper: typeof React.Component | null,
	wrapperProps: any,
	context: any
}

class Showcase extends React.Component<{}, State>  {

	state: Readonly<State> = {
		CurrentCase: Welcome,
		isMenuOpen: false,
		items: [],
		tools: [],
		Wrapper: null,
		wrapperProps: {},
		context: {}
	}

	constructor(props) {
		super(props);
		this.changeCase = this.changeCase.bind(this);
		this.handleContextMenu = this.handleContextMenu.bind(this);
		this.addMenuData = this.addMenuData.bind(this);
		this.setContext = this.setContext.bind(this);
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

	setContext(newContext) {
		this.setState({
			context: newContext
		})
	}

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

		const { isMenuOpen, CurrentCase, items, tools, Wrapper, context } = this.state;
		const Context = core.getReactContext;

		if (isMenuOpen) {
			return (
				<Menu cases={core.cases} onChange={this.changeCase} />
			)
		}

		if (Wrapper) return (
			<Context.Provider value={{ ...context, setContext: this.setContext }}>
				<Panel items={items} tools={tools} />
				<Wrapper><CurrentCase /></Wrapper>
			</Context.Provider>
		)

		return (
			<Context.Provider value={{ ...context, setContext: this.setContext }}>
				<Panel items={items} tools={tools} />
				<CurrentCase />
			</Context.Provider>
		)
	}
}

export default Showcase;