import AppActions from 'actions/app';
import Icon from '../Icons';
import './style.scss';

class Menu extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='header'>
                <div className='menu'>
                    <div className='nav'>{this.props.children}</div>
                    <button className='add' onClick={_ => AppActions.menuActions.add()}><Icon type='add'/></button>
                </div>
            </div>
        )
    }
}

export default Menu;