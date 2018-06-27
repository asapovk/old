import React from 'react';
import { text, boolean, select, number, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { add as addDescription } from '../addons/description';
import { InnerContainer } from '../../src/index';
import Highlight from 'react-highlight'

import 'highlight.js/styles/foundation.css';

class StoryConstructor extends React.Component {

    getProps() {
        if (!this.props.data || !Array.isArray(this.props.data)) return;

        const props = {};

        this.props.data.forEach(prop => {
            switch (prop.type) {
                case 'Function':
                case 'Event': props[prop.value] = () => {
                    console.log(prop.value + " ", arguments);
                    action(prop.value);
                }; break;
            }
            if (prop.knob) {
                if (!prop.value) {
                    console.error("Нет значения value " + JSON.stringify(prop));
                    return;
                }
                switch (prop.knob.type) {
                    case 'number': props[prop.value] = number(prop.value, prop.knob.value || 0); break;
                    case 'text': props[prop.value] = text(prop.value, prop.knob.value || ''); break;
                    case 'boolean': props[prop.value] = boolean(prop.value, prop.knob.value || false); break;
                    case 'select': props[prop.value] = select(prop.value, prop.knob.value || {}, prop.knob.defaultValue); break;
                    case 'object': props[prop.value] = object(prop.value, prop.knob.value || {}); break;
                }
                if (props[prop.value] == 'none') props[prop.value] = null;
            }
        });

        return props;
    }

    getAttr(props) {
        let attr = '';
        Object.keys(props).forEach(val => {
            (!props[val] || typeof props[val] == 'function') ? '' :
                (typeof props[val] != 'boolean') ? attr = attr + val + '=' + JSON.stringify(props[val]) + ' ' :
                    attr = attr + val + ' ';
        });
        return attr;
    }

    getReference() {
        return this.reference;
    }

    componentDidMount() {
        addDescription(this.props.data)
    }

    render() {
        const Component = this.props.component,
            Additional = this.props.additional,
            type = this.props.render ? this.props.render.type : 'default',
            props = this.getProps();
        let render = { component: {}, code: '' };

        switch (type) {

            default:
                render.component = <Component ref={ref => this.reference = ref} {...props}>{this.props.children}</Component>;
                render.code = '<' + Component.name + ' ' + this.getAttr(props) + '/>';
                break;

            case 'Event':
                const Trigger = this.props.render.trigger;
                let event = {};
                event[this.props.render.value] = _ => Component[this.props.render.method](props);
                render.component = <Trigger {...this.props.render.triggerProps} {...event} />;
                render.code = '<' + Trigger.name + ' ' + this.getAttr(this.props.render.triggerProps) + this.props.render.value + '={_ => ' + Component.name + '.' + this.props.render.method + '(' + JSON.stringify(props) + ')} />';
                break;
        }

        return (
            <div>
                <InnerContainer style={{ padding: '100px 20px' }}>
                    {Additional}
                    {render.component}
                </InnerContainer>
                <div className='story-code'>
                    <p><b>Скопировать JSX:</b></p>
                    <div className='story-code-container'>
                        <Highlight className='jsx'>{render.code}</Highlight>
                    </div>
                </div>
            </div>
        )

    }
}

export default (component, data, additional, render) => {
    return class ExportClass extends React.Component {
        getReference() {
            return this.ref.getReference();
        }
        render() {
            return <StoryConstructor ref={ref => this.ref = ref} component={component} data={data} additional={additional} render={render}>{this.props.children}</StoryConstructor>;
        }
    }
};