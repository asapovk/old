import '../../styles/provider.scss';

class UIProvider extends React.Component {

    componentWillMount() {
        switch (this.props.theme) {
            default:
                return require('../../styles/themes/telegramDark.scss');
        }
    }

    render() {
        return (
            <div className='ui' {...this.props} />
        )
    }
}

export default UIProvider;