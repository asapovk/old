import config from '../../../compcase.config';

export default (require:string) => {
    
    switch (require) {
        case 'plugins':
            return config.plugins
    }
    
    return null
}