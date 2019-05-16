/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Flexbox, Widget } from '../../../';
import createStyles from '../styles';
import Types from '../types';

export default (props: Types.Props) => {
    const styles = createStyles(props.narrowed);

    const { className, rowRender, groupKey, pendingRows } = props;

    const data = new Array(pendingRows || 3).fill('');

    const Wrapper = props.narrowed ? Widget : Flexbox;
    const RowWrapper = props.narrowed ? Flexbox : Widget;

    return (
        <div css={css({ marginTop: groupKey ? '2.5rem' : 0 })} className={className}>
            <Wrapper flex={1} column decoration='none'>
                {data.map((row, index) => (
                    <RowWrapper
                        css={styles.row}
                        key={`row-${index}`}
                    >
                        {rowRender(row)}
                    </RowWrapper>
                ))}
            </Wrapper>
        </div>
    )
}