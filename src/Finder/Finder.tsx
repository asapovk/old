import React from 'react';


interface FinderProps {
    filter?: boolean;
    tip?: boolean;
}

class Finder extends React.Component<FinderProps> {

    render() {

        const { filter, children } = this.props;

        return (
            <div className='ui-columnview'>
                {children}
            </div>
        )

    }
}