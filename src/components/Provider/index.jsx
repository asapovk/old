import '../../styles/provider.scss';

class UIProvider extends React.Component {

    render() {
        return (
            <div className='ui' {...this.props} />
        )
    }
}

export default UIProvider;