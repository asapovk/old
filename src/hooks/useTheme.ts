import { useContext } from 'react';
import { StylesContext } from '../styles';

/**
 * Использовать тему оформления
 */
export default () => {
    return useContext(StylesContext);
}