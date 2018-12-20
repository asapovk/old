import { IConfig, IPluginProps } from '../../types'
import { ReactNode } from 'react';
import PluginRender from './pluginRender';
import PanelRender from './panelRender';
import { Showcase } from 'interface/Showcase';

class Core {
    static instance: Core;
    static getInstance() {
        if (!this.instance) {
            this.instance = new Core();
        }
        return this.instance;
    }

    protected context: any;
    protected configObject: IConfig = {};
    protected generatedPluginsArray: any[] = [];
    protected generatedCasesObject: any = {};
    protected showcaseRef: Showcase | null = null

    constructor() {
        this.context = require['context']('../../../../cases', true, /\index.case$/);
        const config = require('../../../../showcase.config');
        if (config && config.default) {
            this.configObject = config.default;
        }
    }

    get cases() {
        return this.generatedCasesObject;
    }

    get config() {
        return this.configObject as IConfig;
    }

    get ref() {
        return this.showcaseRef;
    }

    private getId(prefix: string, id?: string) {
        let uniqueId = "";
        if (id) {
            id.split("").forEach(char => {
                uniqueId += char.charCodeAt(0).toString(16);
            });
        }
        if (!uniqueId) {
            uniqueId = Math.trunc(Math.random() * 99999999).toString();
        }
        return prefix + "-" + uniqueId;
    }

    private initPlugin(plugin: (props: IPluginProps) => void) {
        const pluginId = this.getId("PLUGIN");
        let selfContainer: HTMLElement = document.getElementById(pluginId)!;

        if (!selfContainer) {
            selfContainer = document.createElement('div');
            selfContainer.setAttribute("id", pluginId);
            document.body.appendChild(selfContainer);
        }

        const pluginObject = {
            id: pluginId,
            executer: plugin,
            render: (Node: ReactNode) => PluginRender(Node, selfContainer),
            panel: PanelRender
        };

        this.generatedPluginsArray.push(pluginObject);

        plugin({
            cases: this.cases,
            config: this.config,
            selfContainer,
            render: pluginObject.render,
            panel: pluginObject.panel
        });
    }

    public init() {
        /**
         * Generate cases
         */
        this.context.keys().map((currentContext: any) => {
            let objectLink = this.generatedCasesObject;

            currentContext.split('/').map((contextItem: any, index: number) => {
                if (!index) return;

                if (contextItem.match('.case')) {
                    objectLink.node = this.context(currentContext).default;
                } else {
                    if (!objectLink[contextItem]) {
                        objectLink[contextItem] = {
                            id: this.getId("CASE", contextItem)
                        }
                    }
                    objectLink = objectLink[contextItem];
                }
            });
        });
    }

    public initPlugins(showcaseRef: Showcase) {
        /**
         * Initiating plugins
         */
        this.showcaseRef = showcaseRef;
        if (this.config.plugins) {
            this.config.plugins.map(plugin => {
                this.initPlugin(plugin);
            });
        }
    }

    public getCaseById(id: string, cases?: any) {
        if (!cases) {
            cases = this.cases;
        }
        const keys = Object.keys(cases);
        for (let i = 0; i < keys.length; i++) {
            const group: any = cases[keys[i]];
            if (typeof group === "object" && !group.node) {
                const node = this.getCaseById(id, group);
                if (node) {
                    return node;
                }
            }
            if (group.id === id) {
                return group.node
            }
        }
    }
}

export default Core.getInstance();