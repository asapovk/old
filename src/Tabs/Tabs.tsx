
import React, { CSSProperties } from 'react';

import Tab from './Tab';
import { TabTypes } from './';
import TabContent from './TabContent';
import { Flexbox, Styles } from '../';


interface Props {
    type?: TabTypes
    style?: CSSProperties
    mobileCurrentPageTitle?: string
    children: any
}

class Tabs extends React.Component<Props> {

    static defaultProps = {
        style: {},
        type: "grid",
        mobileCurrentPageTitle: ""
    }

    view: HTMLElement
    tabRefs: any[] = [];
    maxDesktopWidth: 900;
    state = {
        currentTab: 0,
        mobileActive: false,
    }
    constructor(props) {
        super(props);

        //for event listeners
        this.updateLayout = this.updateLayout.bind(this);
    }

    updateLayout = e => {
        this.update(this.state.currentTab);
        this.mobileDeactivateTabIfNeeded();
    }

    onSelect(currentTab) {
        this.setState({ currentTab });
        this.update(currentTab);

        if (window.document.body.clientWidth <= this.maxDesktopWidth) {
            if (!this.state.mobileActive) {
                this.setState({
                    mobileActive: true
                });
                this.setBodyScroll(false);
            }
        }
    }

    private setBodyScroll(scroll = true) {
        document.body.style.overflow = scroll ? "auto" : 'hidden';
    }

    private mobileDeactivateTabIfNeeded() {
        if (window.document.body.clientWidth > this.maxDesktopWidth && this.state.mobileActive) {
            this.setState({
                mobileActive: false
            });
            this.setBodyScroll(true);
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.updateLayout);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateLayout);
        this.setBodyScroll(true);
    }

    componentWillReceiveProps(nextProps) {
        /**
         * Если изменилось колличество табов
         * рендерим заного
         */
        if (nextProps.children.length != this.props.children.length) {
            setTimeout(_ => {
                this.onSelect((this.state.currentTab >= nextProps.children.length) ? 0 : this.state.currentTab);
            }, 1);
        }
    }

    update(i) {
        if (this.tabRefs[-1]) {
            this.tabRefs[-1].setBackgroundSelectedIndex(i, this.tabRefs[i].offsetLeft, this.tabRefs[i].offsetWidth);
        }
    }

    render() {
        let tabs: any = this.props.children;

        if (Array.isArray(tabs) === false) {
            tabs = [tabs];
        }

        return (
            <Styles>
                {styles => (
                    <div className={`ui-tabs ui-tabs-${this.props.type}`} style={this.props.style} ref={ref => this.view = ref!}>
                        {/*
                        Tab Buttons
                    */}
                        <Flexbox className={`ui-tabs-container`} style={styles.tabs.container}>
                            {tabs.map((child, i) => {
                                const props = {
                                    key: i,
                                    index: i,
                                    type: this.props.type,
                                    icon: child.props.icon,
                                    label: child.props.label,
                                    right: child.props.right,
                                    disabled: child.props.disabled,
                                    bubble: child.props.bubble,
                                    active: this.state.currentTab === i,

                                    onClick: () => {
                                        this.onSelect(i)
                                    },

                                    //Для анимации
                                    buttonRef: ref => {
                                        this.tabRefs[i] = ref;
                                    },
                                    ref: ref => {
                                        if (i === 0) this.tabRefs[-1] = ref;
                                    },

                                    last: (tabs.length > 1 && i === tabs.length - 1)
                                }
                                return <Tab {...props} />;
                            })}
                        </Flexbox>
                        {/*
                        Tab TabContent
                    */}
                        {tabs.map((child, i) => {
                            if (this.state.currentTab === i) {
                                const props = {
                                    key: i,
                                    children: child.props.children,
                                    mobileActive: this.state.mobileActive,
                                    backTitle: this.props.mobileCurrentPageTitle,
                                    label: child.props.label,
                                    onClose: () => {
                                        this.setState({ mobileActive: false });
                                        this.setBodyScroll(true);
                                    }
                                }
                                return <TabContent {...props} active={true} />;
                            }
                            return null;
                        })}
                    </div>
                )}
            </Styles>
        )
    }
}

export default Tabs;