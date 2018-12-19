import { IConfig, IPluginProps } from '../../types'
import { ReactNode } from 'react';
import PluginRender from './pluginRender';

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

    constructor() {
        this.context = require['context']('../../../../cases', true, /\index.case$/);
        const config = require('../../../../showcase.config');
        if (config && config.default) {
            this.configObject = config.default;
        }
        this.init();
    }

    get cases() {
        return this.generatedCasesObject;
    }

    get config() {
        return this.configObject as IConfig;
    }

    private getId(prefix: string) {
        return prefix + "-" + Math.trunc(Math.random() * 99999999);
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
            render: (Node: ReactNode) => {

                this.generatedPluginsArray.forEach(plugin => {
                    if (plugin.id === pluginId) {
                        PluginRender(Node, selfContainer);
                    }
                })
            }
        };
        this.generatedPluginsArray.push(pluginObject);

        plugin({
            cases: this.cases,
            config: this.config,
            selfContainer,
            render: pluginObject.render
        });
    }

    private init() {
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
                            id: this.getId("CASEID")
                        }
                    }
                    objectLink = objectLink[contextItem];
                }
            });
        });
        /**
         * Initiating plugins
         */
        if (this.config.plugins) {
            this.config.plugins.map(plugin => {
                this.initPlugin(plugin);
            });
        }
    }
}

export default Core.getInstance();