import React, { Fragment } from 'react';

interface SectionRenderProps {
    filter?: string
}

class SectionRender extends React.Component<SectionRenderProps> {
    private finderContent(childs) {
        // if (this.state.csk === null) return null;
        // try {
        //     const { children, filter, filterPlaceholder } = this.getAllSections(childs)
        //         .filter(child => this.isNav(child))
        //         .find(child => this.state.csk === child.props.csk)
        //         .props;

        //     if (this.isNav(children)) {
        //         return (
        //             <MenuRender children={children} filter={filter} filterPlaceholder={filterPlaceholder} />
        //         )
        //     }
        //     return (
        //         <FinderContent children={children} filter={filter} filterPlaceholder={filterPlaceholder} />
        //     )
        // } catch (error) {
        //     return null;
        // }
    }

    render() {
        console.log(this.props.filter)
        return (
            this.props.children
        )
    }
}

export default SectionRender;