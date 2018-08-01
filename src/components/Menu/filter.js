import { withRouter } from 'react-router-dom';
import Icon from '../Icons';

@withRouter

class Filter extends React.Component {

    static defaultProps = {
        route: '',
        onReset: _ => { },
        onAdd: fn => { }
    }

    // componentDidMount() {
    //     this.props.onAdd(this.onAdd.bind(this));
    // }


    changePage() {
        this.props.history.push(this.props.route);
        this.props.onAdd(this.onAdd.bind(this));
    }

    onAdd() {
        console.log("Called add " + this.props.route);
    }

    render() {
        const selected = this.props.location.pathname === this.props.route;

        let classes = 'nav-filter';
        if (selected) classes += ' nav-filter-selected';
        if (this.props.active) classes += ' nav-filter-active';

        return (
            <div className={classes}>
                <button onClick={this.changePage.bind(this)}>
                    <span className='nav-filter-label'>{this.props.children}</span>
                    <span className='nav-filter-counter'>{this.props.counter}</span>
                </button>
                <button className='nav-filter-close' onClick={this.props.onReset}><Icon type='close'/></button>
            </div>
        )
    }

}

export default Filter;