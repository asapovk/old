import * as React from "react";
import core from '../core';
import { Menu, Panel, Welcome } from './components';
import './styles/main.css';

interface State {
	CurrentCase: React.SFC<{}>
	isMenuOpen: boolean,
	panelItems: {
		id: string
		name: string,
		render: React.SFC<{}>
	}[],
	panelTools: React.SFC<{}>[],
	Wrapper: typeof React.Component | null,
	wrapperProps: any,
	context: any
}

class UI extends React.Component<{}, State>  {

	state: Readonly<State> = {
		CurrentCase: Welcome,
		isMenuOpen: false,
		panelItems: [],
		panelTools: [],
		Wrapper: null,
		wrapperProps: {},
		context: {}
	}

	constructor(props) {
		super(props);
		this.handleContextMenu = this.handleContextMenu.bind(this);
		this.changeCase = this.changeCase.bind(this);
		this.addOnPanel = this.addOnPanel.bind(this);
		this.setWrapper = this.setWrapper.bind(this);
		this.setContext = this.setContext.bind(this);
	}

	componentWillMount() {
		core.init({
			setWrapper: this.setWrapper,
			addOnPanel: this.addOnPanel
		});
		document.addEventListener('contextmenu', this.handleContextMenu);
		const id = localStorage.getItem('currentCaseID');
		if (id) {
			this.setState({
				CurrentCase: core.getCaseById(id)
			});
		}
	};

	private handleContextMenu = (event: MouseEvent) => {
		if (!event.altKey) {
			event.preventDefault();
			this.setState({ isMenuOpen: !this.state.isMenuOpen });
		}
	};

	setContext(nextContext) {
		this.setState({
			context: nextContext
		})
	}

	addOnPanel(add) {
		if (add.item) add.item = Object.assign(add.item, { id: core.getId('panel') });
		this.setState(state => ({
			panelTools: add.tool ? [...state.panelTools, add.tool] : state.panelTools,
			panelItems: add.item ? [...state.panelItems, add.item] : state.panelItems,
		}));
	}

	setWrapper(Wrapper: typeof React.Component) {
		this.setState({
			Wrapper: Wrapper
		})
	}

	changeCase(CurrentCase: any, currentCaseID: string) {
		this.setState({
			CurrentCase: CurrentCase,
			isMenuOpen: false
		});
		localStorage.setItem('currentCaseID', currentCaseID);
	}

	componentWillUnmount() {
		document.removeEventListener('contextmenu', this.handleContextMenu);
	}

	render() {

		const { isMenuOpen, CurrentCase, panelItems, panelTools, Wrapper, context } = this.state;
		const Context = core.getReactContext;

		if (isMenuOpen) {
			return (
				<Menu cases={core.cases} onChange={this.changeCase} />
			)
		}

		return (
			<Context.Provider value={{ ...context, setContext: this.setContext }}>
				<Panel items={panelItems} tools={panelTools} />
				{Wrapper ? <Wrapper><CurrentCase /></Wrapper> : <CurrentCase />}
			</Context.Provider>
		)
	}
}

export default UI;