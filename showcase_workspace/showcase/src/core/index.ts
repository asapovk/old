class Core {
    static instance: Core;
    static getInstance() {
        if (!this.instance) {
            this.instance = new Core();
        }
        return this.instance;
    }

    protected context: any;
    protected generatedConfigObject: any;
    protected generatedCasesObject: any = {};

    constructor() {
        this.context = require['context']('../../../../cases', true, /\index.case$/);
        this.generatedConfigObject = require('../../../../compcase.config');
        this.init();
    }

    get cases() {
        return this.generatedCasesObject;
    }

    get config() {
        return this.generatedConfigObject.default;
    }

    private getId() {
        return "SCID-" + Math.trunc(Math.random() * 99999999);
    }

    private init() {
        this.context.keys().map((currentContext: any) => {
            let objectLink = this.generatedCasesObject;

            currentContext.split('/').map((contextItem: any, index: number) => {
                if (!index) return;

                if (contextItem.match('.case')) {
                    objectLink.node = this.context(currentContext).default;
                } else {
                    if (!objectLink[contextItem]) {
                        objectLink[contextItem] = {
                            id: this.getId()
                        }
                    }
                    objectLink = objectLink[contextItem];
                }
            });
        });
    }
}

export default Core.getInstance();