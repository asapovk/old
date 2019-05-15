/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { C1, Flexbox } from '../../';
import Types from './types'


export default (props: Types.RowProps) => {
    const { values, disabled, last, onChange } = props;
    return (
        <Flexbox mb={last ? '0.5rem' : '0'}>
            {values.map(value => (
                <C1
                    key={value.index}
                    bold
                    mr='0.75rem'
                    children={value.label}
                    onClick={() => onChange({
                        ...value,
                        selected: !value.selected
                    })}
                    css={css({ textTransform: 'capitalize' })}
                    disabled={disabled}
                    color={value.selected ? 'text' : 'lowlight'}
                />
            ))}
        </Flexbox>
    )
}