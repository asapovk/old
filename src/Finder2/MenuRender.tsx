import React, { Fragment } from 'react';
import { Flexbox } from '../Flexbox';
import FinderSection from './FinderSection';
import FinderContent from './FinderContent';
import FinderFilter from './FinderFilter';
import FinderGroup from './FinderGroup';

interface MenuRenderProps {
    filter?: boolean
    filterPlaceholder?: string
}

class MenuRender extends React.Component<MenuRenderProps> {

    state = {
        filter: "",
        csk: null,
        cgk: null,
    }

    isValid(child, cls) {
        try {
            if (Array.isArray(child)) {
                child = child[0];
            }
            return (child.type.name === cls.name)
        } catch (error) {
            return false
        }
    }
    isSection(child) {
        return this.isValid(child, FinderSection);
    }
    isGroup(child) {
        return this.isValid(child, FinderGroup);
    }

    private getAllSections(childs, sections = [] as any) {
        if (!Array.isArray(childs)) childs = [childs];
        let i = 0;
        while (i < childs.length) {
            if (childs[i].key && childs[i].key.match('group')) {
                if (childs[i].props.children[1]) {
                    this.getAllSections(childs[i].props.children[1], sections);
                }
            }
            if (this.isSection(childs[i])) {
                sections.push(childs[i]);
            }
            i++;
        }
        return sections
    }

    private finderSections(childs, level = 0) {
        if (!childs) return null;
        if (!Array.isArray(childs)) childs = [childs];
        return childs.map((child, index) => {
            if (this.isSection(child)) {
                const key = "section" + level + "" + index;
                return React.cloneElement(child, {
                    csk: key,
                    key: key,
                    active: (key === this.state.csk),
                    onClick: () => {
                        console.log(key)
                        this.setState({ csk: key })
                    }
                });
            }
            if (this.isGroup(child)) {
                const key = "group" + level + "" + index;
                const group = React.cloneElement(child, {
                    cgk: key,
                    key: key,
                    active: (key === this.state.cgk),
                    onClick: () => {
                        this.setState({ cgk: this.state.cgk === key ? null : key })
                    }
                }) as any;

                return (
                    <Fragment key={key}>
                        {group}
                        {this.state.cgk === key && this.finderSections(group.props.children, level + 1)}
                    </Fragment>
                )
            }
            return child;
        });
    }

    private finderContent(childs) {
        if (this.state.csk === null) return null;
        try {
            const { children, filter, filterPlaceholder } = this.getAllSections(childs)
                .filter(child => this.isSection(child))
                .find(child => this.state.csk === child.props.csk)
                .props;

            if (this.isSection(children)) {
                return (
                    <MenuRender children={children} filter={filter} filterPlaceholder={filterPlaceholder} />
                )
            }
            return (
                <FinderContent children={children} filter={filter} filterPlaceholder={filterPlaceholder} />
            )
        } catch (error) {
            return null;
        }
    }
    render() {
        let sections = this.finderSections(this.props.children);
        const content = this.finderContent(sections);

        if (this.state.filter) {
            sections = sections.filter(section => section.props.label.toUpperCase().match(this.state.filter))
        }
        return (
            <Flexbox>
                <Flexbox column className="ui-finder-menu">
                    {this.props.filter && <FinderFilter placeholder={this.props.filterPlaceholder} clearable onChange={value => {
                        this.setState({ filter: value.toUpperCase() })
                    }} />}
                    {sections}
                </Flexbox>
                {content}
            </Flexbox>
        )
    }
}

export default MenuRender;