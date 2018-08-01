import { withRouter } from 'react-router-dom';
import Link from 'react-router-dom/es/Link';

@withRouter

class Main extends React.Component {

    static defaultProps = {
        route: ''
    }

    render() {
        const selected = this.props.location.pathname === this.props.route;

        let classes = 'nav-main';
        if (selected) classes += ' nav-main-selected';

        return (
            <Link to={this.props.route} className={classes}><span>{this.props.children}</span></Link>
        )
    }

}

export default Main;