/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Icon, Spin } from '../../';
import createStyles from './styles';
import Types from './types';

export default (props: Types.WidgetProps) => {
    const { title, loading, onClick, className, style, children, decoration } = props;
    const styles = createStyles(typeof onClick === 'function', decoration);

    return (
        <div
            css={styles.container}
            className={className}
            style={style}
            onClick={onClick}
        >
            {title && (
                <div css={styles.title}>{title}</div>
            )}
            {loading ? (
                <div css={styles.loading}>
                    <Spin>
                        <Icon type="sync" css={styles.icon} />
                    </Spin>
                    {typeof loading === "string" && (
                        <div css={styles.loadingText}>{loading}</div>
                    )}
                </div>
            ) : children}
        </div>
    )
}