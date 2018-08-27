import React from 'react';
import MenuRender from './MenuRender';

interface FinderProps {
    filter?: boolean
    filterPlaceholder?: string
}

class Finder extends React.Component<FinderProps> {
    render() {
        return (
            <div className="ui-finder2">
                <MenuRender {...this.props} />
            </div>
        )
    }
}

export default Finder;