import React from 'react';
import { Icon } from '../Icon';
import { Flexbox } from '../Flexbox';
import FinderFilter from './FinderFilter';

interface FinderContentProps {
    filter?: boolean
    filterPlaceholder?: string
}

class FinderContent extends React.Component<FinderContentProps> {

    state = {
        filter: ""
    }

    render() {
        let { filter, filterPlaceholder, children } = this.props;

        if (this.state.filter) {
            if (Array.isArray(children)) {
                children = children.filter(child => {
                    if (React.isValidElement(child)) {
                        const { label } = child.props as any
                        if (label) {
                            return label.toUpperCase().match(this.state.filter);
                        }
                    }
                    return true;
                })
            }
        }
        return (
            <Flexbox column className="ui-finder2-content">
                {filter && <FinderFilter placeholder={filterPlaceholder} clearable onChange={value => {
                    this.setState({ filter: value.toUpperCase() })
                }} />}
                {children}
            </Flexbox>
        )
    }
}

export default FinderContent;