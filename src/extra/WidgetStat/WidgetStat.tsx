/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Widget, Icon, Flexbox } from '../../';
import createStyles from './styles';
interface Props {
    loading?: boolean | string
    className?: string
    style?: any
    children?: any
    onClick?: (MouseEvent?) => any
    actionTitle?: string
    title: string
    subtitle: string
    subtitle2: string
    value1: string
    value2: string
}

export default (props: Props) => {
    const styles = createStyles();

    const { children, onClick, actionTitle, loading, style, title, subtitle, subtitle2, value1, value2 } = props;

    return (
        <Widget loading={loading} style={style}>
            <Flexbox column css={styles.wrapper}>
                <Flexbox column flex={1}>
                    <Flexbox>
                        <Flexbox pr={10} flex={1} css={styles.title}>{title}</Flexbox>
                        <Flexbox css={styles.value2}><Icon type="chart" style={{ fontSize: '1.5 rem' }} />{value2}</Flexbox>
                    </Flexbox>
                    <Flexbox pt={5}>
                        <Flexbox pr={10} flex={1} css={styles.subtitle} >{subtitle}</Flexbox>
                        <Flexbox css={styles.subtitle2}>{subtitle2}</Flexbox>
                    </Flexbox>
                </Flexbox>
                <Flexbox pt={10} alignItems="flex-end">
                    <Flexbox pr={10} flex={1} css={styles.value1}>{value1}</Flexbox>
                    {typeof onClick === "function" ? <div css={styles.link} onClick={onClick}>{actionTitle || "Подробнее"}</div> : null}
                </Flexbox>
            </Flexbox>
            {typeof children !== "undefined" ? (
                <Flexbox flexDirection='column' flex={1} css={styles.extra}>{children}</Flexbox>
            ) : null}
        </Widget>
    );
};