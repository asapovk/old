
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Icon, Flexbox } from '../../';
import FinderTypes from './types';
import { useRef, ChangeEvent } from 'react';
import { TextField } from '../../core/TextField';
import createStyle from './styles';

const FinderFilter = (props: FinderTypes.FilterProps) => {
    const { placeholder, clearable } = props;
    const input = useRef<any>();
    const styles = createStyle();
    const onChange = (event?: ChangeEvent<HTMLInputElement>) => {
        if (!event) {
            props.onChange("", props.level);
            input.current.value = "";
        } else {
            props.onChange && props.onChange(event.target.value, props.level);
        }
    }


    return (
        <div css={styles.filter}>
            <TextField
                leftIcon='search'
                size='small'
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default FinderFilter;