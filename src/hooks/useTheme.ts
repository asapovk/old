import { useContext } from 'react';
import { StylesContext } from '../Styles';

/**
 * Использовать тему оформления
 */
export default () => {
    return useContext(StylesContext);
}