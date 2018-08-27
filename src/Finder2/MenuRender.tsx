import React, { Fragment } from 'react';
import { Flexbox } from '../Flexbox';
import FinderNav from './FinderNav';
import FinderContent from './FinderContent';
import FinderFilter from './FinderFilter';
import FinderSection from './FinderSection';
import SectionRender from './SectionRender';

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
    isNav(child) {
        return this.isValid(child, FinderNav);
    }
    isSection(child) {
        return this.isValid(child, FinderSection);
    }

    private getAllSections(childs, sections = [] as any) {
        if (!Array.isArray(childs)) childs = [childs];
        let i = 0;
        while (i < childs.length) {
            if (childs[i].key && childs[i].key.match('section')) {
                if (childs[i].props.children[1]) {
                    this.getAllSections(childs[i].props.children[1], sections);
                }
            }
            if (this.isNav(childs[i])) {
                sections.push(childs[i]);
            }
            i++;
        }
        return sections
    }

    private FinderNavs(childs, level = 0) {
        if (!childs) return null;
        if (!Array.isArray(childs)) childs = [childs];
        return childs.map((child, index) => {
            if (this.isNav(child)) {
                const key = "section_" + level + "_" + index;
                return React.cloneElement(child, {
                    csk: key,
                    key: key,
                    active: (key === this.state.csk),
                    onClick: () => this.setState({ csk: key })
                });
            }
            if (this.isSection(child)) {
                const key = "section_" + level + "_" + index;
                const nav = React.cloneElement(child, {
                    cgk: key,
                    key: key,
                    active: (key === this.state.cgk),
                    onClick: () => {
                        this.setState({ cgk: this.state.cgk === key ? null : key })
                    }
                }) as any;

                const sectionContent = this.FinderNavs(nav.props.children, level + 1);

                return (
                    <Fragment key={"fragment_" + key}>
                        {nav}
                        <SectionRender filter={this.state.filter} children={sectionContent} />
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
                .filter(child => this.isNav(child))
                .find(child => this.state.csk === child.props.csk)
                .props;

            if (this.isNav(children)) {
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

    private filterSection(childs) {
        return childs.filter(child => {
            if (child.key.match('fragment_section')) {
                const section = child.props.children[0];
                if (section.props.label) {
                    return section.props.label.toUpperCase().match(this.state.filter)
                }
            }
            if (child.props.label) {
                return child.props.label.toUpperCase().match(this.state.filter)
            }
            return true;
        })
    }

    render() {
        let sections = this.FinderNavs(this.props.children);
        const content = this.finderContent(sections);

        if (this.state.filter) {
            sections = this.filterSection(sections);
        }
        return (
            <Flexbox>
                <Flexbox column className="ui-finder2-menu">
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