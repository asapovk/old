import {bar, panel, context} from './src/plugins'

export default {
    hideMenu: false,
    plugins: [
        bar({
            extentions: [
                context({})
            ]
        }),
        panel({})
    ] 
};