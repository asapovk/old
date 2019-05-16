/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useLayoutEffect, useState } from 'react'
import { Flexbox } from '../../'
import FinderFilter from './FinderFilter'
import FinderTypes from './types'
import createStyle from './styles';
interface MenuItem {
    index: string,
    filter: boolean
    filterValue: string
    filterPlaceholder: string
}

const Finder = (props: FinderTypes.Props) => {

    const styles = createStyle();

    const [menuItems, setMenuItems] = useState<MenuItem[]>([])

    const setState = (level: number, index: string, filter?: boolean, filterPlaceholder?: string) => {
        let items = JSON.parse(JSON.stringify(menuItems))
        items[level] = {
            index,
            filter,
            filterValue: '',
            filterPlaceholder,
        }
        items.length = level + 1
        setMenuItems(items)
    }

    const onFilterChange = (filterValue: string, level: number) => {
        setMenuItems(menuItems.map((item, index) =>
            (index === level) ? { ...item, filterValue } : item
        ))
    }

    const filterChildren = (children: any, filterValue: string) => {
        if (children && filterValue) {
            return (
                children.filter(child =>
                    child.props.label && child.props.label.toUpperCase().includes(filterValue.toUpperCase())
                )
            )
        }
        return children
    }

    const passProps = (children: any, finderLevel: number) => {
        let counter = 0
        return React.Children.map(children, (child: any) => {
            let index = finderLevel + '.' + counter
            let active = (menuItems.find(menu => menu.index == index))
            return React.cloneElement(child as any, {
                setFinderMenu: setState,
                finderLevel,
                finderIndex: finderLevel + '.' + counter++,
                active: active
            })
        })
    }

    const getCurrentChildren = (children: any, filterValue: string, level: number) => {
        let currentChildren = children

        for (let i = 1; i <= level; i++) {
            currentChildren = passProps(
                React.Children.map(currentChildren, (child: any) => {
                    if (child.props.finderIndex === menuItems[i].index) {
                        return child.props.children
                    }
                }), i)
        }

        return filterChildren(currentChildren, filterValue)
    }

    const children = passProps(props.children, 0)

    const Menus = () => (
        menuItems.map((menu, index) => (
            <Flexbox column css={styles.menu} key={index}>
                {menu.filter && (
                    <FinderFilter level={index} onChange={onFilterChange} placeholder={menu.filterPlaceholder} />
                )}
                <Flexbox column css={styles.items}>
                    {getCurrentChildren(children, menu.filterValue, index)}
                </Flexbox>
            </Flexbox>
        ))
    )

    useLayoutEffect(() => {
        setState(0, 'root', props.filter, props.filterPlaceholder)
    }, [])

    return (
        <Flexbox
            css={styles.root}
            inline={true}
            children={Menus()}
        />
    )
}
export default Finder
